(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6e246vITz9E/6hByIGwgBbB', 'Player', __filename);
// scripts/Player.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        jumpHeight: 0,
        jumpDuration: 0,
        maxMoveSpeed: 0,
        accel: 0
    },
    setJumpAction: function setJumpAction() {

        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // hyppylooppi
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    setInputControl: function setInputControl() {
        var self = this;
        /*
        cc.eventManager.addListener({
            event: cc.EventListener.Acceleration,   // koitin lisätä accelerometerin ohjaamaan hahmoa          
            callback: function(accelEvent, event)
            {
                if((accelEvent.x * -1) > accelEvent.y){
                    self.accLeft = true;
                    self.accRight = false;
                }
                if((accelEvent.x * -1) < accelEvent.y){
                    self.accLeft = false;
                    self.accRight = true;
               }            
            }
            */
        // keyboard listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
                        break;
                }
            },
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },

    onLoad: function onLoad() {

        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        this.accLeft = false;
        this.accRight = false;
        this.xSpeed = 0;
        this.setInputControl(); // alusta keyboard listener
    },

    update: function update(dt) {
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // hahmo ei ylitä maxspeediä
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // päivitä sijainti nykyisellä nopeudella
        this.node.x += this.xSpeed * dt;
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
        //# sourceMappingURL=Player.js.map
        