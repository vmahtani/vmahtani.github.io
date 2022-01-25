    function toggle(callerid) {
        var togglediv = document.getElementById(callerid+'div');
        var togglelabel = document.getElementById(callerid);
        if(togglediv.style.display=='block')
        {
            cleargame(callerid);
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
        gameinfo = x.parentElement.parentElement.parentElement.parentElement.id
        var gamepos = gameinfo.indexOf('game');
        var gameid = gameinfo.substring(gamepos);
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

    function cleargame(gameid) {
        document.getElementById("statsdiv" + gameid).innerHTML = "";
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

    var lineup={ 
        "PG1":["",0], 
        "PG2":["",0], 
        "SG1":["",0], 
        "SG2":["",0], 
        "SF1":["",0], 
        "SF2":["",0], 
        "PF1":["",0], 
        "PF2":["",0], 
        "C":  ["",0] 
       };
   
       function updatelineup(pos, name, salary) {
           if(pos!="C") {
               pos1 = pos + "1";
               pos2 = pos + "2";
               console.log(lineup[pos1]);
               if(lineup[pos1][0]=="")
                   lineup[pos1] = [name,salary];
               else
                   lineup[pos2] = [name,salary];
           }
           else
               lineup[pos] = [name,salary];
   
           console.log(lineup);
           writelineupdiv();
       }
       function cleardfskey(key){
           lineup[key][0] = "";
           lineup[key][1] = 0;
           writelineupdiv();
       }
       function writelineupdiv()
       {
           var dfslineuptext = "";
           var totalsalary = 0; 
           for (var key in lineup){
                spantext = "<span id=\"dfs_x\" onclick=\"cleardfskey('"+ key + "')\")>X</span>"
                dfslineuptext += "<h3>" + key + " " + lineup[key][0] + " " + lineup[key][1] + " " + spantext + "</h3>" ;
                totalsalary += parseInt(lineup[key][1]);
                //console.log( key, dict[key] );
           }
           dfsdiv = document.getElementById('dfslineupdiv');
           dfsdiv.innerHTML = dfslineuptext + "<h3>" + totalsalary + "</h3>";
       }
       