import React from "react";
import Toast from 'react-bootstrap/Toast';

function ItemListContainer(prop){
    return (
        <Toast className="float-center">
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">greeting msg</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{prop.greeting}</Toast.Body>
        </Toast>
        )
}

export default ItemListContainer;

