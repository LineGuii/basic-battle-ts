import { SkillEffectTypeEnum, SkillOutput, SkillTargetEnum, SkillTypeEnum } from "../../enum/SkillEnum";
import BattleCharacter from "../BattleCharacter";

export default interface ISkill {
    name: string,
    desc: string,
    id: number,
    resourceCost: number,
    type: SkillTypeEnum,
    range: number,
    target: SkillTargetEnum,
    area: number,
    effectType: SkillEffectTypeEnum,
    jobId: number,
    
    execute: (user: BattleCharacter, target: BattleCharacter, hitChance: number, skillEffectNumber: number, criticalChance: number, turn: number) => SkillOutput,
    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => number,
    skillEffectNumber: (user: BattleCharacter, target: BattleCharacter) => number,
    skillCriticalChance: (user: BattleCharacter) => number
}