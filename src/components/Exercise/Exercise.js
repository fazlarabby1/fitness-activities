import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {exercise, addToExerciseTime} = props
    const {image, name, description, age, time} = exercise;
    return (
        <div>
            <div className="col">
                <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.length < 140 ? description : description.slice(0 , 140)}</p>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Time:</strong> {time}m</p>
                    <button onClick={()=> addToExerciseTime(exercise)} className='bg-primary text-white fw-bold border-0 rounded w-100 py-2'>Add to list</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;