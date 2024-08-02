# This repository is for MERN projects

MERN = MongoDB + Express.js + React.js + Node.js

# React.js

React.js is a JavaScript library for building UI.

### Create React app
link: https://create-react-app.dev/ > Get Started

command: 
npx create-react-app my-app

(for other methods go to the link)

## JSX

### JavaScript Expressions & ES6 Template Literals
enables HTML-looking codes in JavaScript; JS knows what and where to render 

import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);

### HTML Global Attributes
https://www.w3schools.com/tags/ref_standardattributes.asp

NB! change to camelCase

### React Styling

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);


## Components

a function or a JS class

Airbnb React/JSX Style Guide: https://github.com/airbnb/javascript/tree/master/react

const GoalList = () => {
    return (
        <ul className="goal-list>
            <li>Finish the course</li>
            <li>Learning all about the details</li>
            <li>Help other students</li>
        </ul>
    );
};

## Import, Export and Modules

calculator.js
// omitting other codes
export { add, multiply, subtract, divide };
---------------------------
index.js

import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);




### Propos & rendering lists of data

Using props to pass data between components

a function or a JS class

const GoalList = props => {
    return (
        <ul className="goal-list>
            {
                props.goals.map(goal => {
                    return <li key={goal.id}>{goal.text}</li>;
                    }
                )
            }
        </ul>
    );
};

### props
function Card(props){
    return <div>
    <h2>{props.name}</h2>
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>;
}

<Card name="Beyonce"
      tel="+12345"
      email="b#nowhere.com"
/>

### Mapping data to components

https://codesandbox.io/p/sandbox/mapping-components-practice-completed-zl7747?file=%2Fsrc%2Fcomponents%2FApp.jsx


### map(), filter() and reduce()
map():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

filter():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

reduce():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

### Arrow function

https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

var numbers = [5, 56, 6, 78, 90];

const newNumbers = numbers.map( (x, y) => x * y);

### Handling Events


### Child-Parent communication


### Hooks


### State

import {useState} from 'react';

const [courseGoals, setCourseGoals] = useState(
    [
        {id:'cg1', text:'AAA'},
        {id:'cg2', text:'BBBBB'},
        {id:'cg3', text:'CCC'},
    ]
);

### Fetching user input



# Four parts to build fontend

### Create React(Single Page) App

SPA Pages

/             -> List of Users -> always reachable
/:uid/places  -> List of places for selected user -> always reachable
/authenticate -> signup + login forms -> only un-authenticated
/places/new   -> New place form -> only authenticated
/places/:pid  -> Update place form -> only authenticated



### Add Routing & Core Pages

### Split into core components

### UI components + CSS Styling

