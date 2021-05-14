const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const links1 = json.records;
  
  links1.pop();
  links1.forEach(link => {
   const linkDiv = document.createElement('div');

   const linkImage = document.createElement("img");
   
   linkImage.className = 'link-photo';
   linkImage.src = link['photo'];
   linkImage.alt ='卒展の写真';
   linkDiv.appendChild(linkImage);
   
   document.getElementById('links1').appendChild(linkDiv);

 });

  const links2 = json.records;


  links2.forEach(studio => {
   const studioDiv = document.createElement('div');

   const studioTitle = document.createElement("div");
   studioTitle.className = 'link-title';
   studioTitle.textContent = studio['name-ja'];

   const studioTitleEn = document.createElement("div");
   studioTitleEn.className = 'link-title-en';
   studioTitleEn.textContent = studio['name-en'];

   const studiovenueja = document.createElement("div");
   studiovenueja.className = 'venue-ja';
   studiovenueja.textContent = studio['venue-ja'];

  
   const studiodescriptionja = document.createElement("span");
   studiodescriptionja.className = 'description-ja';
   studiodescriptionja.textContent = studio['description-ja'];


   studioDiv.appendChild(studioTitle);
   studioDiv.appendChild(studioTitleEn);
   studioDiv.appendChild(studiovenueja);
   studioDiv.appendChild(studiodescriptionja);
   
   document.getElementById('links2').appendChild(studioDiv);

 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}


const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();