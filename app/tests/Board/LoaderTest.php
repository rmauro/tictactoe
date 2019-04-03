<?php
namespace TicTacToe\Board;

use PHPUnit\Framework\TestCase;

class LoaderTest extends TestCase
{
  protected $boardStub;
  protected $loader;

  public function setUp()
  {
    $this->boardObserver = $this->getMockBuilder(Board::class)
                                ->setMethods(['setValue'])
                                ->getMock();
    $this->loader = new Loader($this->boardObserver);
  }

  public function testLoadMovesSet()
  {
    $set = [
      ['X','','O'],
      ['','X',''],
      ['','O',''],
    ];

    $this->boardObserver->expects($this->at(0))->method('setValue')->with(0,0,'X');
    $this->boardObserver->expects($this->at(1))->method('setValue')->with(0,2,'O');
    $this->boardObserver->expects($this->at(2))->method('setValue')->with(1,1,'X');
    $this->boardObserver->expects($this->at(3))->method('setValue')->with(2,1,'O');
    $this->loader->load($set);
  }
}
