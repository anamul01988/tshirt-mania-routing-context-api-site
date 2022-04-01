import React from 'react';
import Nati from '../Nati/Nati';
const data = ({house}) => {
    return (
        <div>
            <h3>House from dada: {house}</h3>
            <Nati house = {house}></Nati>
        </div>
    );
};

export default data;