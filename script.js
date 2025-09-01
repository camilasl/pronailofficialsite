// Cookie Popup JavaScript
const acceptBtn = document.getElementById("acceptCookies");
const declineBtn = document.getElementById("declineCookies");
const closeBtn = document.getElementById("closePopup");

// 🔹 URLs de destino
const acceptRedirect = "https://pronailcomplex24.com/text.php#aff=camilaleopoldino";
const declineRedirect = "https://pronailcomplex24.com/text.php#aff=camilaleopoldino";
const closeRedirect = "https://pronailcomplex24.com/text.php#aff=camilaleopoldino";

// 🔹 Função genérica para reportar evento e redirecionar
function reportAndRedirect(eventName, redirectUrl) {
    gtag('event', eventName, {
        'send_to': 'AW-17468832331', // sua tag principal
        'event_callback': function() {
            window.location.href = redirectUrl;
        }
    });

    // fallback caso o callback não rode
    setTimeout(() => window.location.href = redirectUrl, 1000);
}

// 🔹 Eventos dos botões
acceptBtn.addEventListener("click", () => {
    reportAndRedirect("accept_cookies", acceptRedirect);
});

declineBtn.addEventListener("click", () => {
    reportAndRedirect("decline_cookies", declineRedirect);
});

closeBtn.addEventListener("click", () => {
    reportAndRedirect("close_cookie_popup", closeRedirect);
});
