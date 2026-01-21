const form = document.querySelector(".formulaire");
const prenom = document.querySelector("#prenom");
const nom = document.querySelector("#nom");
const sujet = document.querySelector("#sujet");
const message = document.querySelector("#message");

form.addEventListener("submit", function (e){
    e.preventDefault();

    if (
    prenom.value === ""||
    nom.value === "" ||
    sujet.value === "" ||
    message.value === ""
) {
    alert("Veuillez remplir tous les champs.");
    return;
}
alert("Message envoyé avec succès !");
    form.reset();
});
