function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
<<<<<<< Updated upstream
    XHR.open("POST", "/posts", true);
=======
    XHR.open("POST", "/articles", true);
>>>>>>> Stashed changes
    XHR.responseType = "json";
    XHR.send(formData);
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);