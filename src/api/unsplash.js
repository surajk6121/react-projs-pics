import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID npUXtvNPsrn7H3VNzAAJnhuaIY_6Q37x4c7DTe6ltus'
  }
})