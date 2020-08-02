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

var skillArray = [skill1, skill2];
var parsedSkillArray = [];

function parseSkill(skill) {
    var fixedSkill;
    fixedSkill = '<tr>' + skill.Name + '</tr><tr>' + skill.Cost + '</tr><tr>' + skill.Effect + '</tr><tr>' + skill.Level + '</tr>';
    parsedSkillArray.push(fixedSkill);
}

function prepareSkillArray(skillArray) {
    var i;
    for (i = 0; i < skillArray.length; i++) {
        console.log(i);
        parseSkill(skillArray[i]);
    }
    parsedSkillArray = parsedSkillArray.join("");
}

var finalSkillArray = prepareSkillArray(skillArray);

export { finalSkillArray };