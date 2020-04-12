
const template = `
<div class="diceContainer">
    <div class="diceRow">
        <div class="diceColumn"><button class="diceButton" id="dice4">D4</button></div>
        <div class="diceColumn"><button class="diceButton" id="dice6">D6</button></div>
        <div class="diceColumn"><button class="diceButton" id="dice8">D8</button></div>
    </div>
    <div class="diceRow">
        <div class="diceColumn"><button class="diceButton" id="dice10">D10</button></div>
        <div class="diceColumn"><button class="diceButton" id="dice12">D12</button></div>
        <div class="diceColumn"><button class="diceButton" id="dice20">D20</button></div>
    </div>
</div>
`;

const DiceButtons = { template };

export default DiceButtons;
