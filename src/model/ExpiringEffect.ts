import BattleCharacter from "./BattleCharacter";

export default class ExpiringEffect {
    name: string;
    turnsToExpire: number;
    startedTurn: number;
    useEffect: (target: BattleCharacter)=>void;
    useOnApply: boolean = true

    constructor(name: string, turnsToExpire: number, startedTurn: number, useEffect: (target: BattleCharacter)=>void, useOnApply?: boolean) {
        this.name = name;
        this.turnsToExpire = turnsToExpire;
        this.startedTurn = startedTurn;
        this.useEffect = useEffect;
        this.useOnApply = useOnApply != null ? useOnApply : true;
    };
}