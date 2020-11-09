import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {

  render() {
    return (
      <div class="calc">
        <div class="display">0123456789</div>
        <button class="dobbel">C</button>
        <button class="normal">CE</button>
        <button class="normal">/</button>
        <button class="normal">7</button>
        <button class="normal">8</button>
        <button class="normal">9</button>
        <button class="normal">*</button>
        <button class="normal">4</button>
        <button class="normal">5</button>
        <button class="normal">6</button>
        <button class="normal">-</button>
        <button class="normal">1</button>
        <button class="normal">2</button>
        <button class="normal">3</button>
        <button class="normal">+</button>
        <button class="normal">0</button>
        <button class="normal">.</button>
        <button class="dobbel">=</button>
        
      </div>
    );
  }
}

export default Calculator;