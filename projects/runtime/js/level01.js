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
                { "type": "sawblade", "x": 500, "y": groundY - 10},
                { "type": "sawblade", "x": 1200, "y": groundY - 110},
                { "type": "sawblade", "x": 2500, "y": groundY - 20},
                { "type": "spikes", "x": 700, "y": groundY - 10},
                { "type": "spikes", "x": 2000, "y": groundY - 10},
                { "type": "enemy", "x": 900, "y": groundY - 100},
                { "type": "reward", "x": 2500, "y": groundY - 10}
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
            
            if(gameItem.type === 'enemy') {
                createEnemy(gameItem.x, gameItem.y);
            }
            
            if(gameItem.type === 'reward') {
                createReward(gameItem.x, gameItem.y);
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
            var enemy =  game.createGameItem('enemy',25);
             var dab = draw.bitmap('img/Dab_.png');
                dab.x = -25;
                dab.y = -25;
                dab.scaleX = 3;
                dab.scaleY = 3;
                enemy.addChild(dab);
                enemy.x = 400;
                enemy.y = groundY-50;
                game.addGameItem(enemy);
                enemy.velocityX = -2;
                enemy.rotationalVelocity = 0;
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
                enemy.fadeOut();
                game.increaseScore(0);
        };
        
            enemy.onProjectileCollision = function() {
                enemy.fadeOut();
                game.increaseScore(200);
            }
    }
    
        function createReward(x, y) {
            var reward = game.createGameItem('reward', 17);
                reward.x = x;
                reward.y = y;
                reward.velocityX = -2;
                
            var vine = draw.bitmap('img/Vine.png');
                vine.x = -20;
                vine.y = -20;
                
            reward.addChild('img/Vine.png');
            
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
