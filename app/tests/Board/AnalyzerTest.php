<?php
namespace TicTacToe\Board;

use PHPUnit\Framework\TestCase;

class AnalyzerTest extends TestCase
{
  protected $boardStub;
  protected $analyzer;

  public function setUp()
  {
    $this->boardObserver = $this->getMockBuilder(Board::class)
                                ->setMethods(['getState'])
                                ->getMock();
    $this->analyzer = new Analyzer($this->boardObserver);
  }

  public function validStatesProvider()
  {
    return [
      [[['X','','O'],['','X',''],['','O','']],'X'],
      [[['X','',''],['','X',''],['','O','']],'O'],
      [[['X','','O'],['','X',''],['','','']],'O'],
      [[['','',''],['','',''],['','','']],'X']
    ];
  }

  public function validVictoriesProvider()
  {
    return [
      [[['X','','O'],['','X',''],['','O','X']],'X'],
      [[['O','O','O'],['','X','X'],['','','X']],'O'],
      [[['X','','O'],['X','O',''],['O','','X']],'O'],
      [[['','X','O'],['','X','O'],['','X','']],'X']
    ];
  }

  public function tiedStatesProvider()
  {
    return [
      [[['X','X','O'],['O','O','X'],['X','O','X']]],
      [[['X','O','X'],['X','O','O'],['O','X','X']]],
      [[['X','O','X'],['O','X',''],['O','X','O']]],
      [[['X','O','X'],['O','X','X'],['O','X','O']]]
    ];
  }

  /**
   * @dataProvider validStatesProvider
   */
  public function testGetNextPlayer($state, $expected)
  {
    $this->boardObserver->method('getState')->will($this->returnValue($state));
    $actual = $this->analyzer->nextPlayer();

    $this->assertEquals($actual, $expected);
  }

  /**
   * @dataProvider validStatesProvider
   */
  public function testCheckResultForGameRunning($state)
  {
    $this->boardObserver->method('getState')->will($this->returnValue($state));
    $actual = $this->analyzer->checkResult();

    $this->assertEquals($actual, '');
  }

  /**
   * @dataProvider validVictoriesProvider
   */
  public function testCheckVictory($state, $expected)
  {
    $this->boardObserver->method('getState')->will($this->returnValue($state));
    $actual = $this->analyzer->checkResult();

    $this->assertEquals($actual, $expected);
  }

  /**
   * @dataProvider tiedStatesProvider 
   */
  public function testCheckTiedGames($state)
  {
    $this->boardObserver->method('getState')->will($this->returnValue($state));
    $actual = $this->analyzer->checkResult();

    $this->assertEquals($actual, '#');
  }
}
