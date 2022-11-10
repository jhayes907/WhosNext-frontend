import React from 'react';
import SignupModal from './popUps/SignupModal';
import '../welcome.css'

const Welcome = () => {

// const style = {'background-image': "url('https://img.freepik.com/free-vector/people-facing-each-other-while-texting-concept-illustration_52683-23818.jpg?size=626&ext=jpg&ga=GA1.2.1325641149.1668022357')"};

        
    return (
        <>
        <div className='welcome'>
            
            <div className='container-home'>
                <div className='tagline'>
                    <h1>WhosNext</h1>
                    <p>The NEXT ONE may be THE ONE.</p>
                </div> 
                <SignupModal />
            </div>
        </div>
        </>    
    )
}

export default Welcome;