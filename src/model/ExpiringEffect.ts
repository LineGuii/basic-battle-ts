import BattleCharacter from "./BattleCharacter";

export default class ExpiringEffect {
    name: string;
    turnsToExpire: number;
    startedTurn: number;
    useEffect: (target: BattleCharacter)=>void;

    constructor(name: string, turnsToExpire: number, startedTurn: number, useEffect: (target: BattleCharacter)=>void) {
        this.name = name;
        this.turnsToExpire = turnsToExpire;
        this.startedTurn = startedTurn;
        this.useEffect = useEffect;
    };
}