<?php
namespace TicTacToe;

class GameController
{
  public function check($request, $response, $payload)
  {
    $board = new Board\Board();
    $body = $request->getParsedBody();
    $board->load($body['boardState']);
    $analyzer = new Board\Analyzer($board);

    return $response->withJson([
      "result" => $analyzer->checkResult(),
      "nextPlayer"=> $analyzer->nextPlayer($body['startPlayer']) , 
      "boardState" => $board->getState()
    ], 201);
  }

  public function CPUMove($request, $response, $payload)
  {
    $board = new Board\Board();
    $body = $request->getParsedBody();
    $board->load($body['boardState']);
    $CPUMove = new CPUMove\Random($board, $body['CPUUnit']);

    return $response->withJson([
      "move" => $CPUMove->move()
    ], 201);
  }
}
