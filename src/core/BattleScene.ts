import BattleCharacter from "../model/BattleCharacter";

export default class BattleScene {
    battleCharacters: BattleCharacter[];
    currentTurn: number = 0;

    constructor(battleCharacters: BattleCharacter[]) {
        console.log("A batalha começou!!!")
        this.battleCharacters = battleCharacters;
    }

    passTurn(): number {
        this.endTurn();
        this.startTurn();
        return this.currentTurn;
    }

    endTurn(): void {
        this.currentTurn++;
        console.log("Turno terminou");
    }

    startTurn(): void {
        console.log("Turno começou");

        this.battleCharacters.forEach(bc => {
            bc.turnStarted(this.currentTurn);
        });
    }
}