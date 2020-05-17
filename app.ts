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
        this.create();
    }

    create() {
        //create virusBody
        document.body.innerHTML += '<div id="'+this.id+'" class="coronaVirus" style="top:' + (this.positionX - this.diameter / 2) + 'px; left:' + (this.positionY - this.diameter / 2) + 'px; width:' + this.diameter + 'px; height:' + this.diameter + 'px"></div>';
        //create virusSpikes
        for (let a = 0; a < this.spikeCount; a++) {
            let angle = 360 / this.spikeCount * a;
            let spike = new Spike(this.id, this.diameter, this.spikeCount, angle);
        }
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
        //create virusSpike
        let posX = this.diameter / 2;
        let posY = this.diameter / 2;

        let dia = this.diameter/(this.count/2); 
        let top = posX + Math.sin(this.angle * Math.PI / 180)*(this.diameter/2+dia/2)-dia/2;
        let left = posX + Math.cos(this.angle * Math.PI / 180)*(this.diameter/2+dia/2)-dia/2;
               

        document.getElementById(this.id).innerHTML += '<div class="spike" style="top:'+top+'px; left:'+left+'px; width: '+dia+'px; height: '+dia+'px"></div>';
    }
}

let coronaVirus1 = new CoronaVirus(400, 200, 300, 6);
let coronaVirus2 = new CoronaVirus(100, 100, 50, 14);
let coronaVirus3 = new CoronaVirus(200, 400, 150, 18);