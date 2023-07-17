// Function to fetch data from the URL and render it
function fetchDataAndRender(url) {
  fetch(url)
    .then(response => response.json())
    .then(dataArray => {
      dataArray.forEach(data => {
        renderData(data);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Function to render a single data object
function renderData(data) {
  const container = document.getElementById("container");

  // Create container for data
  const dataContainer = document.createElement("div");
  dataContainer.classList.add("data-container");

  // Create elements for data properties
  const idEl = document.createElement("p");
  idEl.textContent = `ID: ${data._id}`;

  const creatorEl = document.createElement("p");
  creatorEl.textContent = `Creator: ${data.creator}`;

  const titleEl = document.createElement("h2");
  titleEl.textContent = data.title;

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = data.description;

  // Append elements to data container
  dataContainer.appendChild(idEl);
  dataContainer.appendChild(creatorEl);
  dataContainer.appendChild(titleEl);
  dataContainer.appendChild(descriptionEl);

  // Append data container to main container
  container.appendChild(dataContainer);
}

postData("https://lastbackend-dqh6.onrender.com/quiz/")

async function postData(url){
  var res = await fetch(url)
  var data = await res.json()
 console.log(data)
  // renderData(data)
  data.forEach(Data => {
    renderData(Data);
  });

//  window.location.href = `dashboard.html`
}


