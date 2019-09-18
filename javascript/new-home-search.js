document.getElementById("HomeSearchBtnWidget").onclick = function (event) {
  var searchText = document.getElementById("SearchTextWidget").value;
  if (searchText === "" || typeof (searchText) == "undefined") {
    document.querySelector("#home-search-form #SearchValidationError").style.display = 'block';
    window.event.preventDefault();
  } else {
    document.querySelector("#home-search-form #SearchValidationError").style.display = 'none';
  }
};