const ROOT_URL = "http://localhost:3004";

export function getCars(keywords) {
  const request = fetch(`${ROOT_URL}/carsIndex?q=${keywords}`, {
    method: "GET"
  }).then(response => response.json());
  return {
    type: "SEARCH_CAR",
    payload: request
  };
}

export function carDetail(id) {
  const request = fetch(`${ROOT_URL}/carsIndex?id=${id}`, {
    method: "GET"
  }).then(response => response.json());
  return {
    type: "CAR_DETAIL",
    payload: request
  };
}

export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
    payload: []
  };
}
