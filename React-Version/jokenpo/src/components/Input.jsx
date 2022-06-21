import React from "react";

const ELEMENT_ONE = {
  name: 'rock',
  losesFor: 'paper',
  winsOf: 'scissor',
}

const ELEMENT_TWO = {
  name: 'paper',
  losesFor: 'scissor',
  winsOf: 'rock',
}

const ELEMENT_THREE = {
  name: 'scissor',
  losesFor: 'rock',
  winsOf: 'paper',
}

const JOKENPO = [ ELEMENT_ONE, ELEMENT_TWO, ELEMENT_THREE ];

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      myAnswer: '',
      computerAnswer: '',
      showResult: false,
      result: '',
    }
  };
  
  // FUNCTION FOR MAINTENANCE OF MY CHOICE;
  handleParameter = (event) => {
    this.setState({ myAnswer: event.target.value })
  };

  // FUNCTION FOR VALIDATION OF MY CHOICE AND SETTING COMPUTER'S CHOICE;
  handleAnswer = () => {
    const { myAnswer } = this.state;
    const elementParameter = JOKENPO.find((element) => element.name === myAnswer);

      if (JOKENPO.indexOf(elementParameter) === -1) {
          alert('Insert a valid name!');
      } else {
          this.setState({ 
            computerAnswer: `${JOKENPO[Math.floor(Math.random() * 3)].name}`, 
          });
        }
        this.handleResult(); 
        this.setState({
          showResult: true,
        })
  }

  // FUNCTION FOR SETTING THE RESULT OF THE GAME;
  handleResult = () => {
    const { myAnswer, computerAnswer } = this.state;
    this.handleAnswer();
    
    if (JOKENPO.some((element) => element.winsOf === computerAnswer)) {
        this.setState({
          result: 'You won!',
        })
    }
    
    if (JOKENPO.some((element) => element.losesFor === computerAnswer)) {
      this.setState({
        result: 'You lose!',
      })
    }

    if (JOKENPO.some((element) => element.name === myAnswer) && myAnswer === computerAnswer) {
      this.setState({
        result: 'Game draw!',
      })
    }
  }

  render() {
    // const { myAnswer } = this.state;
    const { computerAnswer, result, showResult } = this.state;
    return(
      <body class="grid h-screen place-items-center">
        <div 
          align="center" 
          className="p-4 max-w-sm bg-blue-50 rounded-lg border mt-0 border-gray-200 shadow-md sm:p-6 lg:p-8 dark:border-gray-300"
        >
          <header className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10">
            <h1 className="font-medium leading-tight text-5xl mt-10 mb-2 text-blue-600">JOKENPO</h1>
          </header>
          <div className="mt-1 relative rounded-md">
            <p className="block text-sm font-medium text-gray-700">Choose rock, paper or scissor to write in the box below</p>
            <br />
            <input 
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-10% pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              onChange={ this.handleParameter } 
            />
            <br />
            <button 
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={ this.handleAnswer }
              >
                Play!
            </button>
          </div>
          <br />
          <div>
            {/* <div id="players-choice">
              <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700">You choose</h4>
              <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:border-gray-300">
                <h4 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">{ myAnswer }</h4>
              </div>
            </div> */}
            <br />
    
            <div id="computers-choice" >
              <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700">Computer chooses</h4>
              <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:border-gray-300">
                <h4 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">{ computerAnswer }</h4>
              </div>
            </div>
            <br />

            { (showResult === true) 
              ? 
                (<div id="result">
                  <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700">
                    Result
                  </h4>
                  <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:border-gray-300">
                    <h4 className="font-medium leading-tight text-xl mt-0 mb-2 text-red-600">{ result }</h4>
                  </div>
                </div>)
                :
                <div /> }
            
          </div>
        </div>
      </body>
    );
  }
};

export default Input;
