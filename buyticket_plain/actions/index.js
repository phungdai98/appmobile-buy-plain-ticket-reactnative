import * as Types from './../constain/index';
import callApi from './../util/apiCaller';
import { GETALLAIRPORT } from './../constain/config';
//get all airport
export const actFetAirport = (airPort) => {
  return {
    type: Types.FET_AIRPORT,
    airPort,
  };
};
export const actFetAirportResquest = () => {
  return async (dispatch) => {
    return await callApi('GET', GETALLAIRPORT, null).then((res) => {
      dispatch(actFetAirport(res.data));
    });
  };
};
