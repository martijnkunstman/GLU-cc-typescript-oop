"use strict";
var CoronaVirus = /** @class */ (function () {
    function CoronaVirus(positionX, positionY, diameter, spikeCount) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.diameter = diameter;
        this.spikeCount = spikeCount;
        this.id = "id-" + positionX + "-" + positionY + "-" + diameter + "-" + spikeCount;
    }
    CoronaVirus.prototype.create = function () {
        //create virusBody
        document.body.innerHTML += '<div id="' + this.id + '" class="coronaVirus" style="left:' + (this.positionX - this.diameter / 2) + 'px; top:' + (this.positionY - this.diameter / 2) + 'px; width:' + this.diameter + 'px; height:' + this.diameter + 'px"></div>';
        //create virusSpikes
        for (var a = 0; a < this.spikeCount; a++) {
            var angle = 360 / this.spikeCount * a;
            var spike = new Spike(this.id, this.diameter, this.spikeCount, angle);
        }
        return this.id;
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
        var left = posY + Math.cos(this.angle * Math.PI / 180) * (this.diameter / 2 + dia / 2) - dia / 2;
        document.getElementById(this.id).innerHTML += '<div class="spike" style="top:' + top + 'px; left:' + left + 'px; width: ' + dia + 'px; height: ' + dia + 'px"></div>';
    };
    return Spike;
}());
var coronaVirusIds;
coronaVirusIds = [];
var maxVirus = 15;
function createVirus() {
    var coronaVirus = new CoronaVirus(getRndInteger(0, window.innerWidth), getRndInteger(0, window.innerHeight), getRndInteger(50, 400), getRndInteger(6, 32));
    var id = coronaVirus.create();
    coronaVirusIds.push(id);
    if (coronaVirusIds.length > maxVirus) {
        var el = document.getElementById(coronaVirusIds[0]);
        el.remove();
        coronaVirusIds.shift();
    }
    setTimeout(createVirus, 500);
}
createVirus();
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
