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
    localStorage.setItem("break-time", JSON.stringify(addTime));
}

const getStoredBreakTimeFromLS = ()=>{
    const breakTime = localStorage.getItem("break-time");
    if(!breakTime){
        return 0;
    }
    else{
        return breakTime;
    }
}

const setBreakTimeFromLS = (storedTime) =>{
    document.getElementById("exercise-break").innerText = storedTime;
}

const updateBreakTime = () => {
    const newBreak = JSON.parse(getStoredBreakTimeFromLS());
    let previousBreak = document.getElementById("exercise-break");
    previousBreak.innerText = newBreak;
    
}
export {
    getPreviousTime,
    updateTime,
    addBreakTimeToLS,
    getStoredBreakTimeFromLS,
    setBreakTimeFromLS,
    updateBreakTime
}