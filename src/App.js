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
  const [currentInputs, setCurrentInputs] = useState(null)
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
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
            <SearchResult skin={
              {
                "collection": "Vertigo",
                "weaponName": "AK-47",
                "skinName": "Black Laminate",
                "quality": "Mil-Spec",
                "tradupInput": true,
                "floatMin": 0.06,
                "floatMax": 0.80,
                "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                "collectionURL": "/collections/vertigo.webp"
              }
            } />
          </div>
        </div>
        <div className='big-card-container'>
          <h1>
            Inputs
          </h1>
          <div className='big-card'>
            <div className='inputs'>
              <Input skin={
                {
                  "collection": "Vertigo",
                  "weaponName": "AK-47",
                  "skinName": "Black Laminate",
                  "quality": "Mil-Spec",
                  "tradupInput": true,
                  "floatMin": 0.06,
                  "floatMax": 0.80,
                  "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                  "collectionURL": "/collections/vertigo.webp"
                }
              } />
              <Input skin={
                {
                  "collection": "Vertigo",
                  "weaponName": "AK-47",
                  "skinName": "Black Laminate",
                  "quality": "Mil-Spec",
                  "tradupInput": true,
                  "floatMin": 0.06,
                  "floatMax": 0.80,
                  "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPFqWdQ-sJ0xOqUpdj2iVbm_Es9Z2D2IdOccAQ7ZA2F-FG8w-3rhcTpvsnJwHph6yQ8pSGKy_qypRo/360fx360f",
                  "collectionURL": "/collections/vertigo.webp"
                }
              } />
              <Input skin={null} />
              <Input skin={null} />
              <Input skin={null} />
              <Input skin={null} />
              <Input skin={null} />
              <Input skin={null} />
              <Input skin={null} />
              <Input skin={null} />
              
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
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
                <ProbabilityCollection collection={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "probability": 50.12,
                }}/>
              </div>
              <h2 className='outcomes-titles'>probability by skins:</h2>
              <div className='skins'>
                <ProbabilitySkin skin={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV969C3l4mOhcj4OrzZglRd6dd2j6eWod6g2w3t-0M4Zmj7ItCTelJrNwrVrADtxrvp1J6-u5rImnFjuHR2-z-DyIleMnKO/360fx360f",
                  "probability": 50.12,
                  "wear": ".888888888",
                  "weaponName": "P90",
                  "skinName": "Glacier Mesh",
                }}/>
                <ProbabilitySkin skin={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV969C3l4mOhcj4OrzZglRd6dd2j6eWod6g2w3t-0M4Zmj7ItCTelJrNwrVrADtxrvp1J6-u5rImnFjuHR2-z-DyIleMnKO/360fx360f",
                  "probability": 50.12,
                  "wear": ".888888888",
                  "weaponName": "P90",
                  "skinName": "Glacier Mesh",
                }}/>
                <ProbabilitySkin skin={{
                  "collection": "Vertigo",
                  "collectionURL": "/collections/vertigo.webp",
                  "imageURL": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV969C3l4mOhcj4OrzZglRd6dd2j6eWod6g2w3t-0M4Zmj7ItCTelJrNwrVrADtxrvp1J6-u5rImnFjuHR2-z-DyIleMnKO/360fx360f",
                  "probability": 50.12,
                  "wear": ".888888888",
                  "weaponName": "P90",
                  "skinName": "Glacier Mesh",
                }}/>
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
