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

    function getgamelog(file, x) {
        console.log(file);
        console.log(x);
        var gamepos = x.indexOf('game');
        var gameid = x.substring(gamepos);
        console.log(gameid);
        getfile1(file,gameid);
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

    function getexternal(stattype, teamname, gameid) {
        console.log(stattype, teamname);
        var teamnameespn = teamname;
        if(teamnameespn == "NOP")
            teamnameespn == "NO";
        else if(teamnameespn == "UTA")
            teamnameespn == "UTAH";
        if(stattype=="DEP")
            url = "https://www.espn.com/nba/team/depth/_/name/" + teamnameespn.toLowerCase();
        else if(stattype=="INJ")
            url = "https://www.espn.com/nba/team/injuries/_/name/" + teamnameespn.toLowerCase();
        console.log(url);
        window.open(url, '_blank').focus();
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
