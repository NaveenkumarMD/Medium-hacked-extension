

const button=document.getElementById('hack-button');
button.addEventListener('click',async function(){
    let url=""
    await chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        url=tabs[0].url;
    })
    console.log(url);
    chrome.windows.getAll({populate: false}, function(windows) {
        for(let window of windows){
            if (window.incognito) {
                chrome.tabs.create({url:url,windowId:window.id});
                return
            }
        }
        chrome.windows.create({url:url,incognito:true});
    })
})