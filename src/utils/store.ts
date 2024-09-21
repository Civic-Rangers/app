export const getUser = () => {
  const value = localStorage.getItem('user')

  return value ? JSON.parse(value) : null
}

export const getToken = () => {
  return localStorage.getItem('token')
}
