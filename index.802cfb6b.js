var members=[{name:"David",surname:"Vargas",url:"https://github.com/bilisito98",role:["Leader","Fullstack Developer"],photo:"https://avatars.githubusercontent.com/u/102624868?s=400&u=cdeacadc7ff36b27bb342e227054c2c0ba511458&v=4"}],contentModal=document.querySelector(".content_modal"),libtn=document.querySelector(".movie-card"),clearContent=document.querySelector("#clearModal"),clearWhnClck=document.querySelector(".modal");function addModalPoster(e){e.preventDefault();var t=e.currentTarget.innerHTML;console.log(e.currentTarget.dataset.value),document.querySelector(".modal-watched").setAttribute("id","".concat(e.currentTarget.dataset.value)),document.querySelector(".modal-queue").setAttribute("id","".concat(e.currentTarget.dataset.value)),document.createElement("div").classList.add("div-example"),contentModal.innerHTML="";var n=members.map((function(e){return'\n    <div class="modal-body__image">\n    '.concat(t,"\n\n    </div>\n\n\n    ")})).join("");contentModal.insertAdjacentHTML("afterbegin",n)}clearContent.addEventListener("click",(function(){console.log("sirveeee el CLICK")})),document.body.addEventListener("keydown",(function(){console.clear(),setTimeout((function(){contentModal.innerHTML=""}),200)})),libtn.addEventListener("click",addModalPoster);
//# sourceMappingURL=index.802cfb6b.js.map