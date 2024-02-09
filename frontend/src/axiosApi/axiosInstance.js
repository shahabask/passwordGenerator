import axios from 'axios'
// import Cookies from 'js-cookie'

export const usersApi=axios.create({
    baseURL:'http://localhost:5000/api/users',
})

