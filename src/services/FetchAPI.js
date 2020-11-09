
// I probably could have named this better...
export const apiFetch = (url, method, body) => {
  if (method !== 'GET') {
    return fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json());
  }

  return fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};