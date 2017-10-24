(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '63e71P/MbZJGL+6+BY+Is0/', 'Game', __filename);
// scripts/Game.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // kurpitsan prefab
        pumpkinPrefab: {
            default: null,
            type: cc.Prefab
        },
        // kurpitsan elinikä
        maxDuration: 0,
        minDuration: 0,
        ground: {
            default: null,
            type: cc.Node
        },
        player: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        this.groundY = this.ground.y + this.ground.height / 2;
        // luodaan uusi kurpitsa
        this.spawnNewPumpkin();
    },

    spawnNewPumpkin: function spawnNewPumpkin() {

        var newPumpkin = cc.instantiate(this.pumpkinPrefab);
        this.node.addChild(newPumpkin);

        newPumpkin.setPosition(this.getNewPumpkinPosition());
        newPumpkin.getComponent('Pumpkin').game = this;
    },

    getNewPumpkinPosition: function getNewPumpkinPosition() {
        var randX = 0;
        var randY = this.groundY + cc.random0To1() * this.player.getComponent('Player').jumpHeight + 50;
        var maxX = this.node.width / 2;
        randX = cc.randomMinus1To1() * maxX;

        return cc.p(randX, randY);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Game.js.map
        