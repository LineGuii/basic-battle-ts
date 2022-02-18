import DamageStep from "./core/DamageStep";
import BattleCharacter from "./model/BattleCharacter";
import Character from "./model/Character";
import Assassin from "./model/job/Assassin";
import Merchant from "./model/job/Merchant";
import Scientist from "./model/job/Scientist";
import OfferHammer from "./model/skill/merchant/OfferHammer";
import NormalAttack from "./model/skill/NormalAttack";

const merchant: Character  = new Character(
    {
        name: "Jones Biggs",
        job: Merchant,
        level: 20
    }
);

const assassin: Character  = new Character(
    {
        name: "Nikola Tesla",
        job: Assassin,
        level: 20
    }
);

const battleMerchant = new BattleCharacter(merchant);
const battleScientist = new BattleCharacter(assassin);

console.log(merchant.job.name);
console.log(merchant.characterAttributes.getLife());
console.log(merchant.characterAttributes);
console.log(assassin.job.name);
console.log(assassin.characterAttributes.getLife());
console.log(assassin.characterAttributes);
console.log("Ataque: " + battleMerchant.battleAttributes.attack);
console.log("Defesa: " + battleScientist.battleAttributes.defense);
const dp1 = new DamageStep(battleMerchant, battleScientist, OfferHammer);
const dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack);
dp1.visualize();
dp1.execute();

dp2.visualize();
dp2.execute();

console.log(Math.round(22.5 * (22.5 + 100) / 100 * 8 / (15.5 + 8)));