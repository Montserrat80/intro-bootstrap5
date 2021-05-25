//ini toast code
var toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl);
});
toast = toastList[0];
const liveToastBtn = document.getElementById("liveToastBtn");
liveToastBtn.addEventListener("click", (e) => {
  toast.show();
});
//end toast code

//ini tooltip code
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//end tooltip code

//ini Buttons - Alert
const alertContainer = document.getElementById("alertContainer");
const btnAlert1 = document.getElementById("btnAlert1");
const btnAlert2 = document.getElementById("btnAlert2");

btnAlert1.addEventListener("click", (e) =>{
  let divContainer = document.createElement("div");
  divContainer.classList.add("alert");
  divContainer.classList.add("alert-primary");
  divContainer.classList.add("mt-5");
  divContainer.setAttribute("role","alert");
  divContainer.innerHTML = "A simple primary alert—check it out! ";
  alertContainer.innerHTML = "";
  alertContainer.appendChild(divContainer);
})

btnAlert2.addEventListener("click", (e) =>{
  let divContainer = document.createElement("div");
  divContainer.classList.add("alert");
  divContainer.classList.add("alert-warning");
  divContainer.classList.add("alert-dismissible");
  divContainer.classList.add("fade");
  divContainer.classList.add("show");
  divContainer.classList.add("mt-5");
  divContainer.setAttribute("role","alert");
  divContainer.innerHTML = "<strong>Holy guacamole!</strong> You should check in on some of those fields below.";
  let btn = document.createElement("button");
  btn.classList.add("btn-close");
  btn.setAttribute("data-bs-dismiss","alert");
  btn.setAttribute("aria-label","Close");
  alertContainer.innerHTML = "";
  divContainer.appendChild(btn);
  alertContainer.appendChild(divContainer);
})
//end Buttons - Alert