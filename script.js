const url = "https://ghibliapi.vercel.app/films/";
const container = document.getElementById('container');

async function getJson () {

try{
  const response = await fetch(url);
  const json = await response.json();
  showData(json);
}
catch (error){
	console.error('Upsss... ' + error)
}
}
getJson()

function showData(data){
	data.forEach((element) =>{
	  container.innerHTML += `
		<div class="card m-4 bg-dark text-white border-primary">
  		<div class="row g-0">
    		<div class="col-md-3">
      			<img src="${element.image}" class="img-fluid rounded-start">
    		</div>
    	<div class="col-md-9 p-3">
      		<div class="card-body">
        		<h3 class="card-title">${element.title} - ${element.release_date}</h3>
        		<h4 class="card-text">${element.original_title} (${element.original_title_romanised})</h4>
        		<h5 class="card-text">Director: ${element.director}</h5>
        		<h5 class="card-text">Producer: ${element.producer}</h5>
        		<p class="card-text">${element.description}</p>
      			</div>
    		</div>
  		</div>
		</div>`
	})
}