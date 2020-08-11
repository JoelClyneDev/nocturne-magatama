import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import './skill'
import "./App.css"



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
                                        {console.log("help me" + Skills)}
                                        {//ReactHtmlParser ("<tr><td>Deathbound</td><td>25% HP</td><td>Medium physical damage to random foes.</td><td>61</td></tr><tr><td>Avenge</td><td> Passive</td><td> 50% chance of countering any physical attack with heavy physical damage</td><td>69</td></tr>")
                                        }
                                    </tbody>
                                </table>
                            </td>
                        </tr>
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
        </div>
    )
}        

export default makeMagatama;