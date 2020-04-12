
const template = `
<div class="ui grid">
    <div class="doubling six column row">
        <div class="column"><button class="ui fluid red button diceButtons" id="dice4">D4</button></div>
        <div class="column"><button class="ui fluid red button diceButtons" id="dice6">D6</button></div>
        <div class="column"><button class="ui fluid red button diceButtons" id="dice8">D8</button></div>
        <div class="column"><button class="ui fluid red button diceButtons" id="dice10">D10</button></div>
        <div class="column"><button class="ui fluid red button diceButtons" id="dice12">D12</button></div>
        <div class="column"><button class="ui fluid red button diceButtons" id="dice20">D20</button></div>
    </div>
</div>
`;

const DiceButtons = { template };

export default DiceButtons;
