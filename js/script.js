const form = document.querySelector("#commentForm");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const commentsList = document.querySelector("#commentsList");
const errorMessage = document.querySelector("#errorMessage");

// création d'un commentaire
function ajouterCommentaire(nom, message) {

    const commentCard = document.createElement("div");
    commentCard.classList.add("comment-item");

    const author = document.createElement("p");
    author.classList.add("comment-author");
    author.textContent = nom;

    const text = document.createElement("p");
    text.classList.add("comment-text");
    text.textContent = message;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "🗑️ Supprimer";

    deleteButton.addEventListener("click", function () {
        commentCard.remove();
    });

    commentCard.appendChild(author);
    commentCard.appendChild(text);
    commentCard.appendChild(deleteButton);

    commentsList.appendChild(commentCard);
}

// Commentaires affichés 
ajouterCommentaire("Téo", "Superbe recette !");
ajouterCommentaire("Léa", "Test de commentaire");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    if (name.length < 2) {
        errorMessage.textContent =
            "Le nom doit contenir au minimum 2 caractères.";
        errorMessage.style.display = "block";
        return;
    }

    if (comment.length < 10) {
        errorMessage.textContent =
            "Le commentaire doit contenir au minimum 10 caractères.";
        errorMessage.style.display = "block";
        return;
    }

    ajouterCommentaire(name, comment);

    form.reset();
});