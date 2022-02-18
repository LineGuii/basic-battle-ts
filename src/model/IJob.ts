export default interface IJob {
    id: number,
    name: string
    preJobId: number | null,

    // Attributes
    baseStrength: number,
    baseEndurance: number,
    baseAgility: number,
    baseInteligence: number,
    baseWisdom: number,
    baseDexterity: number,

    // Attributes Multipliers
    multStength: number,
    multEndurance: number,
    multAgility: number,
    multInteligence: number,
    multWisdom: number,
    multDexterity: number,
}