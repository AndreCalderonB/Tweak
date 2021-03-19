import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:5000/',
})

//  MANEJO DE TOKENS
export const setSession = (value) => {
    /*Cookies.set('__session',value)*/
    localStorage.setItem('__session',value)
}

export const getSession = () => {
    const jwt = localStorage.getItem('__session')

    let session
    try {
        if (jwt != null) {
          const base64Url = jwt.split('.')[1]
          const base64 = base64Url.replace('-', '+').replace('_', '/')
          session = JSON.parse(window.atob(base64))
        }
      } catch (error) {
        console.log(error)
      }
      console.log("Session id")
      console.log(session._id)
    return session
}

export const logOut = () => {
    localStorage.removeItem('__session')
}
// ------------------------
export const userLogin = payload => api.post('api/user/login', payload);

export const registerUser = payload => api.post('api/user', payload);

export const showUser = payload => api.get('user/show/'+payload);

export const getUsers = payload => api.get('user/index/'+payload)

const apis = {
    setSession,
    getSession,
    logOut,
    userLogin,
    registerUser,
    showUser,
    getUsers
}

export default apis