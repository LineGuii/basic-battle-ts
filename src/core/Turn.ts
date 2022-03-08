import BattleCharacter from "../model/BattleCharacter";
import ISkill from "../model/interface/ISkill";
import DamageStep from "./DamageStep";

export default class Turn {
    turnNumber: number;
    battleCharacter: BattleCharacter;
    roundNumber: number;
    actions: string[] = [];
    moved: boolean = false;
    acted: boolean = false;

    constructor(battleCharacter: BattleCharacter) {
        this.turnNumber = 0;
        this.roundNumber = 1;
        this.battleCharacter = battleCharacter;
    }

    startRound(): void {
        console.log("Start round");
        this.roundNumber++;
    }

    endRound(): void {
        console.log("End round");
    }

    moveStep(): void {
        this.moved = true;
        console.log("Andou!");
    }

    actionStep(action: ISkill, target: BattleCharacter): void {
        const damageStep = new DamageStep(this.battleCharacter, target, action, this.turnNumber);
        damageStep.visualize();
        damageStep.execute();
        this.acted = true;
        this._getActions();
    }

    startTurn(): void {
        console.log("Turno começou");
        // Personagem
        console.log("Turno de:", this.battleCharacter.character.name);
        this.battleCharacter.turnStarted(this);
        this._getActions();
    }

    endTurn(): void {
        this.turnNumber++;
        this.actions = [];
        this.moved = false;
        this.acted = false
        console.log("Turno terminou");
    }

    private _getActions(): void {
        if (this.battleCharacter.battleAttributes.moves > 0 && !this.moved) {
            this.actions.push("Move");
        }

        if (this.battleCharacter.battleAttributes.active && !this.acted) {
            this.actions.push("Act");
        }
    }
}