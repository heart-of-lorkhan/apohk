document.addEventListener("DOMContentLoaded", function () {
  var modal = document.querySelector(".flagday-modal");
  var modalClose = document.querySelector(".flagday-modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
