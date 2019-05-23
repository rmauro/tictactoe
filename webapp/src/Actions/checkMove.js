import apiAction from './apiAction';
import {CHECK_MOVE, SET_NEXT_PLAYER} from './types';

export default function checkMove(boardState, startPlayer) {
  return apiAction({
    url: "BoardCheck",
    method: "POST",
    data: {boardState,startPlayer},
    onSuccess: setNextPlayer,
    label: CHECK_MOVE
  })
}

function setNextPlayer(data) {
  return {
    type: SET_NEXT_PLAYER,
    payload: data
  }
}
