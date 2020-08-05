import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {finalProduct} from './skill';
import makeMagatama from './Magatama';
import runMongooseConnection from './mongoDBconnection';
import mongoose from 'mongoose';
import { render } from 'react-dom';




function App() {

    
    //stores the reference for each of the levels, it starts as null because nothing is in it
    //the current value of the ref is stored in refVarName.current
    //these will be toggleable to appear and dissapear
    const alignmentRef = useRef(null);
    const magatamaRef = useRef(null);
    const lightRef = useRef(null)
    const newMagatama = makeMagatama('Gaea', 'Dark', 'Heal/Strength +1/Vitality +1', '+10', '--','+10','--','--','-','-','-','Physical','Force/Expel/Death', finalProduct);
    const connection = runMongooseConnection;
    
   

    //do this for the toggleable data
    const toggleRef = useRef(null);

    /*For doing stuff to the toggle display reference (In this case the paragraph)
    Have to say current to access the one I want */
    function toggleParagraph() {
        if (toggleRef.current.style.display !== "none") {
            toggleRef.current.style.display = "none";
        } else {
            toggleRef.current.style.display = "block";
        }
    }

    function generateMagatamaRefs(magatamaArray){

    }

    function hideChildren(refName){
        if (refName.current.style.display !== "none") {
            refName.current.style.display = "none";
        } else {
            refName.current.style.display = "block";
        }
    }


    //If i want to use a function  in the html part, i have to not use the parentheses or it will auto activate  
    return ( 
        
    <div>
        <h1>Magatamas </h1> 
        <p> But what are they </p> 
        <div >
            <h2 onClick={() => {hideChildren(lightRef)}}>Light</h2>
            <div ref={lightRef}>
                {newMagatama}
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
                <button > collapse </button> 
                <div>
                    <p ref = { toggleRef } > toggleable data </p> 
                </div>
            </div>
            <h2 className="attribute">Neutral</h2>
            <h2>Dark</h2>
        </div> 
    </div>
);
}

export default App;