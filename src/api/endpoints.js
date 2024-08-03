export default {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout'
  },
  users: {
    getUsers: '/users',
    getUser: (id) => `/users/${id}`,
    updateUser: (id) => `/users/${id}`,
    deleteUser: (id) => `/users/${id}`
  },
  developer: {
    getDeveloper: '/developer'
  }
}
