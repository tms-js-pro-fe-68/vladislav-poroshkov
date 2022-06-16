import {useState, useEffect} from "react";
import React from 'react';

const API_LINK = 'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

const DataLoading = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        setErrorMessage(null);
        setIsLoading(true);
        fetch(API_LINK)
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

    return (
        <div>
            <div className="div_cocktails">
                <h2 className="h2_cocktails">
                    Do you want to know the most popular alcoholic cocktails?
                </h2>
                <p>{isLoading && 'Loading..'}</p>
                <p>{errorMessage}</p>
                <ul>
                    {items.map(({ idDrink, strDrink }) => (
                        <li className="li_cocktails" key={idDrink}>
                            <i>{strDrink}</i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DataLoading;