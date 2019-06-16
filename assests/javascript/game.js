$(document).ready(function() {
    // Game mechanics variables
    var gameStart = false;
    var attackScore = [];
    var playerShip;
    var currentEnemy;
    var reset = [];
    var player1;
    var bonus;

    // score variables
    var wins = 0;

    // Object for ship Stats
    var ship = {
        "enterprise": {
            name: "USS Enterprise",
            health: 160,
            maxHealth: 160,
            attack: 8
        },
        "borgCube": {
            name: "Borg Cube",
            health: 130,
            maxHealth: 130,
            attack: 10
        },
        "klingonBirdOfPrey": {
            name: "Klingon Bird of Prey",
            health: 180,
            maxHealth: 180,
            attack: 7
        },
        "romulanWarbird": {
            name: "Romulan Warbird",
            health: 170,
            maxHealth: 170,
            attack: 7
        },
        "defiant": {
            name: "USS Defiant",
            health: 160,
            maxHealth: 160,
            attack: 8
        }
    };

    //Function to select a Player Ship and move to the Enemy Selection Screen
    $('#winLosePop').hide();
    $('#gameBox').hide();
    $('#chooseEnemy').hide();
    $('#resetBtn').hide();
    $('.card').on('click', function() {
        if (!playerShip) {
            var choice = $(this).attr('value');
            playerShip = ship[choice];
            $('<p>' + playerShip.name + '</p>').appendTo('#playerStats');
            $('<p>' + 'Shields  ' + playerShip.health + '</p>').appendTo('#playerStats');
            player1 = $(this);
            player1.hide();
            $("#banner1").hide();
            $('#chooseEnemy').show();
            $(this).appendTo('#playerArea');
            gameStart === true;
            //Function to Select a Enemy and move to Attack Screen
        } else {
            var enemyChoice = $(this).attr('value');
            currentEnemy = ship[enemyChoice];
            $('<p>' + currentEnemy.name + '</p>').appendTo('#enemyStats');
            $('<p>' + 'Shields  ' + currentEnemy.health + '</p>').appendTo('#enemyStats');
            player1.show();
            $(this).appendTo('#enemySelection');
            $('#staging').hide();
            $('#chooseEnemy').hide();
            $('#gameBox').show();
            $('#playerArea').show();
            $('#resetBtn').show();
            //Function to Attack
            $('#attackBtn').on('click', function() {
                playerShip.health = playerShip.health - currentEnemy.attack;
                currentEnemy.health = currentEnemy.health - playerShip.attack;
                $('#playerStats').empty();
                $('<p>' + playerShip.name + '</p>').appendTo('#playerStats');
                $('<p>' + 'Shields  ' + playerShip.health + '</p>').appendTo('#playerStats');
                $('#enemyStats').empty();
                $('<p>' + currentEnemy.name + '</p>').appendTo('#enemyStats');
                $('<p>' + 'Shields  ' + currentEnemy.health + '</p>').appendTo('#enemyStats');
                if (playerShip.health <= 0 && playerShip.health < currentEnemy.health) {
                    $('#gameBox').hide();
                    $('#playerArea').hide();
                    $('#enemySelection').hide();
                    $('#newEnemyBtn').hide();
                    $('#winLosePop').empty();
                    $('<p>' + 'You Lose.' + '</p>').appendTo('#winLosePop');
                    $('#winLosePop').show();
                } else if (currentEnemy.health <= 0 && playerShip.health > currentEnemy.health) {
                    wins = wins + 1;
                    if (wins === 4) {
                        $('#gameBox').hide();
                        $('#playerArea').hide();
                        $('#enemySelection').hide();
                        $('#newEnemyBtn').hide();
                        $('#winLosePop').empty();
                        $('<p>' + 'You Have Won The Game!!!!!!' + '</p>').appendTo('#winLosePop');
                        $('#winLosePop').show();
                        console.log(wins)
                    };
                    $('#winLosePop').empty();
                    $('#playerArea').hide();
                    $('#enemySelection').hide();
                    $('#gameBox').hide();
                    $('<p>' + 'You Win!!!! Now Choose a new Enemy!' + '</p>').appendTo('#winLosePop');
                    $('<button type="button" class="btn btn-warning" id="newEnemyBtn">Pick New Enemy</button>').appendTo('#winLosePop');
                    $('#winLosePop').show()
                    $('#newEnemyBtn').on('click', function() {
                        $('#winLosePop').hide();
                        $('#resetBtn').hide();
                        $('#enemySelection').empty();
                        $('#playerStats').empty();
                        $('<p>' + playerShip.name + '</p>').appendTo('#playerStats');
                        playerShip.maxHealth = playerShip.maxHealth + 10;
                        playerShip.health = playerShip.maxHealth;
                        $('<p>' + 'Shields  ' + (playerShip.health) + '</p>').appendTo('#playerStats');
                        $('#enemyStats').empty();
                        $('#staging').show();
                        $('#enemySelection').show();
                    })
                }
            })
        }

        $('#resetBtn').click(function() {
            location.reload();
        });

    });

});