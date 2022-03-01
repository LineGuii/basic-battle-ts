import { SkillEffectTypeEnum } from "../../enum/SkillEnum";
import BattleCharacter from "../BattleCharacter";
import ExpiringEffect from "../ExpiringEffect";

export default class Paralyze extends ExpiringEffect {
    
    constructor(turnsToExpire: number, startedTurn: number, name?: string) {
        super(name ? name : "Paralyze", turnsToExpire, startedTurn, (target: BattleCharacter) => Paralyze._paralyzeEffect(target), true);
    }

    private static _paralyzeEffect(target: BattleCharacter): void {
        console.log(target.character.name, "está paralizado!");

        const r = Math.random();
        if (r * 100 < 20) {
            console.log(target.character.name, "não consegue se mover por conta do paralizamento.");
            target.battleAttributes.moves = 0;
            target.battleAttributes.active = false;
        }
    }
}