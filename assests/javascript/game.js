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



    //Function to select a Player Ship and move to the Enemy Selection Screen
    $("#enterprise").click(function() {
        $('#enterprise').appendTo('#playerArea');
        $('#borgCube').appendTo('#enemySelection');
        $('#birdOfPrey').appendTo('#enemySelection');
        $('#warbird').appendTo('#enemySelection');
        $('#defiant').appendTo('#enemySelection');
    });

    //Function to select an Enemy and move to the Combat Screen for each stage of the game

    //Call Functions
});