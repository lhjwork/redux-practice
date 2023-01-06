import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div id="container">
      <h1>root</h1>
      <div id="gird">
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left 1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left 2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left 3</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right 1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right 2</h1>
      <Right3></Right3>
    </div>
  );
  function Right3(props) {
    return (
      <div>
        <h1>Right 3</h1>
        <input type="button" value="+" onClick={() => null} />
      </div>
    );
  }
}
