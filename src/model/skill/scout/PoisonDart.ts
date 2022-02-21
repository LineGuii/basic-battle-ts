import { normalizeDamageSkillHitChance } from "../../../util/SkillUtil";
import BattleCharacter from "../../BattleCharacter";
import { SkillEffectTypeEnum, SkillOutput, SkillTargetEnum, SkillTypeEnum } from "../../../enum/SkillEnum";
import ISkill from "../../interface/ISkill";
import ExpiringEffect from "../../ExpiringEffect";
import Poison from "../../status-effect/Poison";

const PoisonDart: ISkill = {
    name: "Poison Dart",
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
        let ee;

        const r = Math.random();

        if (r * 100 < hitChance) {
            success = true;

            const r3 = Math.random();
            if (r3 * 100 < 33) {
                ee = new Poison(3, turn, (target.maximumLife * 0.01) + 1, "Poison");                
            }

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
            critical: critical,
            expiringEffect: ee
        }
    },

    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => {
        const hitChance = normalizeDamageSkillHitChance(Math.round(target.calculateHitChance(user.battleAttributes.accuracy)));
        return hitChance;
    },
    
    skillEffectNumber: (user: BattleCharacter, target: BattleCharacter) => {
        const damage = user.battleAttributes.attack * 0.8;
        return damage
    },

    skillCriticalChance: (user: BattleCharacter) => {
        const chance = user.battleAttributes.criticalChance;
        return chance;
    }
}

export default PoisonDart;