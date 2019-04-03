<?php
namespace TicTacToe\Board;

use PHPUnit\Framework\TestCase;

class BoardTest extends TestCase
{
  protected $board;

  public function setUp()
  {
    $this->board = new Board();
  }

  public function validDataProvider()
  {
    return [
      [1,0,'X'],
      [2,0,'O'],
      [0,0,'O'],
      [0,1,'X']
    ];
  }
  public function invalidRangesProvider()
  {
    return [
      [-1, 0,'X'],
      [ 3, 0,'X'],
      [ 0,-1,'O'],
      [ 0, 3,'O']
    ];
  }

  /**
   * @dataProvider invalidRangesProvider
   */
  public function testGetInvalidRange($x, $y)
  {
    $this->expectException(\InvalidArgumentException::class);
    $actual = $this->board->getValue($x, $y);
  }

  /**
   * @dataProvider validDataProvider
   */
  public function testGetValueFromSquare($x,$y,$value)
  {
    $this->board->setValue($x,$y,$value);
    $actual = $this->board->getValue($x, $y);

    $this->assertEquals($actual, $value);
  }

  /**
   * @dataProvider validDataProvider
   */
  public function testSetValue($x, $y, $value)
  {
    $actual = $this->board->setValue($x, $y, $value);
    $this->assertEquals($actual, null);
  }

  /**
   * @dataProvider invalidRangesProvider
   */
  public function testSetInvalidRange($x, $y, $value)
  {
    $this->expectException(\InvalidArgumentException::class);
    $actual = $this->board->setValue($x, $y, $value);
  }

  /**
   * @dataProvider validDataProvider
   */
  public function testPreventSetValueForFilledSquare($x, $y, $value)
  {
    $this->expectException(\InvalidArgumentException::class);
    $this->board->setValue($x, $y, $value);
    $this->board->setValue($x, $y, $value);
  }

  public function testGetBoardState()
  {
    $actual = $this->board->getState();
    $expected = [
      ['','',''],
      ['','',''],
      ['','',''],
    ];
    $this->assertEquals($actual, $expected);
  }
}
