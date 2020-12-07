// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let rocketObj = document.getElementById('rocket');
    rocketObj.style.position = 'absolute';
    rocketObj.style.left = '0px';
    rocketObj.style.bottom = '0px';
    let rocketMove='0px';
    let status=document.getElementById("flightStatus");
    let takeOff = document.getElementById("takeoff");
    let shuttlebackGround=document.getElementById("shuttleBackground");
    let shuttleHeight=document.getElementById("spaceShuttleHeight");
    let land=document.getElementById("landing");
    let abort=document.getElementById("missionAbort");
    let up=document.getElementById("up");
    let down=document.getElementById("down");
    let right=document.getElementById("right");
    let left=document.getElementById("left");

    




    takeOff.addEventListener("click", ()=> {
        message = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (message) {
            shuttlebackGround.style.backgroundColor="blue";
            status.innerHTML = "Shuttle in flight.";
            rocketObj.style.bottom = '0px';
            shuttleHeight.innerHTML = "10000";
        }
        right.addEventListener("click", function(){
            rocketMove = parseInt(rocketObj.style.left) + 10 + "px";
            rocketObj.style.left = rocketMove;
        });
        left.addEventListener("click", function(){
            rocketMove = parseInt(rocketObj.style.left) - 10 + "px";
            rocketObj.style.left = rocketMove;
        });
        down.addEventListener("click", function(){
            rocketMove = parseInt(rocketObj.style.bottom) - 10 + "px";
            rocketObj.style.bottom = rocketMove;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        });
        up.addEventListener("click", function(){
            rocketMove = parseInt(rocketObj.style.bottom) + 10 + "px";
            rocketObj.style.bottom = rocketMove;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
            if(shuttleHeight.innerHTML==330000){
                shuttlebackGround.style.backgroundColor="green";
                shuttleHeight.innerHTML = "0";
                rocketObj.style.bottom = '0px';
            }
        });
    });
    land.addEventListener("click",()=>{
        window.alert("The shuttle is landing. Landing gear engaged.");
        shuttlebackGround.style.backgroundColor="green";
        status.innerHTML = "The shuttle has landed.";
        rocketObj.style.bottom = '0px';
        shuttleHeight.innerHTML = "0";
    });
    abort.addEventListener("click",()=>{
        message = window.confirm("Confirm that you want to abort the mission.");
        if (message) {
            shuttlebackGround.style.backgroundColor="green";
            status.innerHTML = "Mission aborted.";
            rocketObj.style.bottom = '0px';
            shuttleHeight.innerHTML = "0";;
        }
    });
   
});
