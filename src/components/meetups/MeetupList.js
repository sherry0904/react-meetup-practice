import { useEffect } from 'react'
import classes from './MeetupList.module.scss'
import MeetupItem from './MeetupItem'

function MeetupList({meetups}) {
    useEffect(()=>{
        console.log(meetups);
    });
    return (
        <ul className={classes.list}>
            <h2>MeetupList</h2>
            {
                meetups.map(meetup => (
                        <MeetupItem
                            key={meetup.id}
                            id={meetup.id}    
                            image={meetup.image}
                            title={meetup.title}
                            address={meetup.address}
                            description={meetup.description}
                        />
                    )
                )
            }
        </ul>
    )
}

export default MeetupList