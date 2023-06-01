import teamsData from "./data.js";
console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

const getPillsElement = document.getElementById(teamPillsContainerId);
const teamContentElement = document.getElementById(teamContentContainerId);

function displayTeamPills(teamsData) {
  teamsData.forEach((element) => {
    const teamButtonElement = document.createElement("div");
    teamButtonElement.className = "card m-2";
    teamButtonElement.innerHTML = `
    <div id=${element.id} class="card-body">${element.name}</div>
        </div>
    `;
    getPillsElement.append(teamButtonElement);
  });
}

displayTeamPills(teamsData);

getPillsElement.addEventListener("click", (e) => {
  const teamId = e.target.id;
  const requiredTeam = teamsData.find((team) => team.id === teamId);
  console.log(requiredTeam);

  const addingImage = requiredTeam.images
    .map((element, index) => {
      let activeClass;
      if (index === 0) {
        activeClass = "active";
      } else {
        activeClass = "";
      }
      return `<div class="carousel-item ${activeClass}">
    <img src="${element}" class="d-block w-100" alt="...">
  </div>`;
    })
    .join("");

  teamContentElement.innerHTML = `<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" id="carouselinner" > ${addingImage}
   </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>`;
});
