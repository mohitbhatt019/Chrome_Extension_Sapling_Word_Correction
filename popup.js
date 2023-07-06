// document.addEventListener("DOMContentLoaded", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       { action: "getTypedText" },
//       function (response) {
//         if (response && response.typedText) {
//           var typedTextDiv = document.getElementById("typedText");
//           typedTextDiv.innerText = response.typedText;



//           var apiKey = '4KGL20YR745CITG46BNBM1V4F2T8B651';
//           var text = response.typedText;

//           fetch('https://api.sapling.ai/api/v1/edits', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               key: apiKey,
//               text: text,
//               session_id: 'demo',
//             }),
//           })
//             .then(function (response) {
//               // document.getElementById("responseText").replaceWith("response");
//               localStorage.setItem("sapling", "112");
//               return response.json();
//             })
//             .then(function (data) {
//               var edits = data.edits;
//               if (edits) {
//                 var firstEdit = edits;
//                 var replacement = firstEdit;
//                 var responseTextDiv = document.getElementById("responseText");
//                 responseTextDiv.innerText = edits;
//               } else {
//                 var responseTextDiv = document.getElementById("responseText");
//                 responseTextDiv.innerText = "No edits found.";
//               }
//             })
//             .catch(function (error) {
//               document.getElementById("responseText").innerText = "Error: " + error.message;
//             });
//         }
//       }
//     );
//   });
// });




document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "getTypedText" },
      function (response) {
        if (response && response.typedText) {
          var typedTextDiv = document.getElementById("typedText");
          typedTextDiv.innerText = response.typedText;

          var apiKey = "4KGL20YR745CITG46BNBM1V4F2T8B651";
          var text = response.typedText;

          fetch("https://api.sapling.ai/api/v1/edits", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              key: apiKey,
              text: text,
              session_id: "demo",
            }),
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              var edits = data;
              if (edits) {
                //alert(JSON.stringify(edits.edits[0]));
                var dataa=JSON.stringify(edits.edits[0])
               
                replacementData=JSON.parse(dataa)
                //alert(replacementData.replacement)
                var responseTextDiv = document.getElementById("responseText");
                responseTextDiv.innerText = "Corrected Word: " + replacementData.replacement;
               // console.log(edits);
              } else {
                var responseTextDiv = document.getElementById("responseText");
                responseTextDiv.innerText = "No edits found.";
              }
            })
            .catch(function (error) {
              var responseTextDiv = document.getElementById("responseText");
              responseTextDiv.innerText = "Error: " + error.message;
            });
        }
      }
    );
  });
});
