import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDumbbell, faLocation, faLocationArrow, faLocationPin, faLocationPinLock, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Detail.css'

const Detail = () => {
    return (
        <div className=''>
            <div className='my-details d-flex justify-content-center'>
                <img className='rounded-circle' src="my.jpg" alt="" />
                <div style={{marginLeft: '15px'}}>
                    <p>Fazla Rabby</p>
                    <p className='text-muted' style={{marginTop: '-15px'}}> <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Bagichagaon, Cumilla</p>
                </div>
            </div>    
            <div className='container mb-5'>
                <div className='mt-3 d-flex justify-content-around align-items-center break-time mx-3 py-2 rounded'>
                <div>
                <h5>78kg</h5>
                <p className='mb-0'>Weight</p> 
                </div>
                <div>
                <h5>5.11</h5>
                <p className='mb-0'>Height</p> 
                </div>
                <div>
                <h5>24yrs</h5>
                <p className='mb-0'>Age</p> 
                </div>
                </div> 
            </div>
            <div className='container'>
                <h4 className='fw-semibold ms-3'>Add A Break </h4>
                <div className='d-flex justify-content-around align-items-center break-time mx-3 py-2 rounded'>
                    <p className='btn btn-light rounded-5 mb-0'>60s</p>
                        <p className='btn btn-light rounded-5 mb-0'>120s</p>
                        <p className='btn btn-light rounded-5 mb-0'>180s</p>
                        <p className='btn btn-light rounded-5 mb-0'>240s</p>
                </div> 
            </div>    
            <div className='container mt-5'>
                <h4 className='ms-3 mb-4'>Exercise Details</h4>
                <div className='d-flex justify-content-around align-items-center exercise-time mx-3 py-2 rounded'>
                   <h5>Exercise Time</h5>
                   <p className='text-muted'> <span>0</span> minutes</p>
                </div> 
                <div className='d-flex justify-content-around align-items-center exercise-time mx-3 py-2 rounded mt-3'>
                   <h5>Break Time</h5>
                   <p className='text-muted'> <span>0</span> minutes</p>
                </div> 
            </div>    
        </div>
    );
};

export default Detail;