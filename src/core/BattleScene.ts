import BattleCharacter from "../model/BattleCharacter";
import ISkill from "../model/interface/ISkill";
import ITerrain from "../model/interface/ITerrain";
import question from "../util/ConsoleUtil";
import Turn from "./Turn";

export default class BattleScene {
    battleCharacters: BattleCharacter[] = [];
    turnOrder: BattleCharacter[] = [];
    turn: Turn;
    terrain: ITerrain;
    private ended: boolean = false;

    constructor(battleCharacters: BattleCharacter[], terrain: ITerrain) {
        this.battleCharacters = battleCharacters;
        this.terrain = terrain;
        this.turnOrder = this.getTurnOrder();
        this.turn = new Turn(this.turnOrder[0]);
    }

    addBattleCharacter(battleCharacter: BattleCharacter) {
        this.battleCharacters.push(battleCharacter);
        this.turnOrder = this.getTurnOrder();
    }

    async startBattle() {

        if (this.ended) {
            console.log("Erro ao iniciar a batalha, batalha já finalizada");
            return;
        }

        if (this.battleCharacters.length < 2) {
            console.log("Erro ao iniciar a batalha, necessário ao menos 2 personagens");
            return;
        }

        console.log("A batalha começou!!!");
        this.turn.startTurn();
        await this.characterChoices();
    }

    endBattle() {
        this.ended = true;
    }

    private async nextTurn() {
        this.turn.endTurn();

        this.checkWinCondition();
        
        // If the battle ended
        if (this.ended) {
            return;
        }

        this.turn.battleCharacter = this.getNextTurnCharacter();
        this.turn.startTurn(); // TURN STARTED
        this.terrain.effect(this.turn.turnNumber, this.turn.battleCharacter, this.battleCharacters); // TERRAIN EFFECT

        // If character is not active
        if (!this.turn.battleCharacter.battleAttributes.active) {
            console.log(`${this.turn.battleCharacter.character.name} está paralizado e não consegue fazer nenhuma ação.`);
            this.nextTurn();
        }

        await this.characterChoices();
        return this.turn.turnNumber;
    }

    private getTurnOrder(): BattleCharacter[] {
        return this.battleCharacters.sort((a: BattleCharacter, b: BattleCharacter) =>
            (a.battleAttributes.speed < b.battleAttributes.speed) ? 1 : -1
        );
    }

    private async characterChoices(): Promise<void> {
        const action = await question('Choose your action:\n\t1 - Action\n\t2 - Move\n');
        
        if (Number(action) === 1) {
            await this.chooseAction();
        } else if (Number(action) === 2) {
            this.turn.moveStep();
        }

        await this.nextTurn();
    }

    private getNextTurnCharacter(): BattleCharacter {
        if (this.turn.turnNumber > this.turnOrder.length * (this.turn.roundNumber)) {
            this.turn.endRound();
            this.turn.startRound();
        }
        console.log("Turno:", this.turn.turnNumber);
        console.log("Round:", this.turn.roundNumber);
        return this.turnOrder[this.turn.turnNumber % this.turnOrder.length];
    }

    private async chooseAction() {
        let skillNames = "";
        this.turn.battleCharacter.character.skillList.forEach((skill: ISkill, index: number) => {
            skillNames += `\n\t${index + 1} - ${skill.name}`;
        });
        const action = await question(`Choose your skill:${skillNames}\n`);

        let targets = "";
        const availableTargets: BattleCharacter[] = this.battleCharacters.filter(bc => bc.currentLife > 0  && bc.character.name !== this.turn.battleCharacter.character.name)
        availableTargets.forEach((bc: BattleCharacter, index: number) => {
            targets += `\n\t${index + 1} - ${bc.character.name}`;
        })
        const target = await question(`Choose your target:${targets}\n`);

        this.turn.actionStep(this.turn.battleCharacter.character.skillList[Number(action) - 1], availableTargets[Number(target) - 1]);
    }

    private checkWinCondition() {
        const bcAlive = this.battleCharacters.filter(bc => bc.currentLife > 0);

        if (bcAlive.length === 1) {
            this.endBattle();
            console.log("A batalha terminou!!!");
            console.log("O vencedor é:", bcAlive[0].character.name);
        }
    }
}