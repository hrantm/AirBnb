import * as OfficeAPIUtil from '../util/office_api_util';

export const RECEIVE_OFFICES = 'RECEIVE_OFFICES';
export const RECEIVE_OFFICE = 'RECEIVE_OFFICE';

export const fetchOffices = showAmount => dispatch => {
  return(
  OfficeAPIUtil.fetchOffices(showAmount)
    .then(offices => dispatch(receiveOffices(offices)))
  );
};

export const fetchOffice = id => dispatch => {
  return (
    OfficeAPIUtil.fetchOffice(id)
      .then(office => dispatch(receiveOffice(office)))
  );
};

export const searchOffice = location => dispatch => {
  return(
    OfficeAPIUtil.searchOffice(location)
      .then(offices => dispatch(receiveOffices(offices)))
  );
};

export const receiveOffices = offices => ({
  type: RECEIVE_OFFICES,
  offices
});

export const receiveOffice = office => ({
  type: RECEIVE_OFFICE,
  office
});
