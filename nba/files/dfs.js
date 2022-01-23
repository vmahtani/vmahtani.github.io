<script>
    var lineup={ 
     "PG1":["",""], 
     "PG2":["",""], 
     "SG1":["",""], 
     "SG2":["",""], 
     "SF1":["",""], 
     "SF2":["",""], 
     "PF1":["",""], 
     "PF2":["",""], 
     "C":  ["",""] 
    };

     function updatelineup(pos, name, salary) {
        if(pos!="C")
        {
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
     }
</script>