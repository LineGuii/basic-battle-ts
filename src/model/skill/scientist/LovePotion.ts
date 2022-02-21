import { normalizeDamageSkillHitChance } from "../../../util/SkillUtil";
import BattleCharacter from "../../BattleCharacter";
import { SkillEffectTypeEnum, SkillOutput, SkillTargetEnum, SkillTypeEnum } from "../../../enum/SkillEnum";
import ISkill from "../../interface/ISkill";
import ExpiringEffect from "../../ExpiringEffect";

const LovePotion: ISkill = {
    name: "Love Potion",
    id: 2,
    resourceCost: 0,
    type: SkillTypeEnum.BUFF,
    range: 1,
    target: SkillTargetEnum.ENEMY,
    area: 1,
    effectType: SkillEffectTypeEnum.MAGICAL,
    jobId: 1,
    accuracyModifier: 1,

    execute: (user: BattleCharacter, target: BattleCharacter, hitChance: number, skillDamage: number, criticalChance: number, turn: number): SkillOutput => {
        let success = true;
        const ee = new ExpiringEffect("Attack UP!", 3, turn, (target) => {
            target.battleAttributes.attack *= 1.2;
        });

        return {
            effect: 0,
            success: success,
            critical: false,
            expiringEffect: ee
        }
    },

    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => {
        return 100;
    },
    
    skillEffectNumber: (user: BattleCharacter, target: BattleCharacter) => {
        return 0;
    },

    skillCriticalChance: (user: BattleCharacter) => {
        return 0;
    }
}

export default LovePotion;