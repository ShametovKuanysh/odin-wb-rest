(()=>{"use strict";function e(e){const t=document.getElementById("content");switch(t.innerHTML="",e){case 1:t.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h1");n.textContent="Menu",t.appendChild(n);const d=document.createElement("div");d.classList.add("break");const a=document.createElement("h3");a.textContent="Breakfast",d.appendChild(a);const c=document.createElement("div");c.classList.add("desc");const o=document.createElement("h4");o.textContent="Bread";const s=document.createElement("span");return s.textContent="some bread",c.appendChild(o),c.appendChild(s),e.appendChild(t),e.appendChild(d),e.appendChild(c),e}());break;case 2:t.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h1");n.textContent="Contacts",t.appendChild(n);const d=document.createElement("div");d.classList.add("break");const a=document.createElement("h3");a.textContent="Phone",d.appendChild(a);const c=document.createElement("div");c.classList.add("desc");const o=document.createElement("h4");o.textContent="87777777777";const s=document.createElement("span");return s.textContent="from 8 - 20",c.appendChild(o),c.appendChild(s),e.appendChild(t),e.appendChild(d),e.appendChild(c),e}());break;default:t.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h1");n.textContent="Georgian Food and Wine Experience in San Francisco Bay Area",t.appendChild(n);const d=document.createElement("div");d.classList.add("desc");const a=document.createElement("p");a.textContent='Bevri (which means "a lot" in Georgian) is a Georgian restaurant, famous for its hot gooey cheese bread khachapuri, juicy and flavorful dumplings khinkali, mouth-watering grilled meats and, of course, unique luscious Georgian wines.',d.appendChild(a);const c=document.createElement("div");c.classList.add("timetable");const o=document.createElement("span"),s=document.createElement("span"),i=document.createElement("span"),m=document.createElement("span"),l=document.createElement("span"),p=document.createElement("span"),r=document.createElement("span");return o.textContent="Sunday: 8am - 8pm",s.textContent="Monday: 6am - 6pm",i.textContent="Tuesday: 6am - 6pm",m.textContent="Wednesday: 6am - 6pm",l.textContent="Thursday: 6am - 10pm",p.textContent="Friday: 6am - 10pm",r.textContent="Saturday: 8am - 10pm",c.appendChild(o),c.appendChild(s),c.appendChild(i),c.appendChild(m),c.appendChild(l),c.appendChild(p),c.appendChild(r),e.appendChild(t),e.appendChild(d),e.appendChild(c),e}())}}document.getElementById("home").addEventListener("click",(t=>e())),document.getElementById("menu").addEventListener("click",(t=>e(1))),document.getElementById("contact").addEventListener("click",(t=>e(2))),e()})();