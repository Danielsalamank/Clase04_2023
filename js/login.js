

function login(user, password) {
    if (user === "dsalamanca@contextcompany.com.co" || user === "3144363062" && password == "123456789") {
        redirect("tablas.html");
    } else {
        redirect("error.html");
    }
}

function redirect(pagina) {
    window.location.href = pagina;
}

function limpiarFormulario() {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}