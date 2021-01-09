import React, {useState, useEffect } from 'react';
import './App.css';
import {generateSkill, parseSkillObjectArray} from './skill';
import makeMagatama from './Magatama';
import { useCallback } from 'react';
import { renderToString } from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser'
import { render } from 'react-dom';
//import magatamaList from './generateMagatamas'


function App() {

    /*
    **uses the elements of the database JSON to convert them into React HTML
    */
    function createMagatamaCode(name, element, wild_effects, st, ma, vt, ag, lu, reflect, absorb, negate, weak, resist, skills){
        console.log(skills)
        const skillArray = []

        //For of the magatama's skills, create an array of that skill's elements, and put that array into the skillArray const
        skills.forEach(element => skillArray.push(generateSkill(element.skill_name, element.cost, element.effect, element.level)))

        //Use the skillArray to create the react html code for it
        var finalSkills = parseSkillObjectArray(skillArray)
        
        //Generates the react html code for a magatama using its attributes and also the string array of skills
        var tempMagatama7 = makeMagatama(name, element, wild_effects, st, ma, vt, ag, lu, reflect, absorb, negate, weak, resist, finalSkills)

        return tempMagatama7
    }

    //the states of the page
    //actual page is loaded when loading == false
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);


    /*
    attemps to make the connection to the server
    on a successful connection, it changes loading to false and gets data
    otherwise, it returns an error
    */
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
                    setError(`Error calling API: ${resp.status} ${resp.statusText}`);
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

    /*
    **Loads data from server after render of loading page
    */
    useEffect(() => {
        loadData();
        console.log(data)
    }, [])

    //  

    
    //If loading the page resulted in an error, display the error in the browser
    if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
    }
    //If the page is still loading, waiting for the response from the server, show that the page is loading
    if (loading) {
    return <p>Loading...</p>;
    }

    //If we're here, then the client has the data from the server

    //The json data from the server
    var magData = data.data
    //The react html of the data
    var tempMagatamaArray = []
    //For each element in the magData, use its attributes to create its react html and add it to the temp magatama array
    magData.forEach(element => tempMagatamaArray.push(createMagatamaCode(element.name, element.element, element.wild_effects, element.st, element.ma, element.vt, element.ag, element.lu, element.reflect, element.absorb, element.void, element.weak, element.resist, element.skills)))
    

    /*For doing stuff to the toggle display reference (In this case the paragraph)
    Have to say current to access the one I want */
    function addMagatamaArrayToHTML(magatamaArray){
        var compiledMagatamas = ""
        magatamaArray.forEach(element => compiledMagatamas = compiledMagatamas + renderToString(element))
        return compiledMagatamas
    }
    
    //the react code for all of magatamas
    const finalMagatamas = ReactHtmlParser(addMagatamaArrayToHTML(tempMagatamaArray))

    //If i want to use a function  in the html part, i have to not use the parentheses or it will auto activate  
    //the full react code of the page


    const MainPage = {
        backgroundColor: "#800097",
        color: "#C3073F",
        overflow: "hidden"
    }

    const Introduction = {
        maxWidth: "1140px",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#1A1A1D",
        overflow: "hidden"
    }

    const readingContent = {
        maxWidth: "1140px", 
        alignItems: "center",
        margin: "auto",
        backgroundColor: "#1A1A1D",
        overflow: "hidden"
    }
    

    return ( 
    <div style={MainPage}>
        <div style={Introduction}>
            <h1>Magatamas</h1>
            <h2>Shin Megami Tensei III: Nocturne (PS2 / HD Remake)</h2> 
            <p>Magatamas are the primary equip item of SMT III: Nocturne. They give demi-fiend stat boosts, new skills, and resistences.</p>
        </div>
        <div style={readingContent}>
            {finalMagatamas}
        </div> 
    </div>
);
}

export default App;