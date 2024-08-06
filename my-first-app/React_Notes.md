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

### Ternary operator , AND operator

Ternary Operator: CONDITION ? DO IF TRUE : DO IF FALSE

AND operator: (Expression && Expression)

### Declarative / Imperative Programming

UI = function(State)

### Hooks

useState returns [initial value, function]

destructuring example:

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

### JS ES6 Objet & Array Destructuring

practice.js

const cars = [
  {
    model: "Honda Civic",
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

export default cars;
--------------------
index.js

// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);



### Handling Events

import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;


### Forms

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;



### Hooks vs Classes


### Spread Operator

Spread syntax (...)

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6


### Managing component tree





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

