$(function () {

    // function to roll various sizes of dice
    function RollDice(diceType, diceRollNumber = 1, innerAdd = 0)
    {
        // Retrieve the current text from the TextArea
        var text = $("#history").val();

        text = "\n" + text;

        // If the user is only rolling once, then display something simpler
        if (diceRollNumber == 1 && innerAdd === 0)
        {
            // Generate a random number
            var result = Math.floor(Math.random() * diceType) + 1;

            amount += result;

            // Add the result to the text area
            text = "1 d" + diceType + " = " + result + "\n" + text;
        }
        else
        {
            // The running total
            var amount = 0;

            // roll the amount of dice indicated by diceRollNumber
            for (var i = 0; i < diceRollNumber; i++) {
                // generate a random number between 1 and the chosen size
                var result = Math.floor(Math.random() * diceType) + 1;

                amount += result;

                // Add the result to the text area
                text = "1 d" + diceType + " = " + result + "\n" + text;
            }

            // Add the desired amount
            amount = amount + innerAdd;

            text = "Total: \t" + amount + "\n" + text;
            text = "Roll: \t" + diceRollNumber + " d" + diceType + " + " + innerAdd + "\n" + text;
        }
        $("#history").val(text);
    };

    // Advanced roll function
    function AdvancedRoll()
    {
        // Get the form values
        var diceRollNumber = $("#diceRollNumber").val();
        var diceType = $("#diceType").val();
        var innerAdd = parseInt ( $("#innerAdd").val() );

        // Do some basic validation
        if (!diceRollNumber)
        {
            diceRollNumber = 1;
        }
        if (!innerAdd)
        {
            innerAdd = 0;
        }

        // call rolldice
        RollDice(diceType, diceRollNumber, innerAdd);
    }


    // Click functions for dice buttons
    $("#dice4").click(function () { RollDice(4); });
    $("#dice6").click(function () { RollDice(6); });
    $("#dice8").click(function () { RollDice(8); });
    $("#dice10").click(function () { RollDice(10); });
    $("#dice12").click(function () { RollDice(12); });
    $("#dice20").click(function () { RollDice(20); });

    // Click function for advanced roll
    $("#rollButton").click(function () { AdvancedRoll(); });
});