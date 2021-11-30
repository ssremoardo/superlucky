import axios from 'axios';
require('dotenv').config

const baseurl = axios.create({
    url: process.env.REACT_APP_API_ENDPOINT,
    'Content-type': 'application/json',
 //   Authorization: `Bearer ${localStorage.getItem('token')}`
})

export default baseurl;