!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body;t.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o(e,t)})),e.addEventListener("click",(function(){clearInterval(a),o(t,e)})),e.setAttribute("disabled","");var a=null;function o(t,e){t.disabled=!0,e.disabled=!1}}();
//# sourceMappingURL=01-color-switcher.cb7da325.js.map
