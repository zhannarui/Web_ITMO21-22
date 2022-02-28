var btn = document.getElementById("btn").addEventListener('click',getPost);
let con = 1;
var div = document.getElementById("CardDiv");

function getPost(){
    var preloader = document.getElementById("preloader");
    var errormsg = document.getElementById("error")
    errormsg.textContent = "";
    preloader.style.visibility = "visible";
    fetch('https://jsonplaceholder.typicode.com/photos/' + con)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error(response.status);
        }
       
    })
    .then((post)=>{
     
           div.innerHTML +=`
           <div class = "card">
           <img class="card-img" src="${post.thumbnailUrl}">
           <div class="card-body">
           <h5 class="card-title">${post.id}</h5>
           <p class="card-text">${post.title}</p>
           </div>
           </div>
           `
           con = con + 1;
           preloader.style.visibility = "hidden";

    })
    .catch((error)=>{
        //document.getElementById('CardDiv').innerHTML = '<div class="container"><p>⚠ Что-то пошло не так</p></div>';
        errormsg.textContent = error
        console.log("Error: " + error);
        preloader.style.visibility = "hidden";

    });
    
}

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   $('.button').on('click', function() {
// 	$('.preloader').addClass('active')
  
// 	$.get('/echo/json', function(data) {
//     sleep(2000).then(function() {
//       $('.preloader').removeClass('active')
//     })
//   })
// })