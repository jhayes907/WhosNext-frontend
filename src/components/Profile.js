import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Profile = (props) => {
//    const [profile, setProfile] = useState(props);
   const { handleLogout, user } = props;
   const { id, name, email, dob_month, dob_day, dob_year, gender, preference, image, matches, exp } = props.user;
   const dob = `${dob_month}, ${dob_day}, ${dob_year}`;

   

   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

  

   const userData = user ?
   (<div>
       <img src={image} alt="John Wick" />
       <p>ID: {id}</p>
       <p>Name: {name}</p>
       <p>Email: {email}</p>
       <p>Dob: {dob}</p>
       <p>Gender: {gender}</p>
       <p>Preference: {preference}</p>
       <p>Matches: {matches}</p>
    </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    // Todo: useEffect 
    const [profileImage, setProfileImage] = useState(props.user.profileImage);

    // useEffect(() => {
    //     axios.get('')
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    // }, [])

    const handleImageDelete = (e) => {
        //Todo: handleImageDelete api call
        e.preventDefault();
        axios.delete(`${REACT_APP_SERVER_URL}/users/profileImg`)
        .then(response => {
            setProfileImage("")
        })
        .catch(error => {
            console.log('===> Error loading profile image', error);
            alert('');
        });
    };

    const handleImageEdit = (e) => {
        e.preventDefault();
        axios.edit(`${REACT_APP_SERVER_URL}/users/profileImg`)
        .then(response => {
            setProfileImage("")
        })
        .catch(error => {
            console.log('===> Error loading profile image', error);
            alert('');
        });
    };

    const ProfileImage = (props) => {
    
        return(
            <div className="profile-image">
                <img src={props.image} alt="Taylot Swift" />
                <Button onClick={props.onEdit}>Edit</Button>
                <Button onClick={props.onDelete}>Delete</Button>
            </div>
    
        )
    }

    return (
        <>  
            <h1>Profile</h1>
            <section className='matches-section'>
                <div className='matches-container'>
                    <div className='matches'>   
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Match</Card.Title>
                            <Card.Text>
                            This will be where the match information will be.
                            </Card.Text>
                            <Button variant="primary" href=''>View Profile</Button>
                            <Button variant="primary" href=''>Send Message</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Match</Card.Title>
                            <Card.Text>
                            This will be where the match information will be.
                            </Card.Text>
                            <Button variant="primary" href=''>View Profile</Button>
                            <Button variant="primary" href=''>Send Message</Button>
                        </Card.Body>
                    </Card> 

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Match</Card.Title>
                            <Card.Text>
                            This will be where the match information will be.
                            </Card.Text>
                            <Button variant="primary" href=''>View Profile</Button>
                            <Button variant="primary" href=''>Send Message</Button>
                        </Card.Body>
                    </Card>    
                    </div> 
                </div>
            </section>
            

            
            <section className="userDataSection">
                <div className="userData-container">
                    <div className='userData'>
                        {user ? userData : errorDiv()}
                    </div>
                    <button className='btn btn-primary'>edit</button>
                </div>
            </section>
    
            <section className='pictureSection'>
                <div className="profileImage-container"> 
                    {<ProfileImage onDelete={handleImageDelete} onEdit={handleImageEdit} image={profileImage}/>}
                    
                </div>  
            </section>             
        
        </>
    );
}

// export default ProfilePage;
export default Profile;