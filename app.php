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

    function __construct($positionX, $positionY, $diameter, $spikeCount)
    {
        $this->positionX = $positionX;
        $this->positionY = $positionY;
        $this->diameter = $diameter;
        $this->spikeCount = $spikeCount;
    }
    
    function create()
    {
        //draw virusBody
        echo ('<div class="coronaVirus" style="left:' . ($this->positionX - $this->diameter / 2) . 'px; top:' . ($this->positionY - $this->diameter / 2) . 'px; width:' . $this->diameter . 'px; height:' . $this->diameter . 'px">');
        //create virusSpikes
        for ($a = 0; $a < $this->spikeCount; $a++) {
            $angle = 360 / $this->spikeCount * $a;
            $spike = new Spike($this->diameter, $this->spikeCount, $angle);
        }
        echo ("</div>");
    }
}

class Spike
{
    private $diameter;
    private $angle;
    private $count;

    function __construct($diameter, $count, $angle)
    {
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