//
// classes
//
class CoronaVirus {
    public positionX: number;
    public positionY: number;
    public diameter: number;
    public spikeCount: number;
    private id: string;
    constructor(positionX: number, positionY: number, diameter: number, spikeCount: number) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.diameter = diameter;
        this.spikeCount = spikeCount;
        this.id = "id-" + positionX + "-" + positionY + "-" + diameter + "-" + spikeCount;
    }
    create() {
        //draw virusBody
        document.body.innerHTML += '<div id="' + this.id + '" class="coronaVirus" style="left:' + (this.positionX - this.diameter / 2) + 'px; top:' + (this.positionY - this.diameter / 2) + 'px; width:' + this.diameter + 'px; height:' + this.diameter + 'px"></div>';
        //create virusSpikes
        for (let a = 0; a < this.spikeCount; a++) {
            let angle : number  = 360 / this.spikeCount * a;
            let spike : Spike = new Spike(this.id, this.diameter, this.spikeCount, angle);
        }
        return this.id;
    }
}
class Spike {
    private id: string;
    private diameter: number;
    private angle: number;
    private count: number;

    constructor(id: string, diameter: number, count: number, angle: number) {
        this.id = id;
        this.diameter = diameter;
        this.count = count;
        this.angle = angle;
        this.create();
    }
    create() {
        //draw virusSpike
        let posX : number = this.diameter / 2;
        let posY : number = this.diameter / 2;

        let dia : number = this.diameter / (this.count / 2);
        let top : number = posX + Math.sin(this.angle * Math.PI / 180) * (this.diameter / 2 + dia / 2) - dia / 2;
        let left : number = posY + Math.cos(this.angle * Math.PI / 180) * (this.diameter / 2 + dia / 2) - dia / 2;
        document.getElementById(this.id).innerHTML += '<div class="spike" style="top:' + top + 'px; left:' + left + 'px; width: ' + dia + 'px; height: ' + dia + 'px"></div>';
    }
}
//
// helper functions
//
function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// let's do it...
//
let coronaVirusIds : any;
coronaVirusIds = [];
let maxVirus : number = 15;
function createVirus() {
    //create coronaVirus
    let coronaVirus : CoronaVirus = new CoronaVirus(getRndInteger(0, window.innerWidth), getRndInteger(0, window.innerHeight), getRndInteger(50, 400), getRndInteger(6, 32));
    let id : string = coronaVirus.create();
    coronaVirusIds.push(id);
    if (coronaVirusIds.length > maxVirus) {
        let el : any = document.getElementById(coronaVirusIds[0]);
        el.remove();
        coronaVirusIds.shift();
    }
    setTimeout(createVirus, 500);
}
createVirus();