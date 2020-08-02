import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import './skill'
import "./App.css"



const makeMagatama = function(Name, Element, WildEffects, Strength, Magic, Vitality, Agility, Luck, Reflects, Absorbs, Void, Resists, Weak, Skills){
    return(
        <div className="magatama">
            <h3>{Name}</h3>
                <table>
                    <tbody>
                        <tr>
                            <table>
                                <tr>
                                    <th>Element</th>
                                    <th>Wild Effects</th>
                                </tr>
                                <tr>
                                    <td>{Element}</td>
                                    <td>{WildEffects}</td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                        <table>
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
                        </table>
                        </tr>
                        <tr>
                        <table>
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
                        </table>
                        </tr>
                        <tr>
                        <table>
                            <tr>
                                <td>Skill</td>
                                <td>Cost</td>
                                <td>Effect</td>
                                <td>Level</td>
                            </tr>
                            <tr> { ReactHtmlParser (Skills)} </tr>

                        </table>
                        </tr>
                    </tbody>
                    <tr>
                        <th>Name</th>
                        <th>Effect</th>
                    </tr>
                    <tr>
                        <td>Antehma</td>
                        <td>Booo</td>
                        <td>Not Today Beelzebub</td>
                    </tr>
                </table>
        </div>
    )
}        

export default makeMagatama;