import BattleCharacter from "../BattleCharacter";
import ExpiringEffect from "../ExpiringEffect";

export default class Charm extends ExpiringEffect {
    
    constructor(turnsToExpire: number, startedTurn: number) {
        super("Charm", turnsToExpire, startedTurn, (target: BattleCharacter) => this.charmed(target));
    }

    charmed(target: BattleCharacter): void {
        
    }
}