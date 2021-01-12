import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import './skill'
import "./App.css"
import './Magatama.css'


/*
**The shell of a magatama in react html code
**The skills are taken in as an array of strings and converted to react code using ReactHtmlParser
**Returns the react html code of a magatama
*/

const magatamaTableStyle = {
    marginLeft: "auto", 
    marginRight: "auto",
    borderCollapse: "collapse",
    color: "#FFFFFF"
}

const topTableStyle = {
    marginLeft: "auto", 
    marginRight: "auto",
    borderCollapse: "collapse"
}

const nameHeader = {
    borderBottom: "1px solid white", 
    maxWidth: "900px", 
    textAlign: "left",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "7px",
}

const makeMagatama = function(Name, Element, WildEffects, Strength, Magic, Vitality, Agility, Luck, Reflects, Absorbs, Void, Resists, Weak, Skills){
    console.log(Name + " one more go")
    return(
        <div className="magatama" style={{textAlign: "center", color: "#C40000"}}>
            <div style={{paddingTop: "7px", paddingLeft: "5px", paddingRight: "5px"}}>
                <h3 style={nameHeader}>{Name}</h3>
            </div>
            <table style={topTableStyle}>
                <tbody>
                    <tr>
                        <td style={{border: "0px white"}}>
                        <table style={magatamaTableStyle}>
                                <tbody>
                                    <tr>
                                        <th>Relfects</th>
                                        <th>Absorbs</th>
                                        <th>Void</th>
                                        <th>Resists</th>
                                        <th>Weak</th>
                                    </tr>
                                    <tr>
                                        <td>{Reflects}</td>
                                        <td>{Absorbs}</td>
                                        <td>{Void}</td>
                                        <td>{Resists}</td>
                                        <td>{Weak}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={magatamaTableStyle}>
                                <tbody>
                                <tr>
                                    <th>Element</th>
                                    <th>Wild Effects</th>
                                    <th>St</th>
                                    <th>Ma</th>
                                    <th>Vt</th>
                                    <th>Ag</th>
                                    <th>Lu</th>
                                    
                                </tr>
                                <tr>
                                    <td>{Element}</td>
                                    <td>{WildEffects}</td>
                                    <td>{Strength}</td>
                                    <td>{Magic}</td>
                                    <td>{Vitality}</td>
                                    <td>{Agility}</td>
                                    <td>{Luck}</td>    
                                </tr>
                                <tr>
                                    
                                </tr>
                                <tr>
                                    
                                </tr>
                                </tbody>
                            </table>
                            
                            <table style={magatamaTableStyle}>
                                <tbody>
                                    <tr>
                                        <td>Skill</td>
                                        <td>Cost</td>
                                        <td>Effect</td>
                                        <td>Level</td>
                                    </tr>
                                    {ReactHtmlParser (Skills)}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                </tr>
                </tbody>
            </table>
        </div>
    )
}        

export default makeMagatama;