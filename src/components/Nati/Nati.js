import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';

const Nati = ({house}) => {
    const newValue = useContext(UserContext);
    return (
        <div>
            <h3>house from Nati : {house}</h3>
            <p><small>Using Context api data get from nati: {newValue}</small></p>
        </div>
    );
};

export default Nati;