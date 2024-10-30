// Get the elements with class="column"
var elements = document.getElementsByClassName("column-pub");
//
var pubTitle = document.querySelectorAll(".publicat-title");
var emPub = document.querySelectorAll(".em-pub");
var deActTitle = document.querySelectorAll(".deact");
var rowPub = document.querySelectorAll(".row-pub");
// Declare a loop variable
var i;
// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "48%";
      elements[i].style.backgroundColor = "#F2F2F2";
      elements[i].style.border = "unset";
    }

    rowPub.forEach(rowPubFunc);
    function rowPubFunc(item){
        item.style.display = "flex";
    }
    
    pubTitle.forEach(pubTitleFunc);
    function pubTitleFunc(item){
        item.className = "publicat-title text-primary font-w";
    }

    emPub.forEach(emPubFunc);
    function emPubFunc(item){
        item.className = "em-pub text-primary font-w";
    }

    deActTitle.forEach(deActTitleFunc);
    function deActTitleFunc(item){
        item.className = "publicat-title deact text-dark font-w";
    }
}

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "100%";
      elements[i].style.backgroundColor = "#FFF";
      elements[i].style.borderTop = "solid 1px lightgray";
    }

    rowPub.forEach(rowPubFunc);
    function rowPubFunc(item){
        item.style.display = "block";
    }

    pubTitle.forEach(pubTitleFunc);
    function pubTitleFunc(item){
        item.className = "publicat-title";
    }

    emPub.forEach(emPubFunc);
    function emPubFunc(item){
        item.className = "em-pub";
    }

    deActTitle.forEach(deActTitleFunc);
    function deActTitleFunc(item){
        item.className = "publicat-title deact text-secondary";
    }
}


