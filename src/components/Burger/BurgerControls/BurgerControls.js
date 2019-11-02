import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const burgerControls = (props) => {

    return (
        <div className={classes.Controls}>
            <p>Total Price: {props.totalPrice}</p>
            {controls.map(ctrl => (
                <BurgerControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    totalPrice={() => props.totalPrice}
                />
            ))}
        </div>
    );
}

export default burgerControls;