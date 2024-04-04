
const request = async (method, url, params = {}) => {
  const req = {
    method: method,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
    mode: 'cors',
  };

  if (method === 'GET') {
    const getParams = new URLSearchParams(params);
    url += `?${getParams}`;
  } else if (params instanceof FormData) {
    req.body = params;
  } else {
    req.headers['Content-Type'] = 'application/json';
    req.body = JSON.stringify(params);
  }

  const res = await fetch(url, req);
  const data = await res.json();
  if (res.failed || !res.ok) {
    throw new ResponseError(data.message, data.errors);
  }

  return data;
};

class ResponseError extends Error {
  constructor(msg, errors) {
    super(msg);
    this.errors = errors;
  }
}

export default request;
