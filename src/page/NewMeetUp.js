import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom';


function NewMeetUp() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData){
    fetch('https://civil-parsec-342808-default-rtdb.firebaseio.com/meetup.json',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        "content-type": "application/json; charset=utf-8"
      }
    })
    .then(res => {
      navigate('/creative/sherry/2022-reactPractice/');
    })
  }

  return (
    <section>
      <h2>NewMeetUp</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetUp