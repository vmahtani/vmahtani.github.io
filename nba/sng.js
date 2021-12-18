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

