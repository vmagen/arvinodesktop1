import React, { useState, useEffect } from 'react';
import FCEventCard from './FCEventCard';


export default function FCEvents(props) {
    const [eventList, setEventList] = useState([]);
    const [categoryName, setCategoryName] = useState([]);
    const [categoryNum, setCategoryNum] = useState([]);


    useEffect(() => {

        fetch(`https://localhost:44370/api/EventCategory`,
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
                setCategoryName(result.categoryName);
                setCategoryNum(result.categoryId);
            },
            (error) => {
                console.log("err post=", error);
            });

        fetch(`https://localhost:44370/api/Event?id=${props.wineryId}`,
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
                    setEventList(result.map(
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
                            categoryName={categoryName}
                            categoryNum={categoryNum}
                            ticketsPurchased={e.ticketsPurchased} />));
                },
                (error) => {
                    console.log("err post=", error);
                });
    }, []);


    return (
        <div>
            {eventList}
        </div>
    )
}
