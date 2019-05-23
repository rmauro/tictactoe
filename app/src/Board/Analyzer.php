<?php
namespace TicTacToe\Board;

class Analyzer
{
  protected $board;
  protected $sequences = [];

  public function __construct(Board $board)
  {
    $this->board = $board;
    $this->sequences = [
      [[0,0],[0,1],[0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      [[0,0],[1,1],[2,2]],
      [[0,2],[1,1],[2,0]],
    ];
  }

  public function checkResult()
  {
    $tied = 0;

    foreach($this->sequences as $seq) {
      $res = $this->checkSequence($this->board->getState(), $seq);
      if($res === 'X' || $res === 'O') {
        return $res;
      }

      if($res <> '') {
        $tied++;
      }
    }

    if($tied === 8) {
      return '#';
    }

    return "";
  }

  public function nextPlayer($startPlayer)
  {
    $state = $this->board->getState();
    $movesX = $this->countMoves('X', $state);
    $movesO = $this->countMoves('O', $state);
    
    if($movesO === $movesX){
      return $startPlayer;
    }
    return $movesO < $movesX? 'O': 'X';
  }

  protected function countMoves($unit, $state)
  {
    $filter = function($item) use ($unit){ return $item === $unit;};
    $rows = array_map(function($row) use($filter) { return sizeof(array_filter($row, $filter));}, $state);
    return array_sum($rows);
  }

  protected function checkSequence($state, $seq)
  {
    $a = $state[$seq[0][0]][$seq[0][1]];
    $b = $state[$seq[1][0]][$seq[1][1]]; 
    $c = $state[$seq[2][0]][$seq[2][1]];
    $isFull = strlen($a.$b.$c) === 3;
    $isPair = $a==$b || $a==$c || $b==$c;

    if(!$isFull) {
      return $isPair? '':'#';
    }

    return ($a === $b && $b === $c)? $a : '#';
  }

}
