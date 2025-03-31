#HTML

# List of Parties
  - List the following items in list view
  - names, dates, times, locations, description
  - Add ability to delete per party - delete on each line

# Form to add new parties
  - Contains required party information (name,date,location,description)
  - submit button - posts information to database via api
    - adds to party list above to a list of events







#example 
function renderTargetSheep() {
  const targetSheep = state.target.map((sheep) => {
    const li = document.createElement("li");
    li.textContent = "🐑";
    return li;
  });
  const targetBank = document.querySelector("#targetBank ul");
  targetBank.replaceChildren(...targetSheep);
}