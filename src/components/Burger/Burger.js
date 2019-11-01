import React from 'react';
// import Aux from '../../hoc/Aux';

import BurgerIngredient from './BurgerInredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
            .map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Add some ingredients</p>
    }
    
    return (
        <div className={classes.Burger}>
            <h1>Ovo je moj hamburger</h1>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;