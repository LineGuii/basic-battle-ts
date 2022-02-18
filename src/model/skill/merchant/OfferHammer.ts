import { normalizeDamageSkillHitChance } from "../../../util/SkillUtil";
import BattleCharacter from "../../BattleCharacter";
import ISkill, { SkillDamageTypeEnum, SkillTargetEnum, SkillTypeEnum } from "../../ISkill";

const OfferHammer: ISkill = {
    name: "Offer Hammer",
    id: 2,
    resourceCost: 0,
    type: SkillTypeEnum.DAMAGE,
    range: 1,
    target: SkillTargetEnum.ENEMY,
    area: 1,
    damageType: SkillDamageTypeEnum.PHYSICAL,
    jobId: 1,
    accuracyModifier: 1,

    use: (user: BattleCharacter, target: BattleCharacter, hitChance: number, skillDamage: number, criticalChance: number) => {
        let success = false;
        let damage = skillDamage;

        const r = Math.random();

        if (r * 100 < hitChance) {
            success = true;
            const r2 = Math.random();
            if (r2 * 100 < criticalChance) {
                console.log("CRITICAL");
                damage = skillDamage * 2;
            }
        }

        return {
            damage: damage,
            success: success,
        }
    },

    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => {
        const hitChance = normalizeDamageSkillHitChance(Math.round(target.calculateHitChance(user.battleAttributes.accuracy * 1.2)));
        return hitChance;
    },
    
    skillDamage: (user: BattleCharacter, target: BattleCharacter) => {
        const damage = user.battleAttributes.attack;
        return damage
    },

    skillCriticalChance: (user: BattleCharacter) => {
        const chance = user.battleAttributes.criticalChance * 10;
        return chance;
    }
}

export default OfferHammer;