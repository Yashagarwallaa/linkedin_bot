
async function sleep(timeInS) {
    console.log("Waiting!!");
	await new Promise((resolve) => setTimeout(resolve, timeInS * 1000))
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
    }
});

chrome.runtime.onMessage.addListener( async(message, sender, sendResponse) => {
    if (message.action === 'clickButton') {
        var j =0;
        const like_count = message.like_count;
        const comment_count = message.comment_count;
        console.log(like_count ,comment_count);
      console.log("hello form contenscript.js");
    for (var i=0;i<Math.max(comment_count,like_count);i++){
    window.scrollBy({
        top: 9000000000000000 , 
        behavior: 'smooth'
      });
      await sleep(2);
    }
      await sleep(10);
    const commentbtn = document.querySelectorAll('.comment-button');
    const likebutton = document.querySelectorAll('.react-button__trigger');
   
    var commentArray = Array.from(commentbtn); 
    var likeArray = Array.from(likebutton);
    console.log(commentArray[j], commentArray);
    console.log(likeArray);
//clicking on all like button
    for ( var i = 1;i<=like_count;i++){
        await likeArray[j].click();
        console.log("Like Button clicked");
        j++;
}
j=0;
// clicking on all comment buttons
for ( var i  = 1;i<=comment_count;i++){
    await commentArray[j].click();
    console.log("Comment button clicked");
    j++;
}
//selecting the comment box array
j=0;
const commentbox = document.querySelectorAll('.comments-comment-box');
var commentboxArray = Array.from(commentbox);
console.log(commentboxArray);
//commenting on each post
for ( var i  = 1;i<=comment_count;i++){
    var commentbox_curr = commentboxArray[j];
    j++;
    await sleep(2);
    var paragraph = commentbox_curr.getElementsByTagName('p')[0];
    await sleep(2);
    var strongElement = document.createElement('strong');
    await sleep(1);
    strongElement.classList.add('ql-hashtag'); 
    await sleep(1);
    strongElement.setAttribute('data-test-ql-hashtag', 'true');
    await sleep(1);
strongElement.textContent = '#cfbr';
paragraph.appendChild(strongElement);
await sleep(2);
var post_btn = document.querySelector('.comments-comment-box__submit-button');
await sleep(2);
await post_btn.click();
console.log(j , "comment(s) posted");
}
console.log("Done Succesfully");
}
});