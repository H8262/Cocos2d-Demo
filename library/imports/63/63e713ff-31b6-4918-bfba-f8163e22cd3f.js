"use strict";
cc._RF.push(module, '63e71P/MbZJGL+6+BY+Is0/', 'Game');
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