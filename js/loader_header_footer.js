document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return; // si pas de conteneur, on ne fait rien

    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(err => console.error('Erreur lors du chargement de l\'entete :', err))

    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return; // si pas de conteneur, on ne fait rien

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(err => console.error('Erreur lors du chargement du pied de page :', err));
});