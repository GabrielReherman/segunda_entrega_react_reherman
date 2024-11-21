import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import "./itemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        if(idCategory){
          //filtrar los productos
          const newProducts = respuesta.filter((producto)=> producto.category === idCategory )
          setProducts(newProducts)
        }else{
          //devolver todos los productos
          setProducts(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Finalizo la promesa"));
  }, [idCategory]);

  return (
    <div>
      <h2 className="custom-heading">{greeting}</h2>
      <p> nuestra tienda de tecnología</p>
      <ItemList products={products} />
      </div>
      
    
  );
};
export default ItemListContainer;
