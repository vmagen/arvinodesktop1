import React, { useState, useEffect } from 'react';
import FCEventCard from './FCEventCard';

export default function FCEvents(props) {
    const [eventList, setEventList] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:54186/api/Event?wineryId=${props.wineryId}`,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    setEventList(result);
                    console.log(result);
                    getList();
                },
                (error) => {
                    console.log("err post=", error);
                });
       

    }, []);

const getList = () =>{
    setList(eventList.map(
        (e, index) => <FCEventCard
            key={index}
            id={e.eventId}
            name={e.eventName}
            content={e.content}
            price={e.price}
            participantsAmount={e.participantsAmount}
            eventDate={e.eventDate}
            startTime={e.startTime}
            img={e.eventImgPath}
            category={e.categoryId}
            ticketsPurchased={e.ticketsPurchased} />))
}

    return (
        <div>
            {list}
        </div>
    )
}
