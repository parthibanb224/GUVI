
     let result = document.getElementById("fact");
     result.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title fs-5" id="exampleModalLabel">Facts about Cat:</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div id="content" class="modal-body">
           
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         </div>
       </div>
     </div>
   </div>`






async function renderFacts(){
     let response = await fetch("https://meowfacts.herokuapp.com/?count=3");
     let data = await response.json();
     let datas = data.data[0];
     console.log(datas);
     document.getElementById("content").innerHTML = datas;
}