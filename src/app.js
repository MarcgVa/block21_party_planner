
/*
    === Party Planner ===

    Operate as apis that when used
      - must retrieve all events from database
      - must be able to add new parties
      - must be able to delete parties (addlistener)
*/


const state = {
  'url': 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/',
}
const targetList = document.getElementById("eventList");
const form = document.getElementById("add-party");



//Functions

const renderEventList = (eventList) => {
  console.log(eventList);
  const listOfEvents = eventList.forEach((e) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style = "width: 18rem;";
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body")
    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = e.name;
    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text")
    cardText.innerHTML = `${e.description} | ${e.Location} | ${e.Date}}`
    const btnDelete = document.createElement("a");
    btnDelete.setAttribute("class", "btn btn-primary")
    btnDelete.innerText = "Delete";

    //build card
    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(btnDelete);
    card.append(cardBody)
    
    targetList.append(card);
  });
}


// APIs 

const getParties = async () => {
  try {
    const response = await fetch(`${state.url}/events`);
    const json = await response.json();
    renderEventList(json.data);

  } catch (error) {
    console.error(error);
  }
}

const addParty = async (party) => {
  try {
    
  } catch (error) {
    console.error(error);
  }

}


//Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data.get("partyName"));
  const partyInfo = [];
  data.forEach((e) => {
    let party = {
      "name": data.get("partyName"),
      "description": data.get("partyDescription"),
      "date": data.get("partyDate"),
      "location": data.get("partyLocation"),
    };

    partyInfo.push(party)
  })
})


getParties()