import { normalizeDamageSkillHitChance } from "../../../util/SkillUtil";
import BattleCharacter from "../../BattleCharacter";
import { SkillEffectTypeEnum, SkillTargetEnum, SkillTypeEnum } from "../../../enum/SkillEnum";
import ISkill from "../../interface/ISkill";
import { JobId } from "../../../enum/JobEnum";

const OfferHammer: ISkill = {
    name: "Heal",
    id: 3,
    resourceCost: 1,
    type: SkillTypeEnum.BUFF,
    range: 4,
    target: SkillTargetEnum.AREA,
    area: 1,
    effectType: SkillEffectTypeEnum.MAGICAL,
    jobId: JobId.Acolyte,
    accuracyModifier: 1,

    execute: (user: BattleCharacter, target: BattleCharacter, hitChance: number, skillHealAmount: number, criticalChance: number, turn: number) => {
        let success = true;
        let healAmount = skillHealAmount;

        return {
            effect: healAmount,
            success: success,
            critical: false,
            healing: true
        }
    },

    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => {
        return 100;
    },
    
    skillEffectNumber: (user: BattleCharacter, target: BattleCharacter) => {
        const healAmount = user.battleAttributes.magicAttack * 0.5;
        return Math.round(healAmount);
    },

    skillCriticalChance: (user: BattleCharacter) => {
        return 0;
    }
}

export default OfferHammer;