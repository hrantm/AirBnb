export const fetchOffices = (showAmount) => (
  $.ajax({method: 'GET', url: 'api/offices' ,data: {office: {show_amount: showAmount}}})
);

export const fetchOffice = (id) => (
  $.ajax({method: 'GET', url: `api/offices/${id}`})
);

export const searchOffice = location => (
  $.ajax({method: 'GET', url: '/api/offices/search', data: {search_params: location}})
);
