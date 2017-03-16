import * as OfficeAPIUtil from '../util/office_api_util';

export const RECEIVE_OFFICES = 'RECEIVE_OFFICES';

export const fetchOffices = showAmount => dispatch => {
  return(
  OfficeAPIUtil.fetchOffices(showAmount)
    .then(offices => dispatch(receiveOffices(offices)))
  );
};

export const receiveOffices = offices => ({
  type: RECEIVE_OFFICES,
  offices
});
