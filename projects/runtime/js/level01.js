var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
        
        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "enemy", "x": 400, "y": groundY - 50},
                { "type": "sawblade", "x": 500, "y": groundY - 110},
                { "type": "enemy2", "x": 600, "y": groundY - 50},
                { "type": "spikes", "x": 700, "y": groundY - 10},
                { "type": "sawblade", "x": 1200, "y": groundY - 110},
                { "type": "enemy3", "x": 1400, "y": groundY - 50},
                { "type": "enemy2", "x": 1600, "y": groundY - 50},
                { "type": "spikes", "x": 2000, "y": groundY - 10},
                { "type": "reward", "x": 2000, "y": groundY - 110},
                { "type": "sawblade", "x": 2500, "y": groundY - 110},
                { "type": "enemy2", "x": 3000, "y": groundY - 50},
                { "type": "sawblade", "x": 3400, "y": groundY - 110},
                { "type": "spikes", "x": 3700, "y": groundY - 10},
                { "type": "enemy", "x": 4000, "y": groundY - 50},
                { "type": "spikes", "x": 4400, "y": groundY - 10},
                { "type": "sawblade", "x": 4600, "y": groundY - 110},
                { "type": "ultEnemy", "x": 1700, "y": groundY - 60}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        
        for(var i = 0; i <= levelData.gameItems.length - 1; i++) {
            var gameItem = levelData.gameItems[i];
            if (gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === 'spikes') {
                createSpikes(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === 'enemy') {
                createEnemy(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === 'reward') {
                createReward(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === 'enemy2') {
                createEnemy2(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === 'enemy3') {
                createEnemy3(gameItem.x, gameItem.y);
            }
            
            if (gameItem.type === 'ultEnemy') {
                createUltEnemy(gameItem.x, gameItem.y);
            }
    }
        
        function createSpikes(x, y) {
        var hitZoneSize = 30;
        var damageFromObstacle = 15;
        var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            spikeHitZone.x = x;
            spikeHitZone.y = y;
            game.addGameItem(spikeHitZone);
        var obstacleImage = draw.bitmap('img/spik.png');
            spikeHitZone.addChild(obstacleImage);
            obstacleImage.x = -40;
            obstacleImage.y = -25;
            obstacleImage.scaleX = .5;
            obstacleImage.scaleY = .5;
        }
        
        createSpikes(700, groundY - 10);
        createSpikes(2000, groundY - 10);
        
        function createEnemy(x, y) {
            var enemy =  game.createGameItem('enemy', 25);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -2;
            
            var dab = draw.bitmap('img/Dab_.png');
                dab.x = -42;
                dab.y = -25;
                dab.scaleX = 3;
                dab.scaleY = 3;
                
                enemy.addChild(dab);
                
                game.addGameItem(enemy);
       
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-15);
                enemy.fadeOut();

        };
        
            enemy.onProjectileCollision = function() {
                enemy.fadeOut();
                game.increaseScore(200);
            };
    }
    
         function createEnemy2(x, y) {
            var enemy =  game.createGameItem('enemy2', 25);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -2;
            
            var odie = draw.bitmap('img/Odie.png');
                odie.x = -52;
                odie.y = -25;
                odie.scaleX = 3;
                odie.scaleY = 3;
                
                enemy.addChild(odie);
                
                game.addGameItem(enemy);
       
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-15);
                enemy.fadeOut();

        };
        
            enemy.onProjectileCollision = function() {
                enemy.fadeOut();
                game.increaseScore(200);
            };
    }
    
        function createEnemy3(x, y) {
            var enemy =  game.createGameItem('enemy', 25);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -2;
            
            var pose = draw.bitmap('img/tpose.png');
                pose.x = -44;
                pose.y = -40;
                pose.scaleX = 3;
                pose.scaleY = 3;
                
                enemy.addChild(pose);
                
                game.addGameItem(enemy);
       
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-15);
                enemy.fadeOut();

        };
        
            enemy.onProjectileCollision = function() {
                enemy.fadeOut();
                game.increaseScore(200);
            };
    }
    
        function createUltEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -.2;
                
                
            var rick = draw.bitmap('img/pickle rick.png');
            rick.x = -130;
            rick.y = -300;
            rick.scaleX = 2;
            rick.scaleY = 2;
            
            enemy.addChild(rick);
            
            game.addGameItem(enemy);
            
            enemy.onProjectileCollision = function() {
                enemy.fadeOut();
                game.increaseScore(10000);
            };
    }
        
            
        function createReward(x, y) {
            var reward = game.createGameItem('reward', 25);
                reward.x = x;
                reward.y = y;
                reward.velocityX = -1;
                game.addGameItem(reward);
                
            var vine = draw.bitmap('img/Vine.png');
                vine.x = -28;
                vine.y = -25;
                vine.scaleX = 2;
                vine.scaleY = 2;
                
            reward.addChild(vine);
            
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                game.increaseScore(400);
                reward.fadeOut();
            };
    }
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
