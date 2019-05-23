import { SET_PLAYERS } from './types';

export default function setPlayers(data) {
console.log(data);
  return {
    type: SET_PLAYERS,
    payload: data
  }
}
