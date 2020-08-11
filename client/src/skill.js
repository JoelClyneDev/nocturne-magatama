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

class Skill {
    constructor(name, cost, effect, level) {
        this.name = name;
        this.cost = cost;
        this.effect = effect;
        this.level = level;
    }

}

function generateSkill(name, cost, effect, level) {
    return new Skill(name, cost, effect, level)
}

function parseSkill(skill) {
    var fixedSkill;
    fixedSkill = '<tr><td>' + skill.Name + '</td><td>' + skill.Cost + '</td><td>' + skill.Effect + '</td><td>' + skill.Level + '</td></tr>';
    return fixedSkill;
}

function parseSkillObject(skill) {
    var fixedSkill = null
    fixedSkill = '<tr><td>' + skill.name + '<tr><td>' + skill.cost + '<tr><td>' + skill.effect + '<tr><td>' + skill.level
    return fixedSkill
}

function prepareSkillArray(skillArray) {
    var i;
    var parsedSkillArray = [];
    for (i = 0; i < skillArray.length; i++) {
        parsedSkillArray.push(parseSkill(skillArray[i]))
    }
    parsedSkillArray = parsedSkillArray.join("");
    console.log("parsed here" + parsedSkillArray);
    return parsedSkillArray;
}

function parseSkillObjectArray(skillArray) {
    var parsedSkillArray = [];
    skillArray.forEach(element => {
        parsedSkillArray.push(parseSkillObject(element))
    });
    parsedSkillArray.join("")
    console.log("Maximum Parse " + parsedSkillArray)
    return parsedSkillArray

}





const finalSkillArray = function() {
    console.log("test");

}
var skillArray = [skill1, skill2];
var finalProduct = prepareSkillArray(skillArray);
console.log("finalProduct " + finalProduct)


export { finalProduct, prepareSkillArray, generateSkill, parseSkillObjectArray };