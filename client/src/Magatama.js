import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import './skill'
import "./App.css"


/*
**The shell of a magatama in react html code
**The skills are taken in as an array of strings and converted to react code using ReactHtmlParser
**Returns the react html code of a magatama
*/
const makeMagatama = function(Name, Element, WildEffects, Strength, Magic, Vitality, Agility, Luck, Reflects, Absorbs, Void, Resists, Weak, Skills){
    console.log(Name + " one more go")
    return(
        <div className="magatama">
            <h3>{Name}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                    <tr>
                                        <th>Element</th>
                                        <th>Wild Effects</th>
                                    </tr>
                                    <tr>
                                        <td>{Element}</td>
                                        <td>{WildEffects}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>St</td>
                                            <td>Ma</td>
                                            <td>Vt</td>
                                            <td>Ag</td>
                                            <td>Lu</td>
                                        </tr>
                                        <tr>
                                            <td>{Strength}</td>
                                            <td>{Magic}</td>
                                            <td>{Vitality}</td>
                                            <td>{Agility}</td>
                                            <td>{Luck}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
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
                                <table>
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