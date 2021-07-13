const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Faculty';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const facultys = json.records;
  
  facultys.forEach(studio => {
   const studioDiv = document.createElement('div');

   const studioFaculty= document.createElement("span");
   studioFaculty.className = 'f-faculty-ja';
   studioFaculty.textContent = studio['f-faculty-ja'];

   const studioFacultyEn= document.createElement("span");
   studioFacultyEn.className = 'f-faculty-en';
   studioFacultyEn.textContent = studio['f-faculty-en'];

   const studioFacultyTitle= document.createElement("div");
   studioFacultyTitle.className = 'f-faculty-title';
   studioFacultyTitle.textContent = studio['f-faculty-title-ja'];

   const studioFacultyTitleEn= document.createElement("span");
   studioFacultyTitleEn.className = 'f-faculty-title-en';
   studioFacultyTitleEn.textContent = studio['f-faculty-title-en'];

   const fStudioJa= document.createElement("div");
   fStudioJa.className = 'f-studio-ja';
   fStudioJa.textContent = studio['f-studio-ja'];

   const fStudioEn= document.createElement("span");
   fStudioEn.className = 'f-studio-en';
   fStudioEn.textContent = studio['f-studio-en'];

   const majorJa= document.createElement("div");
   majorJa.className = 'major-ja';
   majorJa.textContent = studio['major-ja'];

   const majorEn= document.createElement("span");
   majorEn.className = 'major-en';
   majorEn.textContent = studio['major-en'];
   

   studioDiv.appendChild(studioFaculty);
   studioDiv.appendChild(studioFacultyEn);
   studioDiv.appendChild(studioFacultyTitle);
   studioDiv.appendChild(studioFacultyTitleEn);
   studioDiv.appendChild(fStudioJa);
   studioDiv.appendChild(fStudioEn);
   studioDiv.appendChild(majorJa);
   studioDiv.appendChild(majorEn);
   
   document.getElementById('facultys').appendChild(studioDiv);

 });

 const facultys2 = json.records;
  
 facultys2.pop();
  facultys2.forEach(link => {
   const linkDiv = document.createElement('div');

   const linkImage = document.createElement("img");
   
   linkImage.id = link['name-ja'];
   linkImage.className = 'faculty-photo';
   linkImage.src = link['faculty-photo'];
   linkImage.alt ='facultyの写真';
   linkDiv.appendChild(linkImage);
   
   document.getElementById('facultys2').appendChild(linkDiv);

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