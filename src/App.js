import './App.css'
import { useState, useEffect } from 'react'
import { getCollections, getSearchResults } from './api'

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

  const [currentSearchWord, setCurrentSearchWord] = useState('')
  const [currentCollection, setCurrentCollection] = useState('')
  const [currentQuality, setCurrentQuality] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [currentInputs, setCurrentInputs] = useState([
    null, null, null, null, null, null, null, null, null, null,
  ])
  const [currentInputsFloats, setCurrentInputsFloats] = useState(null)
  const [outcomes, setOutcomes] = useState(null)
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const handleChangeSearchWord = (event) => {
    setCurrentSearchWord(event.target.value)
  }

  const handleChangeCollection = (event) => {
    setCurrentCollection(event.target.value)
  } 

  const handleChangeQuality = (event) => {
    setCurrentQuality(event.target.value)
  } 

  //Updates searchresults when when any of the search parameters change
  useEffect(() => {
    setSearchResults(getSearchResults(currentSearchWord, currentCollection, currentQuality))

  }, [currentSearchWord, currentCollection, currentQuality]);

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
              <select onChange={handleChangeQuality} id='quality-select'>
                <option value=''>Select Quality</option>
                <option value='Consumer'>Consumer (Gray)</option>
                <option value='Industrial'>Industrial (Light Blue)</option>
                <option value='Mil-Spec'>Mil-Spec (Blue)</option>
                <option value='Restricted'>Restricted (Purple)</option>
                <option value='Classified'>Classified (Pink)</option>
              </select>
              <select onChange={handleChangeCollection} id='collection-select'>
                <option value=''>Select Collection</option>
                {getCollections().map((collectionName) => (
                  <option value={collectionName}>{collectionName}</option>
                ))}

              </select>
            </div>
            <input onChange={handleChangeSearchWord} placeholder='Search Skin...' type='text'></input>
          </div>
          <div className='big-card'>
            {
              searchResults.map((skin) => (
                <SearchResult skin={skin}/>
              ))
            }
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
