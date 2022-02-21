import { SkillEffectTypeEnum } from "../../enum/SkillEnum";
import BattleCharacter from "../BattleCharacter";
import ExpiringEffect from "../ExpiringEffect";

export default class Charm extends ExpiringEffect {
    
    constructor(turnsToExpire: number, startedTurn: number, damage: number, name?: string) {
        super(name ? name : "Poison", turnsToExpire, startedTurn, (target: BattleCharacter) => this._poisonTick(damage, target));
    }

    private _poisonTick(damage: number, target: BattleCharacter): void {
        target.takeDamage(damage, SkillEffectTypeEnum.TRUE);
        console.log("Poison damage:", damage);
    }
}