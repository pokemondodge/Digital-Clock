let hour=document.getElementById('h')
let minutes=document.getElementById('m')
let seconds=document.getElementById('s')
let meridian=document.getElementById('merd')


//reinitialized updated

setInterval(()=>{
    
    let date=new Date()//----> minute mistakes be careful, this line must be declared inside to refresh every time bcoz time get updated and object is made only once if written outside. Object created every time is static 
    if(date.getHours()<10)
    hour.innerText="0"+date.getHours()+":" 
    else
    hour.innerText=date.getHours()+":"
    if(date.getUTCMinutes()<10)
    minutes.innerText="0"+date.getUTCMinutes()+":"
    else
    minutes.innerText=date.getUTCMinutes()+":"
    if(date.getSeconds()<10)
    seconds.innerText="0"+date.getSeconds() // or seconds.innerText=`0+${date.getSeconds()}`
    else
    seconds.innerText=date.getSeconds()
    if(date.getHours()>=12)
    meridian.innerText="PM"
    else
    meridian.innerText="AM"
},1000)