<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Roller</title>
    <script>
        // JavaScript function to handle dice rolling
        function rollDice() {
            // Get the number of dice rolls from the user
            const numRolls = parseInt(prompt("Enter the number of dice to roll:"));

            if (isNaN(numRolls) || numRolls <= 0) {
                console.error("Invalid input. Please enter a positive integer.");
                return;
            }

            let totalSum = 0;
            console.log("Rolling dice...");

            // Roll the dice and calculate the sum
            for (let i = 0; i < numRolls; i++) {
                const roll = Math.floor(Math.random() * 6) + 1; // Simulate a 6-sided die roll
                console.log(`Roll ${i + 1}: ${roll}`);
                totalSum += roll;
            }

            // Display the sum of the rolls
            console.log(`The total sum of the rolls is: ${totalSum}`);
        }

        // Run the function on page load or when needed
        window.onload = function() {
            rollDice();
        };
    </script>
</head>
<body>
    <h1>Dice Roller</h1>
    <p>Check the console for the results of your dice rolls.</p>
</body>
</html>
