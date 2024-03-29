import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => { //took ingredient from burgerBuilder and loop of ingredient
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i } type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0){
        transformedIngredients=<p>Please start adding ingredients!</p>
    }



    console.log(transformedIngredients);
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottem" />

        </div>
    );
};

export default burger;