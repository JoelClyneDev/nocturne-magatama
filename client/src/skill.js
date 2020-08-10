import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import "./App.css"

const skill1 = {
    Name: "Deathbound",
    Cost: "25% HP",
    Effect: "Medium physical damage to random foes.",
    Level: "61"
}

const skill2 = {
    Name: "Avenge",
    Cost: " Passive",
    Effect: " 50% chance of countering any physical attack with heavy physical damage",
    Level: "69"
}



function parseSkill(skill) {
    var fixedSkill;
    fixedSkill = '<tr><td>' + skill.Name + '</td><td>' + skill.Cost + '</td><td>' + skill.Effect + '</td><td>' + skill.Level + '</td></tr>';
    return fixedSkill;
}

function prepareSkillArray(skillArray) {
    var i;
    var parsedSkillArray = [];
    for (i = 0; i < skillArray.length; i++) {
        parsedSkillArray.push(parseSkill(skillArray[i]))
    }
    parsedSkillArray = parsedSkillArray.join("");
    console.log("parsed here" + parsedSkillArray);
}





const finalSkillArray = function() {
    console.log("test");
    
} 
var skillArray = [skill1, skill2];
var finalProduct = prepareSkillArray(skillArray);

export {finalProduct};