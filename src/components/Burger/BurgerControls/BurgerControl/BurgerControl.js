import React from 'react';
// import Aux from '../../../../hoc/Aux';
import classes from './BurgerControl.module.module.css';

const burgerControl = ( props ) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>-</button>
            <button 
            className={classes.More}
            onClick={props.added}>+</button>
        </div>
    );
}

export default burgerControl;