
chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
    const like_count = message.like_count;
    const comment_count = message.comment_count;
    if (message.action === 'startaction') {
        console.log("Hello ")
   await chrome.tabs.query({ active: true, currentWindow: true },async (tabs) => {
        const activeTab = tabs[0];
    await  chrome.tabs.sendMessage(activeTab.id, { action: 'clickButton' ,like_count:like_count, comment_count:comment_count});
      })
    }
  })
  chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {

    if (message.action === 'openfeed') {
   await chrome.tabs.query({ active: true, currentWindow: true },async (tabs) => {
        const activeTab = tabs[0];
        const url = 'https://linkedin.com/feed/'
    await  chrome.tabs.create({url,active:true});
      })
    }
  })