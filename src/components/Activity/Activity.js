import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Exercise from '../Exercise/Exercise';
import './Activity.css';
import { getPreviousTime, updateTime } from '../Utilities/utilities';
import Blog from '../Blog/Blog';

const Activity = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },
    []);
         const addToExerciseTime = (exercises) =>{
            const {time} = exercises;
            const previousTime = getPreviousTime();
            const newTime = time + previousTime;
            updateTime(newTime);
            console.log(newTime);
         } 
    return (
        <div className="activity">
            <div className='exercise-container'>
                <h1> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Rush Fitness Activities</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 g-4">
                    {
                    exercises.map(exercise => <Exercise
                    key={exercise.id} addToExerciseTime={addToExerciseTime} exercise={exercise}>
                    </Exercise>)
                    }
                </div>
                <Blog></Blog>
            </div>
            <div className="detail-container">
                <Detail></Detail>
            </div>
        </div>
    );
};

export default Activity;