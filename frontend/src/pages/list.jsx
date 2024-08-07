import "../Styles/list.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {useState} from "react"
function List() {
        const [name,setName] = useState()
        const [description,setDescription] = useState()
        const [price,setPrice] = useState()
        const [category,setCategory] = useState()
        const [brand,setBrand] = useState()
        const [image,setImage] = useState()
        const [stock,setStock] = useState()
        const navigate = useNavigate()

        const handleSubmit = (e) => {
                e.preventDefault()
                axios.post('http://localhost:8080/list', { name, description, price, category, brand, image, stock })
                    .then(result => {
                        console.log(result)
                        if (result.data === "Success") {
                            navigate('/product')
                        }
        
                    })
                    .catch(err => console.log(err))
            }

        
  return (
    <div>
      <form className="Product-form-container">
        <div className="Product-group">
        <h2 className="product-head">Product listing</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>

          <label htmlFor="name">Description</label>
          <textarea name="message" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>

          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>

          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" placeholder="Category" onChange={(e) => setCategory(e.target.value)}/>

          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" placeholder="Brand" onChange={(e) => setBrand(e.target.value)}/>

          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" name="image" placeholder="Image" onChange={(e) => setImage(e.target.value)}/>

          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" placeholder="stock" onChange={(e) => setStock(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}><a href="/product">List items</a></button>
        </div>
      </form>
    </div>
  );
}
export default List;