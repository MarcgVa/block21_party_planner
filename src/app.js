
/*
    === Party Planner ===

    Operate as apis that when used
      - must retrieve all events from database
      - must be able to add new parties
      - must be able to delete parties (addlistener)
*/


const state = {
  events: [],
}

const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events'





//Functions
const renderEvents = () => {
  const eventList = document.querySelector("#eventList");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }

  //check for events
  if (!state.events.length) {
    eventList.innerHTML = "No Events.";
    return;
  }
  
  const eventCards = state.events.map((event) => {
    const date = new Date(event.date).toLocaleDateString(undefined, options);
    const card = document.createElement("div");
    card.setAttribute("class", "card bg-secondary m-4 p-2");
    card.style = "width: 18rem";
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title fs-2 fw-bold text-warning");
    cardTitle.innerHTML = `${event.id} - ${event.name}`;
    const cardDate = document.createElement("h6");
    cardDate.setAttribute("class", "card-title text-center fs-5 text-light");
    cardDate.innerHTML = date;
    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text text-center fs-5 text-light");
    cardText.innerHTML = event.description;
    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger btn-sm");
    button.setAttribute("id", event.id);
    //button.setAttribute("onclick", "setDelete();");
    button.type = "button";
    button.innerHTML = 'Delete';


    cardBody.append(cardTitle);
    cardBody.append(cardDate);
    cardBody.append(cardText);
    cardBody.append(button);
    card.append(cardBody);

    return card;
  });

  eventList.replaceChildren(...eventCards);
}


// APIs 
const getEvents = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.events = json.data;
  } catch (error) {
    console.error(error);
  }
}

const addEvent = async (event) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    const json = await response.json();
    if (json.error) {
      throw new Error(json.error.message);
    }
  } catch (error) {
    console.error(error);
  }
}
// === Render ====
const render = async () => {
   await getEvents();
  renderEvents();
}

// //Event Listeners
const form = document.getElementById("addEvent");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
const data = new FormData(event.target);
const party = {
  name: data.get("partyName"),
  description: data.get("partyDescription"),
  date: new Date(data.get("partyDate")),
  location: data.get("partyLocation"),
};
 
  await addEvent(party);
  form.reset();
  render();
})

// // === Main ===
render();