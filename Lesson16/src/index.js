import './styles/main.scss'

async function createCard() {
  let card = await fetch('https://rickandmortyapi.com/api/character/0,1,2,3,4,5,6,7,8,9,10')
  let content = await card.json()
  let location = await fetch('https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8,9,10')
  let content2 = await location.json()

  let container = document.querySelector('.container')
  
  let key;
  for (key in content) {
    let livestatus = content[key].status
    if (livestatus=='Dead'){
      container.innerHTML += `
    <div class="card">
    <div class="card-info">
      <div class="title">
        <h1>${content[key].name}</h1>
        <div class="status">
        <div class="live-status">
        <div class="live-status dead"></div>
        </div>
        <p>${content[key].species} - ${content[key].status}</p>
      </div>
      </div>
      <div class="content">
           <p>Last known location: 
           ${content2[key].name}</p>
      </div>
    </div>
    <div class="card-image">
      <img src="${content[key].image}" alt="Img">
    </div>
  </div>
    `
     }
     else{
      container.innerHTML += `
    <div class="card">
    <div class="card-info">
      <div class="title">
        <h1>${content[key].name}</h1>
        <div class="status">
        
          <div class="live-status"></div>
          <p>${content[key].species} - ${content[key].status}</p>
        </div>
      </div>
      <div class="content">
           <p>Last known location: 
           ${content2[key].name}</p>
      </div>
    </div>
    <div class="card-image">
      <img src="${content[key].image}" alt="Img">
    </div>
  </div>
    `
     }
   }
}
createCard();