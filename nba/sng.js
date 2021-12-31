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
    function getstats()
    {
        let game = document.getElementById("games").value;
        let stattype = document.getElementById("stattype").value;
        console.log(game, stattype);
        let awayteam = game.substring(0,3);
        let hometeam = game.substring(3);
        let team,y;
        console.log(awayteam,hometeam);

        let z = stattype.substring(0,4);
        if(z == "AWAY" || z == "HOME") {
            if(z=="AWAY")
                team = awayteam;
            else
                team = hometeam;
            file = "BOX" + stattype.substring(4) + team;
            console.log(file);            
        }
        else if (z=="AVG3" || z=="AVG5") {
            y = stattype.substring(4);
            if(y=="AWAY")
                team = awayteam;
            else
                team = hometeam;
            file = z + team;
            console.log(file);            
        }
        else if (z=="TEAM") {
            console.log("TEAM");
            file = awayteam + hometeam;
            console.log(file);            
        }
        file = "files/" + file + ".html";
        console.log(file);
        getfile(file);
    }

    function getfile1(file,gameid) {
        file = "files/" + file + ".html";
        console.log(file);
        getfile(file,gameid);
    }
