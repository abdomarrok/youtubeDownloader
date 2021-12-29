s= document.createElement("script");
s.src=chrome.extension.getURL("src/youtubedl.js");

s.onload =function(){
    this.remove();
}
document.head.appendChild(s);

/*
let download = document.getElementById("Download");
  document.ready(function(){
    
    $(document.body).click(function(){
        console.log("ready");

  });
});

download.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: downloadmyV,
    });
  });
document.addEventListener("DOMContentLoaded", function (event) {
    var qurl=[];
    var i = 0;
    let btn =document.createElement("button");
    async function getq() {
        console.log("before loop");
        for (i=0; i<2 ;i++) {
            qurl[i]=window.ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[i].url;
        };
        console.log(" after loop");
        return await Promise.resolve("getq");
       
    };
    getq().then(qurl);

  
 function downloadmyV(){
    p=qurl;
    console.log(p[0]);
   

 }
    
 document.body.onload = addElement;
 
 function addElement () {   
     btn.className="style-scope yt-icon-button";
     btn.id="d_button";
     btn.style.background =  "rgba(255,0,0,0.6)";
     document.body.appendChild(btn);
 }



});
*/