// Create the iframe element
var iframe = document.createElement("iframe");
iframe.src = "https://mystifying-goodall-147690.netlify.app/";
iframe.width = 500;
iframe.height = 500;

// Create the button element
var button = document.createElement("button");
button.textContent = "Make iframe fullscreen";

// Attach a click event listener to the button
button.addEventListener("click", function() {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  }
});

// Add the iframe and button elements to the document body
document.body.appendChild(iframe);
document.body.appendChild(button);
