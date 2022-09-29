const getPreviousTime = ()=>{
    const exerciseTimeString = document.getElementById("exercise-time").innerText;
    const exerciseTime = parseInt(exerciseTimeString);
    // console.log(exerciseTime);
    return exerciseTime;
}

const updateTime = (newTime) =>{
    const previousTime = document.getElementById("exercise-time");
    previousTime.innerText = newTime;
}

const addBreakTimeToLS = (addTime) =>{
    const breakTime = localStorage.getItem("break-time");
    if(breakTime){
        localStorage.removeItem(breakTime);
    }
    else{
        localStorage.setItem("break-time", JSON.stringify(addTime));
    }
}

const getPreviousBreakTime = () => {
    const previousBreak = document.getElementById("exercise-break").innerText;
    previousBreak.innerText = '';
    const newBreak = localStorage.getItem("break-time");
    previousBreak.innerText = newBreak;
}
export {
    getPreviousTime,
    updateTime,
    addBreakTimeToLS,
    getPreviousBreakTime
}