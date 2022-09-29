import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {image, name, description, age, time} = props.exercise;
    return (
        <div>
            <div class="col">
                <div className="card">
                <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description.length < 140 ? description : description.slice(0 , 140)}</p>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Time:</strong> {time}m</p>
                    <button className='bg-primary text-white fw-bold border-0 rounded w-100 py-2'>Add to list</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;