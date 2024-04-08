import React from 'react';
import uuid from 'react-uuid';



export const getUniqueId = () => {
    const id = uuid();
    return id;
}