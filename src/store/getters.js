const getters = {
  token: state => state.user.token,
  checkAuth: state => state.user.token === null,
  getAttributeValues: state => attribute => {
    return state.attributeValue.attributeValues[attribute]
  }
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // status: state => state.user.status,
  // roles: state => state.user.roles,
}
export default getters
