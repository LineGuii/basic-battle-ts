export type BaseAttributes = {
    strength: number,
    endurance: number,
    agility: number,
    inteligence: number,
    wisdom: number,
    dexterity: number,
}

export default class CharacterAttributes {
    strength: number;
    endurance: number;
    agility: number;
    inteligence: number;
    wisdom: number;
    dexterity: number;

    attack: number;
    magicAttack: number;
    defense: number;
    magicalDefense: number;
    flee: number;
    accuracy: number;
    speed: number;
    extraResource: number;
    criticalChance: number;

    moves: number;
    active: boolean;

    constructor(attributes: BaseAttributes) {
        this.strength = attributes.strength;
        this.endurance = attributes.endurance;
        this.agility = attributes.agility;
        this.inteligence = attributes.inteligence;
        this.wisdom = attributes.wisdom;
        this.dexterity = attributes.dexterity;

        this.attack = this.getAttack();
        this.magicAttack = this.getMagicAttack();
        this.defense = this.getDefense();
        this.magicalDefense = this.getMagicalDefense();
        this.flee = this.getFlee();
        this.accuracy = this.getAccuracy();
        this.speed = this.getSpeed();
        this.extraResource = this.getExtraResource();
        this.criticalChance = this.getCriticalChance();
        this.moves = this.getMoves();
        this.active = this.getActive();
    }

    getLife(): number {
        return Math.round((this.endurance * 2) + (this.strength * 0.5));
    }

    getAttack(): number {
        return Math.round(this.strength);
    }

    getMagicAttack(): number {
        return this.inteligence;
    }

    getDefense(): number {
        return this.endurance + (this.strength / 2);
    }

    getMagicalDefense(): number {
        return this.endurance + (this.wisdom * 0.3) + (this.inteligence / 4);
    }

    getFlee(): number {
        return this.agility;
    }

    getAccuracy(): number {
        return this.dexterity * 3;
    }

    getSpeed(): number {
        return ((this.agility * 2) / 3) + (this.dexterity / 4);
    }

    getExtraResource(): number {
        return this.wisdom * 0.01;
    }

    getCriticalChance(): number {
        return 5 + (this.dexterity / 10);
    }

    getMoves(): number {
        return 4;
    }

    getActive(): boolean {
        return true;
    }
}