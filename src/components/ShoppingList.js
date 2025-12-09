import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";
import { useState } from "react";
import Categories from "./Categories";

function ShoppingList ({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('');
    const categories = plantList.reduce((acc, elem) => 
        acc.includes(elem.category) ? acc : acc.concat(elem.category), []
    )
    
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1}
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1}]);
        }
    }

     function deleteToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount - 1}
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1}]);
        }
    }


    return (
    <div className="lmj-shopping-list">
        <Categories
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
        />
        <ul className="lmj-plant-list">
            {plantList.map(({id, cover, name, water, light, price, category}) => 
            !activeCategory || activeCategory === category ?(
                <div key={id}>
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        price ={price}
                    />
                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    <button onClick={() => deleteToCart(name, price)}>Retirer</button>
                </div>
            ): null
            )}
        </ul>
    </div>
)
}

export default ShoppingList