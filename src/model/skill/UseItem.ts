import { normalizeDamageSkillHitChance } from "../../util/SkillUtil";
import BattleCharacter from "../BattleCharacter";
import { SkillEffectTypeEnum, SkillTargetEnum, SkillTypeEnum } from "../../enum/SkillEnum";
import ISkill from "../interface/ISkill";

const UseItem: ISkill = {
    name: "Normal Attack",
    id: 2,
    resourceCost: 0,
    type: SkillTypeEnum.DAMAGE,
    range: 1,
    target: SkillTargetEnum.ENEMY,
    area: 1,
    effectType: SkillEffectTypeEnum.PHYSICAL,
    jobId: 1,
    accuracyModifier: 1,

    execute: (user: BattleCharacter, target: BattleCharacter, hitChance: number, skillDamage: number, criticalChance: number, turn: number) => {
        let success = false;
        let damage = skillDamage;
        let critical = false;

        const r = Math.random();

        if (r * 100 < hitChance) {
            success = true;
            const r2 = Math.random();
            if (r2 * 100 < criticalChance) {
                console.log("CRITICAL");
                critical = true;
                damage = skillDamage * 2;
            }
        }

        return {
            effect: damage,
            success: success,
            critical: critical
        }
    },

    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => {
        const hitChance = normalizeDamageSkillHitChance(Math.round(target.calculateHitChance(user.battleAttributes.accuracy)));
        return hitChance;
    },
    
    skillEffectNumber: (user: BattleCharacter, target: BattleCharacter) => {
        const damage = user.battleAttributes.attack;
        return damage
    },

    skillCriticalChance: (user: BattleCharacter) => {
        const chance = user.battleAttributes.criticalChance;
        return chance;
    }
}

export default UseItem;