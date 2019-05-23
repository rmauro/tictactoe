import apiAction from './apiAction';
import {CPU_MOVE, SET_MOVE} from './types';

export default function CPUMove(data) {
  return apiAction({
    url: "CPUMove",
    onSuccess: setCPUMove,
    method: "POST",
    data: data,
    label: CPU_MOVE
  })
}

function setCPUMove(data) {
  return {
    type: SET_MOVE,
    payload: data.move
  }
}
