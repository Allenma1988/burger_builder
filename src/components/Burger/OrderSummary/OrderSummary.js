import React from 'react';
import Button from '../../UI/Button/Button';
const orderSummary = ( props ) => {
    const ingredientsSummary=Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
        </li>);
    }); 
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button className='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button className='Success'clicked={props.purchaseContinued}>CONTINUE</Button>

        </div>
    );

};

export default orderSummary;