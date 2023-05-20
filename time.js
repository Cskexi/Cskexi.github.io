

var h = Math.ceil(Math.random()*23);
var m = Math.ceil(Math.random()*59);
var s = Math.ceil(Math.random()*59);
var countdown = document.getElementById("countdown");
var v = 1;
var flag = 1;
timemove();
function startCountdown(){
    var btn = document.getElementById("btn01");
    
    clearTimeout(countdownTimeout);
    if(flag==1){
        clearTimeout(countdownTimeout);
        btn.innerHTML="Begin";
        flag=0;
    }
    else{
        if(h!=0||s!=0||m!=0){
            countdownTimeout = setTimeout(timemove,1000);
        }
        flag=1;
        btn.innerHTML="Stop";
    }
}
function speedCountdown(){
    var btn = document.getElementById("btn03");
    if(v==1||v==-1){
        v*=2;
        btn.innerHTML="2X";
    }
    else{
        v/=2;
        btn.innerHTML="1X";
    }

}
function reverseCountdown(){
    clearTimeout(countdownTimeout);
    var btn = document.getElementById("btn01");
    v*=-1;
    if(h!=0||s!=0||m!=0){
        countdownTimeout = setTimeout(timemove,1000);
        flag=1;
        btn.innerHTML="Stop";
    }
}
function timemove() {
    s+=v;
    if(s>59){
        s-=60;
        m+=1;
    }
    if(s<0){
        s+=60;
        m-=1;
    }
    if(m>59){
        m-=60;
        h+=1;
    }
    if(m<0){
        m+=60;
        h-=1;
    }
    var time = fn(h) + ":" + fn(m) +  ":" + fn(s) ;
    function fn(str){
        str <10?str="0"+str:str;
        return str;
    }
    if(h!=0||s!=0||m!=0){
        countdownTimeout = setTimeout(timemove,1000);
    }
    countdown.innerHTML =time;    
}