import { buildTable,addRow,deleteRow } from "./tables";
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
const eventsTable = document.getElementById("tblEventList");
const tBody = document.createElement("tbody");

const buildEventList = (eventList) => {
  buildTable(eventsTable, tBody, eventList);
  console.log("buildEventList");
}
  
const getParties = async () => {
  try {
    const response = await fetch(`${state.url}/events`);
    const json = await response.json();
    await buildEventList(json.data);
    console.log(json.data);

  } catch (error) {
    console.error(error);
  }

}
console.log
getParties()