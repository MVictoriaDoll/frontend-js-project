const d=document.querySelector(".js__listcharacters"),f=document.querySelector(".js__favoritecharacters"),h=document.querySelector(".js_searchButton"),m=document.querySelector(".js__characters-input");let s=[],r=[];const u=e=>{const a=e.currentTarget.dataset.id;console.log(a);const t=s.find(o=>o._id.toString()===a.toString()),c=r.find(o=>o._id.toString()===a.toString());console.log("clickenadi",c),c===void 0?(r.push(t),e.currentTarget.classList.add("favorite"),localStorage.setItem("favs",JSON.stringify(r)),n()):(r.splice(c,1),e.currentTarget.classList.remove("favorite"),localStorage.setItem("favs",JSON.stringify(r)),n())},v=e=>{e.stopPropagation();const a=e.currentTarget.dataset.id;console.log("Clicked remove ID:",a);const t=r.findIndex(c=>c._id.toString()===a.toString());if(t!==-1){const c=r.splice(t,1);console.log("Removed from favorites:",c);const o=document.querySelector(`.js__charactercard[data-id="${a}"]`);o&&o.classList.remove("favorite"),localStorage.setItem("favs",JSON.stringify(r)),n()}};function g(e){e.preventDefault();const a=m.value;fetch(`https://api.disneyapi.dev/character?pageSize=50&name=${encodeURIComponent(a)}`).then(t=>t.json()).then(t=>{s=t.data,i(),s&&cardElement.classList.add("favorite"),i()})}const _=()=>{fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{s=e.data,console.log("characters array:",s),i()})},S=()=>{const e=JSON.parse(localStorage.getItem("favs"));e!==null&&(r=e,n())},l=(e,a=!1)=>{let t=e.imageUrl;t||(t="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney");let c="";return c+=`<li class="js__charactercard card" data-id="${e._id}">`,c+=`<img src="${t}" class="card-img" alt="${e.name}"">`,c+=`<h3 class= "card__name">${e.name} </h3>`,a&&(c+=`<button class="remove_btn js__removeFavorite" data-id="${e._id}">X</button>`),c+="</li>",c},i=()=>{let e="";for(let t of s)e+=l(t);d.innerHTML=e;const a=document.querySelectorAll(".js__charactercard");for(const t of a)t.addEventListener("click",u)};function n(){let e="";for(const t of r)e+=l(t,!0);f.innerHTML=e;const a=document.querySelectorAll(".js__removeFavorite");for(const t of a)console.log("hice click",t),t.addEventListener("click",v)}S();_();h.addEventListener("click",g);
//# sourceMappingURL=main.js.map
