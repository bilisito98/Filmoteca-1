const e="/trending/all/week",t="&language=en-US",a=async function(a=1){try{const r=`https://api.themoviedb.org/3${e}?api_key=2e9f8fc9479fa19131d9c8fc8ea7c110${t}&page=${a}`,n=await fetch(r),o=await n.json();return console.log(o),o.results}catch(e){console.log("hola desde error"),console.error(e)}},r={12:"Adventure",14:"Fantasy",16:"Animation",18:"Drama",27:"Horror",28:"Action",35:"Comedy",36:"History",37:"Western",53:"Thriller",80:"Crime",99:"Documentary",878:"Science Fiction",9648:"Mystery",10402:"Music",10749:"Romance",10751:"Family",10752:"War",10770:"TV Movie"};let n=1,o="";const i=document.querySelector(".cardsMovie"),s={renderImages:function(e){o+=e.map((({poster_path:e,original_title:t,release_date:a,genre_ids:n})=>`<li class="movie-card" onclick="addModalPoster(event)">\n            <img class='cardsMovie__image' src='https://image.tmdb.org/t/p/w500${e}' alt='image movie' data-toggle="modal" data-target="#posterModal" />\n\n            <h2 class="movie__title">${t}</h2>\n            <p class="movie__genre">${function(e){const t=e.length;if(0===t)return"";let a=[];for(let o=0;o<Math.min(2,t);o+=1)a.push((n=e[o],r[n]||`Unknown genre(${n})`));var n;return t>2&&a.push("Other"),a.join(", ")}(n)}<span class="movie__popular">${a}</span></p>\n            </li>`)).join(""),i.innerHTML=o},refreshMovieList:async function(){const e=await a(n);return this.renderImages(e)}};s.refreshMovieList();const c=document.querySelector(".prev"),l=document.querySelector(".next");c.addEventListener("click",(e=>{if(o="","LI"===e.target.tagName||"SPAN"===e.target.tagName||"I"===e.target.tagName){if(n<1)return void alert("Has llegado a la 1");n--,s.refreshMovieList()}})),l.addEventListener("click",(e=>{if(o="","LI"===e.target.tagName||"SPAN"===e.target.tagName||"I"===e.target.tagName){if(n>1e3)return void alert("Has llegado a la 1000");n++,s.refreshMovieList()}}));
//# sourceMappingURL=index.3156a393.js.map
