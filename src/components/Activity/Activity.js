import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Exercise from '../Exercise/Exercise';
import './Activity.css'

const Activity = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },
         [])
    return (
        <div className="activity">
            <div className="exercise-container mt-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 g-4">
                {
                   exercises.map(exercise => <Exercise
                   key={exercise.id} exercise={exercise}>
                   </Exercise>)
                }
            </div>
            <div className="detail-container">
                <Detail></Detail>
            </div>
        </div>
    );
};

export default Activity;