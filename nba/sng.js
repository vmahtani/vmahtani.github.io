    function toggle(callerid) {
        var togglediv = document.getElementById(callerid+'div');
        var togglelabel = document.getElementById(callerid);
        if(togglediv.style.display=='block')
        {
            togglediv.style.display='none';
            togglelabel.innerText = "+" + togglelabel.innerText.substring(1);
        }
        else
        {
            togglediv.style.display='block';
            togglelabel.innerText = "-" + togglelabel.innerText.substring(1);
        }    
    }
    async function getfile(file, gameid) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
        //document.getElementById("statsdiv").innerHTML = myText;
        document.getElementById("statsdiv" + gameid).innerHTML = myText;
      }

    function getfile1(file,gameid) {
        file = "files/" + file + ".html";
        console.log(file);
        getfile(file,gameid);
    }
    function getimage(file,gameid) {
        file = "files/" + file + ".png";
        filetag = "<img src='" + file + "'>";
        document.getElementById("statsdiv" + gameid).innerHTML = filetag;
    }

    function getdepth2(file,gameid) {
        file = "files/" + file + ".png";
        filetag = "<img src='" + file + "'>";
        var statsdiv = document.getElementById("statsdiv" + gameid);
        statsdiv.innerHTML = "";
        var imgnode = document.createElement("IMG");
        imgnode.src = file;
        statsdiv.appendChild(imgnode);
    }
