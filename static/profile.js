function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('#salary-field').value,
    educationLevel: document.querySelector('#education-level-field').value,
    state: document.querySelector('#state-field').value,
    cityType: document.querySelector('#city-type-field').value,
    doesGarden: document.querySelector('#does-garden-field').value,
    hoursTV: document.querySelector('#hours-tv-field').value

  };

  // make request to server to get the data
  fetch('/api/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data =>{
    console.log('Success:', data);
  })
  // add the data the server returns to the document
  
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
