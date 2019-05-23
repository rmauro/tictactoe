import axios from "axios";
import { API } from "../Actions/types";
import { accessDenied, apiError, apiStart, apiEnd } from "../Actions/api";


const apiMiddleware = ({ dispatch }) => next => action => {
console.log(action);
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? 
  "params" : "data";

  axios.defaults.baseURL = process.env.API_BASE_URL || "http://localhost:80/";
  axios.defaults.headers.common["Content-Type"]="application/json";

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
   .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
   });
};

export default apiMiddleware;
