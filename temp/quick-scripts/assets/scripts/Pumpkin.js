(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Pumpkin.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '12d88c9z3pMjabuUM2EiWoT', 'Pumpkin', __filename);
// scripts/Pumpkin.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        pickRadius: 0
    },

    onLoad: function onLoad() {},
    getPlayerDistance: function getPlayerDistance() {
        // katsotaan pelaajan sijainti
        var playerPos = this.game.player.getPosition();
        // lasketaan kahden noden etäisyys toisistaan
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    onPicked: function onPicked() {
        this.game.spawnNewPumpkin();
        this.node.destroy();
    },
    update: function update(dt) {
        // katsotaan pelaajan ja kurpitsan etäisyys joka frame
        if (this.getPlayerDistance() < this.pickRadius) {
            this.onPicked();
            return;
        }
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
        //# sourceMappingURL=Pumpkin.js.map
        