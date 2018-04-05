$(function () {

    // function to roll various sizes of dice
    function RollDice(size) {
        // generate a random number between 1 and the chosen size
        var result = Math.floor(Math.random() * size) + 1;

        alert(result);
    };


    // Click functions for dice
    $("#dice4").click(function () { RollDice(4); });
    $("#dice6").click(function () { RollDice(6); });
    $("#dice8").click(function () { RollDice(8); });
    $("#dice10").click(function () { RollDice(10); });
    $("#dice12").click(function () { RollDice(12); });
    $("#dice20").click(function () { RollDice(20); });
});