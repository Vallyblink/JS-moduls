!function(){var e=document.querySelector("input[name=email]"),t=document.querySelector("textarea[name=message]");document.querySelector("button[type=submit]");function a(a){a.preventDefault();var n=e.value,u=t.value;localStorage.setItem("feedback-form-state","Email = ".concat(n,"; Message = ").concat(u))}e.addEventListener("input",a),t.addEventListener("input",a)}();
//# sourceMappingURL=03-feedback.fd8a7ff8.js.map