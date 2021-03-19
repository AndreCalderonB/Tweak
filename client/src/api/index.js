import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const setSession = (value) => {
    /*Cookies.set('__session',value)*/
    localStorage.setItem('__session',value)
}

export const getSession = () => {
    const jwt = localStorage.getItem('__session')
    console.log(jwt)
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
      
    return session
}

export const logOut = () => {
    localStorage.removeItem('__session')
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