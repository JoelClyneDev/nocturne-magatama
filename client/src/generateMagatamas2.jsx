import react from 'react'
import axios from 'axios'

getMagatamaData = () => {
    axios.get('http://localhost:3000/api')
}