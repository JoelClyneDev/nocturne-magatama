import React, { useRef }   from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

//stores the reference, it starts as null because nothing is in it
const refContainer = useRef(null);
//the current value of the ref is stored in refVarName.current
console.log(refContainer.current);

//do this for the toggleable data
const toggleRef = useRef(null);

//constant of a toggleable data attribute

//temporary class of a collapseable attribute
class dataAttribute{
  constructor(id){
    this.id = id;
    this.toggler = false;
    
  }

  getToggler() {
    return this.toggler;
  }
  changeToggler() {
    this.toggler = !this.toggler;
  }
  collapseAttr() {
    if (this.toggler){
      this.attr.style.display = "block";
    } else {
      this.attr.style.display = "none";
    }
  }
}
/*For doing stuff to the toggle display reference (In this case the paragraph)
Have to say current to access the one I want */
function toggleParagraph() {
  if (toggleRef.current.style.display != "none"){
    toggleRef.current.style.display = "none";
  } else {
    toggleRef.current.style.display = "flex";
  }
}

const dataAttr = new dataAttribute("dataToggle");
//If i want to use a function  in the html part, i have to not use the parentheses or it will auto activate

    return ( 
      <div>
        <h1>Magatamas</h1>
        <p>But what are they</p>
        <div>
          <h2>Light</h2>
          {/*contains a reference to refcontainer which allows it to do stuff to it
          Must use lambda for the function to work!*/}
          <button ref={refContainer} onClick={() => {toggleParagraph()}}>collapse</button>
          <div>
            <p ref={toggleRef}>toggleable data</p>
          </div>
        </div>
      </div>
    );
}

export default App;