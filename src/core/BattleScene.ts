import BattleCharacter from "../model/BattleCharacter";

export default class BattleScene {
    battleCharacters: BattleCharacter[] = [];
    turnOrder: BattleCharacter[] = [];
    currentTurn: number = 0;
    currentRound: number = 0;

    battleCharacterTurn!: BattleCharacter;

    constructor() {
    }

    addBattleCharacter(battleCharacter: BattleCharacter) {
        this.battleCharacters.push(battleCharacter);
        this.turnOrder = this.getTurnOrder();
        this.battleCharacterTurn = this.turnOrder[0];
    }

    startBattle() {
        if (this.battleCharacters.length < 2) {
            console.log("Erro ao iniciar a batalha, necessário ao menos 2 personagens");
            return;
        }

        console.log("A batalha começou!!!");
        this.startTurn();
    }

    getTurnOrder(): BattleCharacter[] {
        return this.battleCharacters.sort((a: BattleCharacter, b: BattleCharacter) =>
            (a.battleAttributes.speed < b.battleAttributes.speed) ? 1 : -1
        );
    }

    nextTurn(): number {
        this.endTurn();
        this.battleCharacterTurn = this.getNextTurnCharacter();
        this.startTurn();
        return this.currentTurn;
    }

    private getNextTurnCharacter(): BattleCharacter {
        if (this.currentTurn > this.turnOrder.length * (this.currentRound + 1)) {
            this.currentRound++;
        }
        console.log("Turno:", this.currentTurn);
        console.log("Round:", this.currentRound);
        return this.turnOrder[this.currentTurn % this.turnOrder.length];
    }

    private endTurn(): void {
        this.currentTurn++;
        console.log("Turno terminou");
    }

    private startTurn(): void {
        console.log("Turno começou");
        console.log("Turno de:", this.battleCharacterTurn.character.name);

        // this.battleCharacters.forEach(bc => {
        //     bc.turnStarted(this.currentTurn);
        // });

        this.battleCharacterTurn.turnStarted(this.currentRound);
    }
}