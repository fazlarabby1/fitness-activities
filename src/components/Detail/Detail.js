import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Detail.css'
import { addBreakTimeToLS, updateBreakTime, getStoredBreakTimeFromLS, setBreakTimeFromLS } from '../Utilities/utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
    const [breakTime, setBreakTime] = useState(0);
    useEffect(() => {
        const storedBreak = getStoredBreakTimeFromLS();
        setBreakTimeFromLS(storedBreak);
        setBreakTime(storedBreak);
    }, [])
    
    const handleClick = (e) =>{
        const timeText = e.target.innerText;
        const time = parseInt(timeText);
        addBreakTimeToLS(time);
        updateBreakTime();
    }
    const notify = () => toast("YAYY!! Activity is completed!"); 
    return (
        <div>
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
                    <p className='btn btn-light rounded-5 mb-0 ms-2 me-sm-2 me-lg-0 me-md-2 me-2'><span onClick={(e)=> handleClick(e)} >60</span>s</p>

                    <p className='btn btn-light rounded-5 mb-0 me-sm-2 me-lg-0 me-md-2 me-2'> <span onClick={(e)=> handleClick(e)} >120</span>s</p>

                    <p className='btn btn-light rounded-5 mb-0 me-sm-2 me-lg-0 me-md-2 me-2'> <span onClick={(e)=> handleClick(e)} >180</span>s</p>

                    <p className='btn btn-light rounded-5 mb-0 me-sm-2 me-lg-0 me-md-2 me-2'><span onClick={(e)=> handleClick(e)}>240</span>s</p>
                </div> 
            </div>    
            <div className='container mt-5'>
                <h4 className='ms-3 mb-4'>Exercise Details</h4>
                <div className='d-flex justify-content-around align-items-center exercise-time mx-3 py-2 rounded'>
                   <h5>Exercise Time</h5>
                   <p className='text-muted'> <span id='exercise-time'>0</span> minutes</p>
                </div> 
                <div className='d-flex justify-content-around align-items-center exercise-time mx-3 py-2 rounded mt-3'>
                   <h5>Break Time</h5>
                   <p className='text-muted'> <span id="exercise-break">0</span> seconds</p>
                </div> 
            </div> 
            <div className='container'>
            <button className='mt-5 ms-4 fw-semibold text-white bg-primary rounded border-0 px-5 py-2' onClick={notify}>Activity Completed</button>  
            <ToastContainer></ToastContainer>
            </div> 
        </div>
    );
};

export default Detail;