
       function  myApplication(){

        function dwonloadVideo() {
             dl= document.getElementById("dropdown_id");
            console.log(dl.style.display==='');
           if (dl.style.display===''||dl.style.display === "none") {
                dl.style.display = "block";
                dl.style.marginTop="5%"
                dl.style.position = "absolute";
                dl.style.width = "200px";
                dl.style.height = "100px";
                dl.style.zIndex = "9999";
                dl.style.background = "white";
                console.log("am clicking");
            }else{
                dl.style.display = 'none';

            }
        }

        var conatainer = document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)");
        var btn = document.createElement("button");
        btn.className = "yt-simple-endpoint style-scope ytd-button-renderer";
        btn.setAttribute("role", "button");
        btn.id = "download_btn";
        btn.innerText = "Download";
        var dropdown = document.createElement("div");
        dropdown.id = "dropdown_id";

        conatainer.appendChild(dropdown);
        var dropList = document.createElement("ul");
        dropList.id="drop_list";
        dropdown.appendChild(dropList);
        conatainer.appendChild(btn);
        console.log("test");
        const c = ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats["length"];
        urls = ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats;
        console.log("test2" + urls);

        vedioUrl = {};
        for (i = 0; i < c-1; i++) {
           var temp= urls[i];
           var item =document.createElement("a");
           var str=(temp.itag).toString();
           console.log(temp.url);
           item.href=temp.url;
           item.innerHTML=str+"  ";
           dropList.appendChild(item);
            
        }
        
        btn.addEventListener("click", dwonloadVideo);
        console.log("test3" + vedioUrl);
        
    }
        
    document.onreadystatechange = function () {
     if (document.readyState === 'interactive' ||document.readyState === 'complete' ) {
                myApplication();
            }else{
                myApplication();
            }

          }