import React, { SyntheticEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import "./Products.scss"
const Products = () => {
  const productCategoryId = parseInt(useParams<{id:string | undefined}>()?.id!)
  const [maxPrice, setmaxPrice] = useState<number>(1000)
  const [sort, setSort] = useState<string | undefined>();
  const [selectedSubCats, setSelectedSubCats] = useState<string[]>([])

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${productCategoryId}`)
const handleChange = (e: React.FormEvent<HTMLInputElement>)=>{
  e.preventDefault();
  const value = e.currentTarget.value;
  const isChecked = e.currentTarget.checked;
  setSelectedSubCats(isChecked? [...selectedSubCats, value] : selectedSubCats.filter((item)=>item !== value))
}
console.log(selectedSubCats)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(
            
            <div className="inputItem" key={item['id']}>
            <input type="checkbox" id={item['id']} value={item['id']} onChange={handleChange}/>
            <label htmlFor={item['id']}>{item['attributes']['title']}</label>
          </div>
          ))}
          
          
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setmaxPrice(parseInt(e.target.value))}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" value="asc" id="asc" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" value="desc" id="desc" onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List productCategoryId={productCategoryId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products