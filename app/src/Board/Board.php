<?php
namespace TicTacToe\Board;

class Board
{
  private $squares = [];
  private $loader;

  public function __construct()
  {
    $this->loader = new Loader($this);
    $this->squares = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }

  public function getValue($x, $y)
  {
    if($x<0 || $y<0 || $x>2 || $y>2) {
      throw new \InvalidArgumentException("Ivalid Argument");
    }

    return $this->squares[$x][$y];
  }

  public function setValue($x, $y, $value)
  {
    if($this->getValue($x,$y) <> null){
      throw new \InvalidArgumentException("Ivalid Argument");
    }
    $this->squares[$x][$y] = $value;
  }

  public function getState()
  {
    return $this->squares;
  }

  public function load($set)
  {
    $this->loader->load($set);
  }

}
