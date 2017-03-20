export const fetchOffices = data => (
  $.ajax({method: 'GET', url: 'api/offices' ,data: data})
);

export const fetchOffice = (id) => (
  $.ajax({method: 'GET', url: `api/offices/${id}`})
);

export const searchOffice = location => (
  $.ajax({method: 'GET', url: '/api/offices/search', data: {search_params: location}})
);
