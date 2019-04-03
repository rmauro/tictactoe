<?php
namespace TicTacToe\Board;

class Loader
{
  protected $board;

  public function __construct(Board $board)
  {
    $this->board = $board;
  }

  public function load($moves, $x = 0, $y = 0)
  {
    if($moves[$x][$y] <> '') {
      $this->board->setValue($x, $y, $moves[$x][$y]);
    }
    if($y<2) {
      return $this->load($moves, $x, ++$y);
    }
    if($x<2) {
      return $this->load($moves, ++$x, 0);
    }
  }

}
