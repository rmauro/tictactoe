<?php

$app->post('/BoardCheck', 'TicTacToe\GameController:check');
$app->post('/CPUMove', 'TicTacToe\GameController:CPUMove');
