import { SET_PLAYERS, SET_MOVE, SET_NEXT_PLAYER, API_START, API_END, RESTART_GAME } from '../Actions/types';

const initialState = {
  players:  [],
  boardState: [
    ['','',''],
    ['','',''],
    ['','','']
  ],
  isPlayerMove: true,
  isGameRunning: false,
  lastMove: '',
  nextPlayer: '',
  winner: '',
}

export default function(state = {}, action){

  switch(action.type){
    case SET_PLAYERS:
      return startGame(initialState, action.payload);
    case SET_MOVE:
      return setMove(state, action.payload);
    case SET_NEXT_PLAYER:
      return setNextPlayer(state, action.payload);
    case API_START:
      return setIsLoading(state, true);
    case API_END:
      return setIsLoading(state, false);
    case RESTART_GAME:
      return restartGame(state, action.payload);
    case 'NEW_GAME':
    default:
      return state;
  }
}

function startGame(state, players) {
  return {
    data: {
      ...state,
      players: players,
      isGameRunning: true,
      nextPlayer: players[0].unit
    }
  }
}

function setMove(state, data){
  return {
    ...state,
    data: {
      ...state.data,
      boardState: updateBoardState(state.data.boardState, data),
      lastMove: data[2],
      isPlayerMove: data[2] !== state.data.players[0].unit
    }
  }
}

function updateBoardState(boardState, data){
  return boardState.map((row, rkey) => {
    return row.map((cell, ckey) => {
      if(rkey === data[0] && ckey === data[1]){
        return data[2];
      }
      return cell;
    });
  });
}

function setNextPlayer(state, data){
  return {
    ...state,
    data: {
      ...state.data,
      winner: data.result,
      nextPlayer: data.nextPlayer,
      isPlayerMove: state.data.players[0].unit === data.nextPlayer
    }
  }
}

function setIsLoading(state, value) {
  return {
    ...state,
    isLoading: value
  }
}

function restartGame(state, winner){
  return {
    ...state,
    data: {
      ...state.data,
      winner: '',
      nextPlayer: state.data.players[0].unit,
      isPlayerMove: true,
      lastMove: "",
      players: state.data.players.map((player) => {
          return {...player, score: (player.unit === winner)? player.score+1: player.score }
        }),
      boardState: [
        ...initialState.boardState
      ]
    }
  }
}
