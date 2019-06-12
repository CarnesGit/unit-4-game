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
            playerShip: "",
            enterprise: "",
            borgCube: "",
            birdOfPrey: "",
            warBird: "",
            defiant: ""
        },
        "combatScreen": {
            playerShip: "",
            enterprise: "",
            borgCube: "",
            birdOfPrey: "",
            warBird: "",
            defiant: ""
        },
        "winScreen": {
            playerShip: "",
            enterprise: "",
            borgCube: "",
            birdOfPrey: "",
            warBird: "",
            defiant: ""
        },
        "loseScreen": {
            playerShip: "",
            enterprise: "",
            borgCube: "",
            birdOfPrey: "",
            warBird: "",
            defiant: ""
        },
        "winGameScreen": {
            playerShip: "",
            enterprise: "",
            borgCube: "",
            birdOfPrey: "",
            warBird: "",
            defiant: ""
        },
        "loseGameScreen": {
            playerShip: "",
            enterprise: "",
            borgCube: "",
            birdOfPrey: "",
            warBird: "",
            defiant: ""
        }
    };

    //Function to select a Player Ship and move to the Enemy Selection Screen
    $("#enterprise").click(function() {
        console.log("ive been clicked");
        $("#enterprise") = (layOut.enemySelectScreen.playerShip);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("warbird") = (layOut.enemySelectScreen.warBird);
        $("defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#borgCube").click(function() {
        $("#borgCube") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("warbird") = (layOut.enemySelectScreen.warBird);
        $("defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#birdOfPrey").click(function() {
        $("#birdOfPrey") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("#warbird") = (layOut.enemySelectScreen.warBird);
        $("#defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#warbird").click(function() {
        $("#warbird") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#defiant").click(function() {
        $("#defiant") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("warbird") = (layOut.enemySelectScreen.warBird);
    });
    //Function to select an Enemy and move to the Combat Screen for each stage of the game
    $("#enterprise").click(function gameStart() {
        if (!"#playerShip") {
            $("#enterprise") = (layOut.enemySelectScreen.playerShip);
            $("#borgCube") = (layOut.enemySelectScreen.borgCube);
            $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
            $("warbird") = (layOut.enemySelectScreen.warBird);
            $("defiant") = (layOut.enemySelectScreen.defiant);
        }
    });
    $("#borgCube").click(function gameStart() {
        $("#borgCube") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("warbird") = (layOut.enemySelectScreen.warBird);
        $("defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#birdOfPrey").click(function gameStart() {
        $("#birdOfPrey") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("warbird") = (layOut.enemySelectScreen.warBird);
        $("defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#warbird").click(function gameStart() {
        $("#warbird") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("defiant") = (layOut.enemySelectScreen.defiant);
    });
    $("#defiant").click(function gameStart() {
        $("#defiant") = (layOut.enemySelectScreen.playerShip);
        $("#enterprise") = (layOut.enemySelectScreen.enterprise);
        $("#borgCube") = (layOut.enemySelectScreen.borgCube);
        $("#birdOfPrey") = (layOut.enemySelectScreen.birdOfPrey);
        $("warbird") = (layOut.enemySelectScreen.warBird);
    });
    //Call Functions
});