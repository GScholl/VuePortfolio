import apiClient from '../axios'
import endpoints from '../endpoints'

const userService = {
  getDeveloper() {
    return apiClient.get(endpoints.developer.getDeveloper)
  }
  //   getUser(id) {
  //     return apiClient.get(endpoints.users.getUser(id))
  //   },
  //   updateUser(id, data) {
  //     return apiClient.put(endpoints.users.updateUser(id), data)
  //   },
  //   deleteUser(id) {
  //     return apiClient.delete(endpoints.users.deleteUser(id))
  //   }
}

export default userService
