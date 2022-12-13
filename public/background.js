const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer.chrome.com/docs/webstore";

const funcExp = (tab) => {
  console.log("helllo");
  console.log(tab);
};

chrome.action.onClicked.addListener(async (tab) => {
  console.log("clicked");
});
