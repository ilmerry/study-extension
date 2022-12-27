// const tabs = await chrome.tabs.query({
//   url: [
//     "https://developer.chrome.com/docs/webstore/*",
//     "https://developer.chrome.com/docs/extensions/*",
//     "https://www.musinsa.com/*",
//   ],
// });

// const collator = new Intl.Collator();
// tabs.sort((a, b) => collator.compare(a.title, b.title));

// const template = document.getElementById("li_template");
// const elements = new Set();
// for (const tab of tabs) {
//   const element = template.content.firstElementChild.cloneNode(true);

//   const title = tab.title.split("-")[0].trim();
//   const pathname = new URL(tab.url).pathname.slice("/docs".length);

//   element.querySelector(".title").textContent = title;
//   element.querySelector(".pathname").textContent = pathname;
//   element.querySelector("a").addEventListener("click", async () => {
//     // need to focus window as well as the active tab
//     await chrome.tabs.update(tab.id, { active: true });
//     await chrome.windows.update(tab.windowId, { focused: true });
//   });

//   elements.add(element);
// }
// document.querySelector("ul").append(...elements);

// const button = document.querySelector("button");
// button.addEventListener("click", async () => {
//   const tabIds = tabs.map(({ id }) => id);
//   const group = await chrome.tabs.group({ tabIds });
//   await chrome.tabGroups.update(group, { title: "DOCS" });
// });

// const btn = document.querySelector("button");

// const onClickArchive = () => {
//   console.log(document.querySelector("."));
// };

// btn.addEventListener("click", onClickArchive);

// (async () => {
//   const response = await chrome.runtime.sendMessage({ greeting: "hello" });
//   // do something with response here, not outside the function
//   console.log(response);
// })();

// const article = document.querySelector("article");

// // chrome.action.onClicked.addListener(async () => {
// //   const [tab] = await chrome.tabs.query({
// //     active: true,
// //     lastFocusedWindow: true,
// //   });
// //   const response = await chrome.tabs.sendMessage(tab.id, {
// //     greeting: "hello",
// //   });
// //   console.log(response);
// //   await chrome.runtime.sendMessage({ greeting: "hello" });
// // });

// article.addEventListener(
//   "click",
//   (async () => {
//     // const [tab] = await chrome.tabs.query({
//     //   active: true,
//     //   lastFocusedWindow: true,
//     // });
//     const response = await chrome.runtime.sendMessage({
//       greeting: "hello",
//     });
//     console.log(response);
//   })()
// );

const button = document.querySelector(".button");

const onClickBtn = () => {
  window.open("https://github.com/ilmerry", "_blank").focus();
};

button.addEventListener("click", onClickBtn);
