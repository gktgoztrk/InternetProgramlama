function openRentForm(model) {
    window.location.href = "rent_form.html";
    localStorage.setItem("carModel", model);
}

window.onload = function() {
    var carModel = localStorage.getItem("carModel");
    if (carModel) {
        document.getElementById("carModel").textContent = carModel;
        localStorage.removeItem("carModel");
    }
}

window.onload = function() {
    var carModel = localStorage.getItem("carModel");
    if (carModel) {
        document.getElementById("carModel").textContent = carModel;
        localStorage.removeItem("carModel");
    }
    
}  
function openRentForm(model) {
    localStorage.setItem("carModel", model);
    window.location.href = "rent_form.html";
}

