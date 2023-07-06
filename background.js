chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getTypedText") {
    sendResponse({ typedText: getTypedText() });
  }
});

function getTypedText() {
  var typedText = "";

  document.addEventListener("input", function (event) {
    var target = event.target;
    if (
      target.tagName.toLowerCase() === "textarea" ||
      target.tagName.toLowerCase() === "input"
    ) {
      typedText += target.value + " ";
    }
  });

  return typedText.trim();
}
