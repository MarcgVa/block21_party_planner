/* 
    Party Planner
    Intake form to new parties 

    */
import { state } from "./app.js";

const form = document.getElementById("add-party");



const addParty = async (party) => {
  try {
    const data = {
      name: "FSA Graduation",
      description: "Best day ever!!",
      date: "5/30/2025",
      location: "online"
    };
    const url = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(party),
    });

    if (!response.ok) {
      throw new Error("New party failed to load");
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const partyInfo = [];
  const data = new FormData(e.target);
  const party = {
      name: data.get("partyName"),
      description: data.get("partyDescription"),
      date: data.get("partyDate"),
      location: data.get("partyLocation")
  };
  
  partyInfo.push(party);
  console.log(party);
  
  addParty(party);
});
