export function normalizeDamageSkillHitChance(hitChance: number) {
    if (hitChance > 95) {
        hitChance = 95;
    }

    if (hitChance < 5) {
        hitChance = 5;
    }

    return hitChance;
}