$(document).ready(function() {
    // Game mechanics variables
    var gameStart = false;
    var attackScore = [];
    var playerShip = [];
    var reset = [];

    // score variables
    var wins = 0;
    var losses = 0;

    // Object for ship Stats
    var ship = {
        "ussEnterprise": {
            name: "USS Enterprise",
            health: 120,
            attack: 8,
            enemyAttackBack: 15
        },
        "borgCube": {
            name: "Borg Cube",
            health: 100,
            attack: 14,
            enemyAttackBack: 5
        },
        "klingonBirdOfPrey": {
            name: "Bird of Prey",
            health: 180,
            attack: 7,
            enemyAttackBack: 25
        },
        "romulanWarbird": {
            name: "Warbird",
            health: 180,
            attack: 7,
            enemyAttackBack: 25
        },
        "defiant": {
            name: "Defiant",
            health: 150,
            attack: 8,
            enemyAttackBack: 20
        }
    };

    // Enemy List (Once a selection was made for the player ship the rest of the ships will be added to this array.)
    var enemies = [

    ];

    //Variable for layout (Change the bootstrap classes to rearange layout, and hide elements if needed. These presets will be stored here.)
    var layOut = {
        "enemySelectScreen": {

        },
        "combatScreen": {

        },
        "winScreen": {

        },
        "loseScreen": {

        },
        "winGameScreen": {

        },
        "loseGameScreen": {

        }
    };

    //Function to select a Player Ship and move to the Enemy Selection Screen
    function $(gameStart) {

    };

    //Function to select an Enemy and move to the Combat Screen for each stage of the game
    function $(layOut) {

    };

    //Function for Combat
    function $(layOut) {

    };

    //Function to adjust score and move to Win or Lose Screen
    function $(layOut) {

    };

    //Function for the Win and Lose Game Sceanarios
    function $(layOut) {

    };

    //Reset Game Function
    function $(reset) {

    };

    //Call Functions
});