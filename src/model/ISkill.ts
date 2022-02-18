import BattleCharacter from "./BattleCharacter";

export default interface ISkill {
    name: string,
    id: number,
    resourceCost: number,
    type: SkillTypeEnum,
    range: number,
    target: SkillTargetEnum,
    area: number,
    damageType: SkillDamageTypeEnum,
    jobId: number,
    accuracyModifier: number,
    
    use: (user: BattleCharacter, target: BattleCharacter, hitChance: number, skillDamage: number, criticalChance: number) => SkillOutput,
    skillHitChance: (user: BattleCharacter, target: BattleCharacter) => number,
    skillDamage: (user: BattleCharacter, target: BattleCharacter) => number,
    skillCriticalChance: (user: BattleCharacter) => number
}

export enum SkillTypeEnum {
    BUFF = "BUFF",
    DAMAGE = "DAMAGE"
}

export enum SkillTargetEnum {
    SELF = "SELF",
    ENEMY = "ENEMY",
    AREA = "AREA",
    ALLIES = "ALLIES",
    PASSIVE = "PASSIVE"
}

export enum SkillDamageTypeEnum {
    PHYSICAL = "PHYSICAL",
    MAGICAL = "MAGICAL",
}

export type SkillOutput = {
    success: boolean;
    damage: number,
}