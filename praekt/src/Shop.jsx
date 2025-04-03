import { useEffect, useState } from "react";
import Card from './Card'


function Shop() {
    const [data,setData] = useState([])
    const [serachValue, setSearchValue] = useState("")
    useEffect(()=>{
    fetch(`https://dummyjson.com/recipes/search?q=${serachValue}`)    
    .then(res => res.json())
    .then(res=>setData(res.recipes));
    },[serachValue])
    return(
        <div>
        <div>
            <h1>Shop</h1>
            <input type="text" 
            value={serachValue}
            onChange={(e) => setSearchValue(e.target.value)}/>
            <div className="prods">
            {data.map((e)=><Card key={e.id} id={e.id} name={e.name} image={e.image} />)}
        </div>
        </div>
        </div>
    )
}
export default Shop