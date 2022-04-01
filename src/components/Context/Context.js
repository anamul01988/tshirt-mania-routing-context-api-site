import React, { createContext } from 'react';
import './Context.css';
import Dada from '../dada/Dada';
export const UserContext = createContext('ring');
const Context = () => {
 
    let house = 44;
    return (
        <UserContext.Provider value={house}>
            <h3>this context component.</h3>
            <Dada house = {house}/>
            
        </UserContext.Provider>
    );
};

export default Context;