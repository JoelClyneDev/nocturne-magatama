import React, { useRef, Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {finalProduct, prepareSkillArray, generateSkill, parseSkillObjectArray} from './skill';
import makeMagatama from './Magatama';
import runMongooseConnection from './mongoDBconnection';
import mongoose, { set } from 'mongoose';
import { render } from 'react-dom';
import axios from 'axios'
import apis from './api/api_index'
import { useCallback } from 'react';
import { renderToString } from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser'
//import magatamaList from './generateMagatamas'


function App() {

    async function tempAxios() {
        var magData = null;
        const trueData = await axios.get('http://localhost:4000/api/Magatamas')
        .then(response => {
            magData = response.data.data
        })
        //gets the name of every element in magData
        //magData.forEach(element => console.log(element.name))
        magData.forEach(element => createMagatamaCode(element.name, element.element, element.wild_effects, element.st, element.ma, element.vt, element.ag, element.lu, element.reflect, element.absorb, element.void, element.weak, element.resist, element.skills))
    }

    function createMagatamaCode(name, element, wild_effects, st, ma, vt, ag, lu, reflect, absorb, negate, weak, resist, skills){
        console.log(skills)
        const skillArray = []
        //skills.forEach(skillElement => console.log(skillElement.skill_name))
        skills.forEach(element => skillArray.push(generateSkill(element.skill_name, element.cost, element.effect, element.level)))
        console.log(skillArray.length)
        console.log(typeof(skillArray[2]))
        console.log(name)
        //const trueSkiils = prepareSkillArray(skills)
        var finalSkills = parseSkillObjectArray(skillArray)
        console.log("final Skills " + finalSkills)
        console.log(name)
        console.log(element)
        console.log(wild_effects)
        var tempMagatama7 = makeMagatama(name, element, wild_effects, st, ma, vt, ag, lu, reflect, absorb, negate, weak, resist, finalSkills)
        console.log("helper magatama below")
        console.log(tempMagatama7)
        return tempMagatama7
    }

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const alignmentRef = useRef(null);
    const magatamaRef = useRef(null);
    const lightRef = useRef(null)
    const [preparedMagatamaData, setPreparedMagatamaData] = useState(null)
    const toggleRef = useRef(null);

    const loadData = useCallback(() => {
        async function makeRequest() {
            try {
                setLoading(true);
                const resp = await fetch('http://localhost:4000/api/Magatamas');
                //console.log('data set')
                if (resp.ok){
                    setData(await resp.json())
                    console.log('data set')
                    console.log(data)
                    
                    
                }
                else {
                    console.log('data not set')
                    //console.log(data)
                    setError('Error calling API: ${resp.status} ${resp.statusText}');
                }
                
            } catch (e){
                setError(`Error making API call: ${e.toString()}`);
            } finally {
                setLoading(false)
            }
        }

        makeRequest();
        console.log(data)
        //the function wont be rerendered unless one these changes
    }, [setLoading, setData, setError])

    useEffect(() => {
        loadData();
        console.log(data)
        //data.forEach(element => createMagatamaCode(element.name, element.element, element.wild_effects, element.st, element.ma, element.vt, element.ag, element.lu, element.reflect, element.absorb, element.void, element.weak, element.resist, element.skills))
    }, [])

    //  

    if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
    }
    if (loading) {
    return <p>Loading...</p>;
    }

    var magData = []  
    var tempMagatamaArray = []
    magData = data.data
    console.log('magData Below')
    console.log(magData[0])
    magData.forEach(element => tempMagatamaArray.push(createMagatamaCode(element.name, element.element, element.wild_effects, element.st, element.ma, element.vt, element.ag, element.lu, element.reflect, element.absorb, element.void, element.weak, element.resist, element.skills)))
    //const tempMagatama = createMagatamaCode(magData[0].name, magData[0].element, element.wild_effects, element.st, element.ma, element.vt, element.ag, element.lu, element.reflect, element.absorb, element.void, element.weak, element.resist, element.skills)
    console.log('tempMagatama Below')
    //console.log(tempMagatamaAr)
    //console.log(typeof(tempMagatama) + "[zs")
    /*

    if (data !== null){
        const magData = data.data
        //data.forEach(element => magData.push(element))
        console.log("data2")
        //magData = magData[0]
        magData.forEach(element => console.log(element.name + " think"))
        const loadPreparedMagatamaData = useCallback(() => {
            const tempMagatama = magData.forEach(element => createMagatamaCode(element.name, element.element, element.wild_effects, element.st, element.ma, element.vt, element.ag, element.lu, element.reflect, element.absorb, element.void, element.weak, element.resist, element.skills))
            setPreparedMagatamaData(tempMagatama)
            console.log(preparedMagatamaData)
        }, [setPreparedMagatamaData])
        useEffect(() => {
            loadPreparedMagatamaData
        })
        
        //console.log()
    }
    */

    

    
    const newMagatama = makeMagatama('Gaadsfasdfsfea', 'Dark', 'Heal/Strength +1/Vitality +1', '+10', '--','+10','--','--','-','-','-','Physical','Force/Expel/Death', finalProduct);
    console.log("New Magatama Below")
    console.log(newMagatama)
    //const connection = runMongooseConnection;  
    //do this for the toggleable data
    

    /*For doing stuff to the toggle display reference (In this case the paragraph)
    Have to say current to access the one I want */
    function addMagatamaArrayToHTML(magatamaArray){
        var compiledMagatamas = ""
        magatamaArray.forEach(element => compiledMagatamas = compiledMagatamas + renderToString(element))
        return compiledMagatamas
    }
    
    function toggleParagraph() {
        if (toggleRef.current.style.display !== "none") {
            toggleRef.current.style.display = "none";
        } else {
            toggleRef.current.style.display = "block";
        }
    }
    

    function hideChildren(refName){
        if (refName.current.style.display !== "none") {
            refName.current.style.display = "none";
        } else {
            refName.current.style.display = "block";
        }
    }

    const finalMagatamas = ReactHtmlParser(addMagatamaArrayToHTML(tempMagatamaArray))

    //If i want to use a function  in the html part, i have to not use the parentheses or it will auto activate  
    return ( 
    

    <div>
        <h1 >Magatamas </h1> 
        <p> But what are they </p> 
        
        <div >
            <h2 onClick={() => {hideChildren(lightRef)}}>Light</h2>
            <div ref={lightRef}>
                {newMagatama}
                {finalMagatamas}
                <h3>Magatama Name</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Effect</th>
                    </tr>
                    <tr>
                        <td>Antehma</td>
                        <td>Booo</td>
                        <td>Not Today Beelzebub</td>
                    </tr>
                    </tbody>
                </table>
                {/*contains a reference to refcontainer which allows it to do stuff to it
                        Must use lambda for the function to work!*/}
                <button onClick={console.log(data)}> collapse </button> 
                <div>
                    <p /*ref = { toggleRef }*/ > toggleable data </p> 
                </div>
            </div>
            <h2 className="attribute">Neutral</h2>
            <h2>Dark</h2>
        </div> 
    </div>
);
}

export default App;

    
 //console.log(resp.data)
                //setData(resp.data)
                /*
                if (resp.ok){
                    setData(resp.JSON)
                }
                else {
                    setError('Error calling API: ${resp.status} ${resp.statusText}');
                }
                */
    


    //tempAxios()

    /*
    var magData = null;
    const axios = require('axios')
    
    axios.get('http://localhost:4000/api/Magatamas').then(response => {
            //console.log(response.data)
            magData = response.data
            console.log(magData)
            
        })
    console.log(magData)
    const fullData = tempAxios()
    */


    /*
    const axios = require('axios')
    
    const [magatamas, setMagatamas] = useState(null);
    const mtList = null;

    

    function plzWork(){
        axios.get('http://localhost:4000/api/Magatamas').then(response => {
            console.log(response.data)
        })
    }

    
        
        .then(response => {
            const data = response.data
            const magatamaList2 = data;
            //mtList = magatamaList2
            //return magatamaList2
            console.log(data)
            mtList = data
            console.log('Data has been received');
        })
        

        const getMgData = async() => {
        const response = await axios.get('http://localhost:4000/api/Magatamas')
        return response
    }

    async function getMagatamaData() {
        console.log("halp plz")
        let response = await axios.get('http://localhost:4000/api/Magatamas')
        let data = response.data
        //console.log(data)
        return data
    }

    function mg2() {(async () => {
        const value = await getMgData()
    })()
}
            
        .catch(() => {
            console.log('Data has not been received')
        })
        */
    
    
    //console.log(getMagatamaData())
    //console.log(mg2())
    //plzWork()

    
    

    //console.log(trueMagatamaList + " bruh");


    
    //stores the reference for each of the levels, it starts as null because nothing is in it
    //the current value of the ref is stored in refVarName.current
    //these will be toggleable to appear and dissapear