import { normalizeDamageSkillHitChance } from "../../../util/SkillUtil";
import BattleCharacter from "../../BattleCharacter";
import ISkill, { SkillDamageTypeEnum, SkillTargetEnum, SkillTypeEnum } from "../../ISkill";

const LovePotion: ISkill = {
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
                damage = skillDamage * 2;
            }
        }

        return {
            damage: damage,
            success: success,
        }
    },

    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => {
        const hitChance = normalizeDamageSkillHitChance(Math.round(target.calculateHitChance(user.battleAttributes.getAccuracy() * 1.5)));
        return hitChance;
    },
    
    skillDamage: (user: BattleCharacter, target: BattleCharacter) => {
        const damage = Math.round(target.calculateDamage(user.battleAttributes.getAttack(), SkillDamageTypeEnum.PHYSICAL));
        return damage
    },

    skillCriticalChance: (user: BattleCharacter) => {
        return 0;
    }
}

export default LovePotion;