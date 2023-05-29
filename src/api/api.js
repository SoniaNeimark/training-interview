const MAIN_URL = "https://jsonplaceholder.typicode.com";

const apiEndpoints = {
  users: {
    getAll: `${MAIN_URL}/users`,
  },
  posts: {
    getAll: `${MAIN_URL}/posts`,
  },
  comments: {
    getAll: `${MAIN_URL}/comments`,
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  const error = new Error();
  error.name = "My Error";
  throw error;
}

export function getUsers() {
  return fetch(apiEndpoints.users.getAll).then((res) => checkResponse(res));
}

export function getPosts() {
  return fetch(apiEndpoints.posts.getAll).then((res) => checkResponse(res));
}

export function getComments() {
  return fetch(apiEndpoints.comments.getAll).then((res) => checkResponse(res));
}