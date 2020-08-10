//this is where I will get the files from the database
import React, { Component } from 'react'
import api from './api/api_index'
import { createPortal } from 'react-dom'

//creates the page with a state of having an array for magatamas and checking if its loading
class magatamaList extends Component {
    constructor(props){
        super(props)
        this.state = {
            magatamas: [],
            isLoading: true
        }
    }
}


    //after the react component is mounted, (the html is set) get the stuff from the database
    componentDidMount() = async () => {
        
        //wait for getAllMagatamas found in the API which uses stuff from router
        await api.getAllMagatamas(). 
        then(console.log("hi there"))
    }

export default magatamaList