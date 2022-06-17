import React from "react";

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      parameter: '',
      answer: '',
    }
  };
  
  handleParameter = (event) => {
    this.setState({ parameter: event.target.value })
  };

  handleAnswer = () => {
    const jokenpo = [ 'rock', 'paper', 'scissor' ];
    const { parameter } = this.state;

      if (jokenpo.indexOf(`${ parameter }`) === -1) {
         alert('Insira uma palavra válida!');
      } else {
          this.setState({ answer: `${ jokenpo[Math.floor(Math.random() * 3)] }`});
      }
  }

  render() {
    const { parameter, answer } = this.state;
    return(
      <div>
        <input 
        type="text"
        onChange={ this.handleParameter } />
        <button 
          type="button"
          onClick={ this.handleAnswer }
          >
            Play!
        </button>

        <div>
          <div>
            <h4>You choose: { parameter }</h4>
          </div>
          <div>
            <h4>Computer has chosen: { answer }</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default Input;
