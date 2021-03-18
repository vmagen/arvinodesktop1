import React, { useState, useEffect } from 'react';
import FCServiceCard from './FCServiceCard';
import EContent from '../Elements/EContent.json';

export default function FCServices(props) {
    const [serviceList, setServiceList] = useState([]);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {

        fetch(`https://localhost:44370/api/Service?Wineryid=${props.wineryId}`,
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
                    if (result === "") {
                        setInput(EContent.noService);
                        setOpen(true);
                    }
                    else {
                    setServiceList(result.map(
                        (e, index) => <FCServiceCard
                            key={index}
                            id={e.serviceId}
                            name={e.serviceName}
                            content={e.content}
                            price={e.price}
                            category={e.serviceCategory} />));}
                },
                (error) => {
                    console.log("err post=", error);
                });
    }, []);


    return (
        <div>
            {serviceList}
        </div>
    )
}
