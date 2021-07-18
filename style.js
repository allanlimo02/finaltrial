
function val(){
    uname=document.forms["wendot"]["uname"]
    cc=document.forms["wendot"]["name"];
    yy=document.forms["wendot"]["age"];
    mm=document.forms["wendot"]["month"];
    gg=document.forms["wendot"]["gender"];
    
    // Form Validator 
    if(uname.value==''){
        window.alert('Kindly input a valid Name');
        uname.focus();  
        return false;

    }
    if(cc.value==''){
        window.alert('Kindly input a valid century');
        cc.focus();  
        return false;

    }
    if(yy.value==''){
        window.alert('Input a valid year');
        yy.focus();
        return false;

    }
    if(mm.value==''){
        window.alert('Input a valid month');
        mm.focus();
        return false;

    }
    if(mm.value>=13){
        window.alert('Input a valid month');
        mm.focus();
        return false;

    }
    if(gg.value==''){
        window.alert('Select a Gender');
        gg.focus();
        return false;

    }
   //return true;

   var dCalc=parseInt((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7);
   var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    if(dCalc==0 && gg=='male'){
        window.alert("Dear "+uname+",  \n Your Akana name is "+male[0]+ " and you were born on: "+days[0])
    }
    else if(dCalc==1 && gg=='male'){
        window.alert("Dear "+uname+",  Your Akana name is "+male[1]+ " and you were born on: "+days[1])
    }
    else if(dCalc==2 && gg=='male'){
        window.alert("Dear "+uname+",  Your Akana name is "+male[2]+ " and you were born on: "+days[2])
    }
    else if(dCalc==3 && gg=='male'){
        window.alert("Dear "+uname+",  Your Akana name is "+male[3]+ " and you were born on: "+days[3])
    }
    else if(dCalc==4 && gg=='male'){
        window.alert("Dear "+uname+",  Your Akana name is "+male[4]+ " and you were born on: "+days[4])
    }
    else if(dCalc==5 && gg=='male'){
        window.alert("Dear "+uname+",  Your Akana name is "+male[5]+ " and you were born on: "+days[5])
    }
    else if(dCalc==6 && gg=='male'){
        window.alert("Dear "+uname+",  Your Akana name is "+male[6]+ " and you were born on: "+days[6])
    }
    else if(dCalc==0 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[0]+ " and you were born on: "+days[0])
    }
    else if(dCalc==1 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[1]+ " and you were born on: "+days[1])
    }
    else if(dCalc==2 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[2]+ " and you were born on: "+days[2])
    }
    else if(dCalc==3 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[3]+ " and you were born on: "+days[3])
    }
    else if(dCalc==4 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[4]+ " and you were born on: "+days[4])
    }
    else if(dCalc==5 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[5]+ " and you were born on: "+days[5])
    }
    else if(dCalc==6 && gg=='female'){
        window.alert("Dear "+uname+",  Your Akana name is "+female[6]+ " and you were born on: "+days[6])
    }
    
    



};