function myFunction() {
    var x = document.getElementsByClassName("nav-link");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }