chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getTypedText") {
    var typedText = "";

    var elements = document.querySelectorAll(
      'textarea, input[type="text"], input[type="password"]'
    );
    elements.forEach(function (element) {
      typedText += element.value + " ";
      console.log(typedText);
    });

    sendResponse({ typedText: typedText.trim() });
  }
});
