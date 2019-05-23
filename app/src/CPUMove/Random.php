<?php
namespace TicTacToe\CPUMove;

use TicTacToe\Board\Board;

class Random
{
  private $board;
  private $cpuUnit;

  public function __construct(Board $board, $cpuUnit)
  {
    $this->board = $board;
    $this->cpuUnit = $cpuUnit;
  }

  public function move()
  {
    while(true){
      $x = rand(0,2);
      $y = rand(0,2);
      $value = $this->board->getValue($x,$y);
      if($value === ""){
        return [$x, $y, $this->cpuUnit];
      }
    }
  }
}
