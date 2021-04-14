import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL: 'http://localhost:5000/',
})

//  MANEJO DE TOKENS
export const setSession = (token, userid) => {
    Cookies.set('__session',token)
    Cookies.set('__user',userid)
    //localStorage.setItem('__session',value)
}

export const getSession = () => {
    const payload = { 
        __session: Cookies.get('__session'),
        __user: Cookies.get('__user')
    }
    
    return api.post('token/check',payload);
}


export const logOut = () => {
    Cookies.set('__session',null)
    Cookies.set('__user',null)
}
// ------------------------
export const userLogin = payload => api.post('api/user/login', payload);

export const registerUser = payload => api.post('api/user', payload);

export const userDetails = (id,payload) => api.post('user/details/'+id, payload)

export const showUser = payload => api.get('user/show/'+ payload);

export const follow = (follower, followed) => api.post('user/'+followed+'/follow/'+follower)

export const getUsers = payload => api.get('user/index/'+payload)

export const getSports = () => api.get('sports/')

const apis = {
    setSession,
    getSession,
    logOut,
    userLogin,
    registerUser,
    userDetails,
    follow,
    showUser,
    getUsers,
    getSports,
}

export default apis