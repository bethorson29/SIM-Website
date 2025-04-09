
(function waitForContainer() {
  const container = document.getElementById("calendar-embed-container");
  if (container) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://s3-us-west-2.amazonaws.com/assets.webconnex.com/widgets/calendar/widget.html?source=https://api.webconnex.com/v1/widgets/38cb0d13a36df09adffb5d0b6e3bc1c4?cache=no";
    iframe.style.width = "100%";
    iframe.style.height = "800px";
    iframe.title = "widget";
    iframe.frameBorder = "0";
    container.appendChild(iframe);
  } else {
    setTimeout(waitForContainer, 300);
  }
})();
