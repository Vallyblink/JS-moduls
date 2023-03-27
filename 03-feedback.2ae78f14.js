const e=document.querySelector("input[name=email]"),t=document.querySelector("textarea[name=message]");document.querySelector("button[type=submit]");function a(a){a.preventDefault();let n=e.value,u=t.value;localStorage.setItem("feedback-form-state",`Email = ${n}; Message = ${u}`)}e.addEventListener("input",a),t.addEventListener("input",a);
//# sourceMappingURL=03-feedback.2ae78f14.js.map
