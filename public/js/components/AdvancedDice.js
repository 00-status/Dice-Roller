
const template = `
<div class="diceRow advancedRoller">
    <input id="diceRollNumber" class="advancedRollerEntry" maxlength="1000" type="text" placeholder="1"/>
    <p class="advancedRollerSeparator">D</p>
    <input id="diceType" class="advancedRollerEntry" maxlength="1000" type="text" placeholder="Dice"/>
    <p class="advancedRollerSeparator">+</p>
    <input id="innerAdd" class="advancedRollerEntry" maxlength="1000" type="text" placeholder="0"/>
    <button id="rollButton" class="advancedDiceButton">Roll</button>
</div>
`;

const AdvancedDice = { template };

export default AdvancedDice;
