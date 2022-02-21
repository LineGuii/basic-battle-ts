import ExpiringEffect from "../model/ExpiringEffect";

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

export enum SkillEffectTypeEnum {
    PHYSICAL = "PHYSICAL",
    MAGICAL = "MAGICAL",
}

export type SkillOutput = {
    success: boolean;
    effect: number,
    critical: boolean,
    healing?: boolean,
    expiringEffect?: ExpiringEffect
}