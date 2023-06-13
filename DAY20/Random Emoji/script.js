
let result = document.getElementById("fact");
result.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"> </h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div id="content" class="modal-body text-center display-1">
      
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`






async function renderFacts(){
let response = await fetch("https://emojihub.yurace.pro/api/random");
let data = await response.json();
console.log(data);
document.getElementById("content").innerHTML = data.htmlCode[0];
document.getElementById("exampleModalLabel").innerHTML = data.name;
}