$(document).ready(function() {
    // Game mechanics variables
    var gameStart = false;
    var attackScore = [];
    var playerShip;
    var currentEnemy;
    var reset = [];
    var player1;

    // score variables
    var wins = 0;
    var losses = 0;

    // Object for ship Stats
    var ship = {
        "enterprise": {
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
            name: "Klingon Bird of Prey",
            health: 180,
            attack: 7,
            enemyAttackBack: 25
        },
        "romulanWarbird": {
            name: "Romulan Warbird",
            health: 180,
            attack: 7,
            enemyAttackBack: 25
        },
        "defiant": {
            name: "USS Defiant",
            health: 150,
            attack: 8,
            enemyAttackBack: 20
        }
    };

    //Function to select a Player Ship and move to the Enemy Selection Screen
    $('#gameBox').hide();
    $('#chooseEnemy').hide();
    $('.card').on('click', function() {
        if (!playerShip) {
            var choice = $(this).attr('value');
            playerShip = ship[choice];
            $('<p>' + playerShip.name + '</p>').appendTo('#playerStats');
            $('<p>' + 'Shields - ' + playerShip.health + '</p>').appendTo('#playerStats');
            $('<p>' + 'Weapons Attack Score - ' + playerShip.attack + '</p>').appendTo('#playerStats');
            player1 = $(this);
            player1.hide();
            $("#banner1").hide();
            $('#chooseEnemy').show();
            $(this).appendTo('#playerArea');
            console.log(playerShip);
            gameStart === true;
        } else {
            var enemyChoice = $(this).attr('value');
            currentEnemy = ship[enemyChoice];
            $('<p>' + currentEnemy.name + '</p>').appendTo('#enemyStats');
            $('<p>' + 'Shields - ' + currentEnemy.health + '</p>').appendTo('#enemyStats');
            // $('<p>' + 'Weapons Damage - ' + currentEnemy.attack + '</p>').appendTo('#enemyStats');
            player1.show();
            $(this).appendTo('#enemySelection');
            $('#staging').hide();
            $('#chooseEnemy').hide();
            $('#gameBox').show();

        }
    });

    // $('#chooseEnemy').hide();
    // $("#enterprise").click(function() {
    //     $("#banner1").hide();
    //     $('#enterprise').appendTo('#playerArea');
    //     playerShip = ship.enterprise;
    //     console.log(playerShip)
    //     $('#enterprise').hide();
    //     $('#chooseEnemy').show();
    //     $('#borgCube').appendTo('#enemySelection');
    //     $('#birdOfPrey').appendTo('#enemySelection');
    //     $('#warbird').appendTo('#enemySelection');
    //     $('#defiant').appendTo('#enemySelection');
    //     gameStart = true;
    //     console.log(gameStart)
    // });
    // if (gameStart === false) {
    //     $("#borgCube").click(function() {
    //         $("#banner1").hide();
    //         $('#borgCube').appendTo('#playerArea');
    //         playerShip = ship.borgCube;
    //         console.log(playerShip)
    //         $('#borgCube').hide();
    //         $('#chooseEnemy').show();
    //         $('#enterprise').appendTo('#enemySelection');
    //         $('#birdOfPrey').appendTo('#enemySelection');
    //         $('#warbird').appendTo('#enemySelection');
    //         $('#defiant').appendTo('#enemySelection');
    //         gameStart = true;
    //     });
    // }

    // $("#birdOfPrey").click(function() {
    //     $("#banner1").hide();
    //     $('#birdOfPrey').appendTo('#playerArea');
    //     playerShip = ship.klingonBirdOfPrey;
    //     console.log(playerShip)
    //     $('#birdOfPrey').hide();
    //     $('#chooseEnemy').show();
    //     $('#enterprise').appendTo('#enemySelection');
    //     $('#borgCube').appendTo('#enemySelection');
    //     $('#warbird').appendTo('#enemySelection');
    //     $('#defiant').appendTo('#enemySelection');
    // });
    // $("#warbird").click(function() {
    //     $("#banner1").hide();
    //     $('#warbird').appendTo('#playerArea');
    //     playerShip = ship.romulanWarbird;
    //     console.log(playerShip)
    //     $('#warbird').hide();
    //     $('#chooseEnemy').show();
    //     $('#enterprise').appendTo('#enemySelection');
    //     $('#borgCube').appendTo('#enemySelection');
    //     $('#birdOfPrey').appendTo('#enemySelection');
    //     $('#defiant').appendTo('#enemySelection');
    // });
    // $("#defiant").click(function() {
    //     $("#banner1").hide();
    //     $('#defiant').appendTo('#playerArea');
    //     playerShip = ship.defiant;
    //     console.log(playerShip)
    //     $('#defiant').hide();
    //     $('#chooseEnemy').show();
    //     $('#enterprise').appendTo('#enemySelection');
    //     $('#borgCube').appendTo('#enemySelection');
    //     $('#birdOfPrey').appendTo('#enemySelection');
    //     $('#warbird').appendTo('#enemySelection');
    // });

    //Function to select an Enemy and move to the Combat Screen for each stage of the game

    //Call Functions
});