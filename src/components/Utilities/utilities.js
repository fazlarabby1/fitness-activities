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

export {
    getPreviousTime,
    updateTime
}