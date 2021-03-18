import React, { useState, useEffect } from 'react';
import FCError from './FCError';
import FCWineCard from './FCWineCard';
import EContent from '../Elements/EContent.json';


export default function FCWines(props) {
    const [wineList, setWineList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetch(`https://localhost:44370/api/Wine?Wineryid=${props.wineryId}`,
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
                        setInput(EContent.noWine);
                        setOpen(true);
                    }
                    else {
                        setWineList(result.map(
                            (e, index) => <FCWineCard
                                key={index}
                                id={e.wineId}
                                name={e.wineName}
                                content={e.content}
                                price={e.price}
                                img={e.wineImgPath}
                                categoryId={e.categoryId}
                                categoryList={categoryList}
                            />));
                    }
                },
                (error) => {
                    console.log("err post=", error);
                });
    }, []);

    return (
        <td>
            <FCError open={open} input={input} />
            {wineList}
        </td>
    )
}
