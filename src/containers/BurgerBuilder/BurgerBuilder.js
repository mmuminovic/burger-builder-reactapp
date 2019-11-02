import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: {
            salad: 0.5,
            bacon: 0.7,
            cheese: 0.4,
            meat: 1.3
        },
        totalPrice: 0
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount < 3) {
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            this.setState({ ingredients: updatedIngredients });
        }
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount !== 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            this.setState({ ingredients: updatedIngredients });
        }
    }

    totalPrice() {
        console.log(this.state.ingredients);
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;