import React, { useEffect, useState } from 'react'
import cardStyle from '../styles/cardStyle.module.css';
import NoItems from './NoItems';
import axios from "axios"


export default function Card() {
    const [house, setHouse] = useState([]);

    useEffect(() => {
        const dataFetching = async () => {
            try {
                const houseData = await axios.get("./data/House.json")
                setHouse(houseData.data.houses);
            } catch (error) {
                console.error("Error in data fetching ", error)
            }
        }
        dataFetching();
    }, []);



    return (<>
    {
        house.length<=0 ? (<NoItems/>):
        (
        <div className={cardStyle.container}>
            {
                house.map((data, index) => (
                    <div key={index} className={cardStyle.cardContainer}>
                        <div className={cardStyle.ImageContainer}>
                            <img src={data.image} alt="images" />
                        </div>
                        <div className={cardStyle.content}>
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
                            <p><b>Base Price</b>: <b>${data.base_price_usd}</b></p>
                            <div className={cardStyle.btnContainer}>
                                <button className={cardStyle.betBtn}>Bid</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        )}

    </>)
}
