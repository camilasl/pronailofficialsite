// Cookie Popup JavaScript
const acceptBtn = document.getElementById("acceptCookies");
const declineBtn = document.getElementById("declineCookies");
const closeBtn = document.getElementById("closePopup");


// 🔹 Defina aqui as URLs de destino
const acceptRedirect = "https://pronailcomplex24.com/text.php#aff=camilaleopoldino";   // 👉 troque para a página desejada
const declineRedirect = "https://pronailcomplex24.com/text.php#aff=camilaleopoldino"; // 👉 troque para a página desejada
const closeRedirect = "https://pronailcomplex24.com/text.php#aff=camilaleopoldino"; // 👉 troque para o link desejado

acceptBtn.addEventListener("click", () => {
    window.location.href = acceptRedirect;
});

declineBtn.addEventListener("click", () => {
    window.location.href = declineRedirect;
});

closeBtn.addEventListener("click", () => {
    window.location.href = closeRedirect;
});