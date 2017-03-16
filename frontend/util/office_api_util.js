export const fetchOffices = (showAmount) => (
  $.ajax({method: 'GET', url: 'api/offices' ,data: {office: {show_amount: showAmount}}})
);
