cc.Class({
    extends: cc.Component,

    properties: {
        
        pickRadius: 0
    },

    onLoad: function () {

    },
     getPlayerDistance: function () {
        // katsotaan pelaajan sijainti
        var playerPos = this.game.player.getPosition();
        // lasketaan kahden noden etäisyys toisistaan
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    onPicked: function() {
        this.game.spawnNewPumpkin();
        this.node.destroy();
    },
        update: function (dt) {
        // katsotaan pelaajan ja kurpitsan etäisyys joka frame
        if (this.getPlayerDistance() < this.pickRadius) {
            this.onPicked();
            return;
        }
    },
});
