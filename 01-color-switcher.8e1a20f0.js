const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;t.disabled=!0,e.addEventListener("click",(function(a){const o=document.querySelector("body");document.querySelector("[data-start]"),document.querySelector("[data-stop]");d=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d);document.querySelector("[data-start]"),document.querySelector("[data-stop]");t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8e1a20f0.js.map
