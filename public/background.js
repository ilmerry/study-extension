// const extensions = "https://developer.chrome.com/docs/extensions";
// const webstore = "https://developer.chrome.com/docs/webstore";

// const funcExp = (tab) => {
//   console.log("helllo");
//   console.log(tab);
// };

// chrome.action.onClicked.addListener(async (tab) => {
//   console.log("clicked");
// });

// chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//   // 2. A page requested user data, respond with a copy of `user`
//   // if (request.greeting === "article") {
//   //   await chrome.action.setPopup({
//   //     popup: "index.html",
//   //   });
//   // } else {
//   //   await chrome.action.setPopup({
//   //     popup: "popup.html",
//   //   });
//   //   sendResponse({ farewell: "goodbye" });
//   //
//   await chrome.action.setPopup({
//     popup: "index.html",
//   });
//   setTimeout(async () => {
//     await chrome.action.setPopup({
//       popup: "popup.html",
//     });
//   }, 3000);
// });

// chrome.action.onClicked.addListener(async () => {
//   setTimeout(async () => {
//     await chrome.action.setPopup({
//       popup: "index.html",
//     });
//   }, 1000);
//   setTimeout(async () => {
//     await chrome.action.setPopup({
//       popup: "popup.html",
//     });
//   }, 5000);
// });
chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  const [tob] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  if (tob.url.includes("musinsa")) {
    chrome.action.setPopup({
      popup: "index.html",
    });
  } else {
    chrome.action.setPopup({
      popup: "popup.html",
    });
  }
});
