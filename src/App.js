import './App.css'
import { useState, useEffect } from 'react'

//asset imports
import info from './assets/info.svg'
import x from './assets/x.svg'
import xWhite from './assets/xWhite.svg'
import random from './assets/random.svg'


//components
import InfoPopUp from './components/InfoPopUp'
import SearchResult from './components/SearchResult'
import Input from './components/Input'
import ProbabilityCollection from './components/ProbabilityCollection'
import ProbabilitySkin from './components/ProbabilitySkin'

function App() {

  const [currentSearchWord, setCurrentSearchWord] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const [currentInputs, setCurrentInputs] = useState([
    null, null, null, null, null, null, null, null, null, null,
  ])
  const [currentInputsFloats, setCurrentInputsFloats] = useState(null)
  const [outcomes, setOutcomes] = useState(null)
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (

    <div className="App">
      {
        showInfo &&
        <InfoPopUp toggleInfo={toggleInfo} />

      }
      <nav>
        <h3>
          tradeup calculator
        </h3>
      </nav>
      <main>
        <div className='big-card-container'>
          <h1>
            Add inputs
          </h1>
          <div className='search-filters'>
            <div className='search-filters-dropdowns-div'>
              <select>
                <option>Consumer (Gray)</option>
                <option>Industrial (Light Blue)</option>
                <option>Mil-Spec (Blue)</option>
                <option>Restricted (Purple)</option>
                <option>Classified (Pink)</option>
              </select>
              <select>

              </select>
            </div>
            <input type='text'></input>
          </div>
          <div className='big-card'>
            
          </div>
        </div>
        <div className='big-card-container'>
          <h1>
            Inputs
          </h1>
          <div className='big-card'>
            <div className='inputs'>
              {
                currentInputs.map((skin) => 
                <Input skin={skin} />
                )
              }
            </div>
            <div className='inputs-buttons'>
              <button className='button-clear-inputs'>
                <img src={xWhite}></img>
              </button>
              <button className='button-radomize-inputs'>
                <img src={random}></img>
              </button>
              <button className='button-calculate-inputs'><h3>calculate</h3></button>
            </div>
          </div>
        </div>
        <div className='big-card-container'>
          <h1>
            Outcomes
          </h1>
          <div className='big-card outcomes'>
            <h2 className='outcomes-titles'>probability by collections:</h2>
            <div className='collections'>

            </div>
            <h2 className='outcomes-titles'>probability by skins:</h2>
            <div className='skins'>

            </div>
          </div>
        </div>
      </main>
      <div className='info-button-container'>
        <button id='info-button' onClick={toggleInfo}>
          <img src={info}>
          </img>
        </button>
      </div>
    </div>
  );
}

export default App;
