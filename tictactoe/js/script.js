var counter=0;
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;

function windowload(){
    document.getElementById("playerwin").style.display="none";
}


function boxfunction(z){
  
    if(counter==0){
        document.getElementById(z).innerHTML = "O";
        counter=1;
    }
    else{
        document.getElementById(z).innerHTML = "X";
        counter=0;
    }

    a=document.getElementById("box0").innerHTML;
    b=document.getElementById("box1").innerHTML;
    c=document.getElementById("box2").innerHTML;
    d=document.getElementById("box3").innerHTML;
    e=document.getElementById("box4").innerHTML;
    f=document.getElementById("box5").innerHTML;
    g=document.getElementById("box6").innerHTML;
    h=document.getElementById("box7").innerHTML;
    i=document.getElementById("box8").innerHTML;

    if((a==b && b==c && a!="" && b!="" && c!="") || (d==e && e==f && d!="" && e!="" && f!="")||(g==h && h==i && g!="" && h!="" && i!="")||(a==d && d==g && a!="" && d!="" && g!="")||(b==e && e==h && b!="" && e!="" && h!="")||(c==f && f==i && c!="" && f!="" && i!="")||(a==e && e==i && a!="" && e!="" && i!="")||(c==e && e==g && c!="" && e!="" && g!="")){
        if(counter==0){
            document.getElementById("playerwin").innerHTML="Player X Wins";
            document.getElementById("playerwin").style.display="block";

            if(a==b && b==c && a!=""){
                document.getElementById("box0").style.backgroundColor="teal";
                document.getElementById("box1").style.backgroundColor="teal";
                document.getElementById("box2").style.backgroundColor="teal";
            }
            if(d==e && e==f && d!=""){
                document.getElementById("box3").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box5").style.backgroundColor="teal";
            }
            if(g==h && h==i && g!=""){
                document.getElementById("box6").style.backgroundColor="teal";
                document.getElementById("box7").style.backgroundColor="teal";
                document.getElementById("box8").style.backgroundColor="teal";
            }
            if(a==d && d==g && a!=""){
                document.getElementById("box0").style.backgroundColor="teal";
                document.getElementById("box3").style.backgroundColor="teal";
                document.getElementById("box6").style.backgroundColor="teal";
            }
            if(b==e && e==h && b!=""){
                document.getElementById("box1").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box7").style.backgroundColor="teal";
            }
            if(c==f && f==i && c!=""){
                document.getElementById("box2").style.backgroundColor="teal";
                document.getElementById("box5").style.backgroundColor="teal";
                document.getElementById("box8").style.backgroundColor="teal";
            }
            if(a==e && e==i && a!=""){
                document.getElementById("box0").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box8").style.backgroundColor="teal";
            }
            if(c==e && e==g && c!=""){
                document.getElementById("box2").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box6").style.backgroundColor="teal";
            }
        }
        else{
            document.getElementById("playerwin").innerHTML="Player O Wins";
            document.getElementById("playerwin").style.display="block";

            if(a==b && b==c && a!=""){
                document.getElementById("box0").style.backgroundColor="teal";
                document.getElementById("box1").style.backgroundColor="teal";
                document.getElementById("box2").style.backgroundColor="teal";
            }
            if(d==e && e==f && d!=""){
                document.getElementById("box3").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box5").style.backgroundColor="teal";
            }
            if(g==h && h==i && g!=""){
                document.getElementById("box6").style.backgroundColor="teal";
                document.getElementById("box7").style.backgroundColor="teal";
                document.getElementById("box8").style.backgroundColor="teal";
            }
            if(a==d && d==g && a!=""){
                document.getElementById("box0").style.backgroundColor="teal";
                document.getElementById("box3").style.backgroundColor="teal";
                document.getElementById("box6").style.backgroundColor="teal";
            }
            if(b==e && e==h && b!=""){
                document.getElementById("box1").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box7").style.backgroundColor="teal";
            }
            if(c==f && f==i && c!=""){
                document.getElementById("box2").style.backgroundColor="teal";
                document.getElementById("box5").style.backgroundColor="teal";
                document.getElementById("box8").style.backgroundColor="teal";
            }
            if(a==e && e==i && a!=""){
                document.getElementById("box0").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box8").style.backgroundColor="teal";
            }
            if(c==e && e==g && c!=""){
                document.getElementById("box2").style.backgroundColor="teal";
                document.getElementById("box4").style.backgroundColor="teal";
                document.getElementById("box6").style.backgroundColor="teal";
            }
        }
    }
    if(a!="" && b!="" && c!="" && d!="" && e!="" && f!="" && g!="" && h!="" && i!="" && ((a!=b && b!=c)&&(d!=e && e!=f)&&(g!=h && h!=i)&&(a!=d && d!=g)&&(b!=e && e!=h)&&(c!=f && f!=i)&&(a!=e && e!=i)&&(c!=e && e!=g))){

        document.getElementById("playerwin").innerHTML="It's a TIE";
        document.getElementById("playerwin").style.display="block";

    }

}

function resetbackup(){

    //there is some background hover color issues in box elements
    document.getElementById("box0").innerHTML="";
    document.getElementById("box1").innerHTML="";
    document.getElementById("box2").innerHTML="";
    document.getElementById("box3").innerHTML="";
    document.getElementById("box4").innerHTML="";
    document.getElementById("box5").innerHTML="";
    document.getElementById("box6").innerHTML="";
    document.getElementById("box7").innerHTML="";
    document.getElementById("box8").innerHTML="";

    document.getElementById("playerwin").style.display="none";

    document.getElementById("box0").style.backgroundColor="black";
    document.getElementById("box1").style.backgroundColor="black";
    document.getElementById("box2").style.backgroundColor="black";
    document.getElementById("box3").style.backgroundColor="black";
    document.getElementById("box4").style.backgroundColor="black";
    document.getElementById("box5").style.backgroundColor="black";
    document.getElementById("box6").style.backgroundColor="black";
    document.getElementById("box7").style.backgroundColor="black";
    document.getElementById("box8").style.backgroundColor="black";

}

function reset1(){
 window.location.reload(false);

}