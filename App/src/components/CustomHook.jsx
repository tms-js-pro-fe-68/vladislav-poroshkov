import { useState, useEffect } from "react";

const API_LINK = 'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

function useGetRequest(api){
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setErrorMessage(null);
        setIsLoading(true);
        fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => setItems(data.drinks))
            .catch((error) => setErrorMessage(error.message))
            .finally(() => setIsLoading(false));
        return () => {
            console.log('Nothing found...');
        };
    }, []);

    return [isLoading, errorMessage, items];
}

import React from 'react';

const CustomHook = () => {
    const [isLoading, errorMessage, items] = useGetRequest(API_LINK);

    return (
        <div style={{
            width: '600px',
            margin: '10px auto',
            border: '6px solid coral',
            borderRadius:'20px'
        }}>
            <h2 style={{
                fontSize: '25px',
                color: 'dimgray',
                textAlign: 'center'
            }}>
                List of the most popular cocktails:
            </h2>
            <p>{isLoading && 'Loading..'}</p>
            <p>{errorMessage}</p>
            <ul>
                {items.map(({ idDrink, strDrink }) => (
                    <li style={{
                        color: 'coral',
                        fontSize: '17px'
                    }}
                        key={idDrink}>
                        <i>{strDrink}</i>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CustomHook;
