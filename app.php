<?php
//
// classes
//
class CoronaVirus
{
    public $positionX;
    public $positionY;
    public $diameter;
    public $spikeCount;
    private $id;
    function __construct($positionX, $positionY, $diameter, $spikeCount)
    {
        $this->positionX = $positionX;
        $this->positionY = $positionY;
        $this->diameter = $diameter;
        $this->spikeCount = $spikeCount;
        $this->id = "id-" . $positionX . "-" . $positionY + "-" . $diameter + "-" . $spikeCount;
    }
    function create()
    {
        //draw virusBody
        echo ('<div id="' . $this->id . '" class="coronaVirus" style="left:' . ($this->positionX - $this->diameter / 2) . 'px; top:' . ($this->positionY - $this->diameter / 2) . 'px; width:' . $this->diameter . 'px; height:' . $this->diameter . 'px">');
        //create virusSpikes
        for ($a = 0; $a < $this->spikeCount; $a++) {
            $angle = 360 / $this->spikeCount * $a;
            $spike = new Spike($this->id, $this->diameter, $this->spikeCount, $angle);
        }
        echo ("</div>");
        return $this->id;
    }
}
class Spike
{
    private $id;
    private $diameter;
    private $angle;
    private $count;

    function __construct($id, $diameter, $count, $angle)
    {
        $this->id = $id;
        $this->diameter = $diameter;
        $this->count = $count;
        $this->angle = $angle;
        $this->create();
    }
    function create()
    {
        //draw virusSpike
        $posX = $this->diameter / 2;
        $posY = $this->diameter / 2;

        $dia = $this->diameter / ($this->count / 2);
        $top = $posX + sin($this->angle * pi() / 180) * ($this->diameter / 2 + $dia / 2) - $dia / 2;
        $left = $posY + cos($this->angle * pi() / 180) * ($this->diameter / 2 + $dia / 2) - $dia / 2;
        echo ('<div class="spike" style="top:' . $top . 'px; left:' . $left . 'px; width: ' . $dia . 'px; height: ' . $dia . 'px"></div>');
    }
}
//
// helper functions
//
function getRndInteger($min, $max)
{
    return rand ($min , $max);
}
