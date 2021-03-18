import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const setSession = (value) => {
    Cookies.set('__session',value)
}

export const getSession = () => {
    const jwt = Cookies.get('__session')
    
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
      
      console.log(session)
      
    return session
}
export const logOut = () => {
    Cookies.remove('__session')
}

export const userLogin = payload => api.post('/user/login', payload);

export const registerUser = payload => api.post('/user', payload);

const apis = {
    setSession,
    getSession,
    logOut,
    userLogin,
    registerUser,
}

export default apis