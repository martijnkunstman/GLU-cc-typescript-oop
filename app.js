"use strict";
var CoronaVirus = /** @class */ (function () {
    function CoronaVirus(positionX, positionY, diameter, spikeCount) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.diameter = diameter;
        this.spikeCount = spikeCount;
        this.id = "id-" + positionX + "-" + positionY + "-" + diameter + "-" + spikeCount;
        this.create();
    }
    CoronaVirus.prototype.create = function () {
        //create virusBody
        document.body.innerHTML += '<div id="' + this.id + '" class="coronaVirus" style="top:' + (this.positionX - this.diameter / 2) + 'px; left:' + (this.positionY - this.diameter / 2) + 'px; width:' + this.diameter + 'px; height:' + this.diameter + 'px"></div>';
        //create virusSpikes
        for (var a = 0; a < this.spikeCount; a++) {
            var angle = 360 / this.spikeCount * a;
            var spike = new Spike(this.id, this.diameter, this.spikeCount, angle);
        }
    };
    return CoronaVirus;
}());
var Spike = /** @class */ (function () {
    function Spike(id, diameter, count, angle) {
        this.id = id;
        this.diameter = diameter;
        this.count = count;
        this.angle = angle;
        this.create();
    }
    Spike.prototype.create = function () {
        //create virusSpike
        var posX = this.diameter / 2;
        var posY = this.diameter / 2;
        var dia = this.diameter / (this.count / 2);
        var top = posX + Math.sin(this.angle * Math.PI / 180) * (this.diameter / 2 + dia / 2) - dia / 2;
        var left = posX + Math.cos(this.angle * Math.PI / 180) * (this.diameter / 2 + dia / 2) - dia / 2;
        document.getElementById(this.id).innerHTML += '<div class="spike" style="top:' + top + 'px; left:' + left + 'px; width: ' + dia + 'px; height: ' + dia + 'px"></div>';
    };
    return Spike;
}());
var coronaVirus1 = new CoronaVirus(400, 200, 300, 6);
var coronaVirus2 = new CoronaVirus(100, 100, 50, 14);
var coronaVirus3 = new CoronaVirus(200, 400, 150, 18);
