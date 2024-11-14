document.addEventListener("DOMContentLoaded", function () {
  // Fetch and insert the popup HTML content
  fetch("popup.html")
      .then(response => response.text())
      .then(data => {
          document.body.insertAdjacentHTML("beforeend", data);

          // Check if the CSS is already added; if not, add it
          if (!document.querySelector("link[href='popup.css']")) {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = "popup.css";
              document.head.appendChild(link);
          }
      })
      .catch(error => console.error("Error loading popup:", error));
});

// Functions to control popup and navigation behavior
function openPopup() {
 
  document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}


function navigateTo(page) {
  window.location.href = page;
}
