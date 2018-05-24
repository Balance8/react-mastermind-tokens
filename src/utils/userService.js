import userAPI from './userAPI';

function signup(user) {
  return userAPI.signup(user);
}

export default {
  signup
}