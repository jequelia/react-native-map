import axios from 'axios';


export const contactSend = axios.create({
    baseURL: 'https://webhook.site/f1fdbc3e-a334-4950-8a05-6e2ccffc83c9',

})

export const getData = axios.create({
    baseURL: 'https://accenture-server-rn.herokuapp.com/all/',
})