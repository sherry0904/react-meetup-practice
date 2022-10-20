import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//     {
//         id: "m1",
//         title: "This is a first meetup",
//         image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//         address: "Meetupstreet 5, 12345 Meetup City",
//         description:
//         "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//     },
//     {
//         id: "m2",
//         title: "This is a second meetup",
//         image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//         address: "Meetupstreet 5, 12345 Meetup City",
//         description:
//         "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//     },
// ];



function AllMeetUps() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{

        fetch('https://civil-parsec-342808-default-rtdb.firebaseio.com/meetup.json',{
            method: 'GET',
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const meetups = 
                Object.keys(data)
                .map(key=>{
                    return (
                        data[key].key = key,
                        data[key]
                    )
                });
            console.log(meetups)
            setIsLoading(false);
            setLoadedMeetups(meetups)
        })
        
    },[]);

    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h2>AllMeetUps</h2>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetUps