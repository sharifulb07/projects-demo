import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'

const Meals = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res) =>{
            console.log(res.data)
            setItems(res.data.meals)})

    }, [])

const itemList=items.map(({strMeal, strMealThumb, idMeal}) => {
    
return(
<section className='card'>
    <img src={strMealThumb} alt="photo" width={200} height={150} />
    <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal} </p>
    </section>

</section>
)})
    return (
        <div className='.items-container'>
            {itemList}
        </div>
    )
}

export default Meals
