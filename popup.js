const submit_btn = document.querySelector('.submit_btn');
const feed_btn = document.querySelector('.feed_btn');
if(!feed_btn)console.log("error");

const form_extension = document.querySelector('.extension-form');
async function getCurrentTab(){
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab.url.startsWith('https://www.linkedin.com/feed/')){
                document.querySelector('.extension-alert').style.display = "none";
                document.querySelector('.extension-form').style.display = "block";
                // document.querySelector('.feed_btn').style.display = "none";
    // const name = document.querySelector('.text-heading-xlarge inline t-24 v-align-middle break-words');
    // console.log(name);
     form_extension.addEventListener('submit',async function (event)  {
        event.preventDefault();
        const comment_count = document.getElementById('comments').value;
        const like_count = document.getElementById('likes').value;
        console.log(comment_count, like_count);
       await chrome.runtime.sendMessage({ action: "startaction" ,comment_count:comment_count,like_count:like_count});
      });
     
    //   feed_btn.addEventListener('click', () => {
    //     chrome.runtime.sendMessage({ action: "openfeed" });
        
    //   });

    }}
getCurrentTab(); 