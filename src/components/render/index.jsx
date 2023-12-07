import React, { useEffect, useState } from 'react'
import '../style/render.css'
function Button() { 
const [type,SetType] =useState("users")
  const [data,SetData] =useState([])

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => SetData(json))
    .catch(error => <h1>'Ошибка при загрузке данных:',</h1>,);
}, [type])

  return (
    <div>
      <div className='NavBar'>
        <h1>Status:{type} количество {data.length}</h1>
        <button onClick={()=>SetType('users')}>Колдонуучулардан </button>
        <button onClick={()=>SetType('posts')}>Posts</button>
        <button onClick={()=>SetType('photos')}>Photos</button>
      </div>
        


        <pre>{
            data.map((el,id)=>{
                if(el.name){
                  return <div className='main'>
                   <h1>{el.name}</h1> 
                     <br /><p>{id+1}</p>
                    </div>
                }else if(el.body){
                  return <div className='Postsmain'>
                    <div style={{overflow:"auto",width:"200px",height:"100px", flexWrap:'wrap', marginLeft:'80px'}}>{el.body}</div>
                    <br/><p>{id+1}</p>
                   </div>
                }else if(el.email){
                  return <h6>{el.email}<p>{id}</p></h6>
                }else if(el.thumbnailUrl){
                  return <div class="product-item">
                  <img src={el.thumbnailUrl}/>
                  <div class="product-list">
                    <h3>Product</h3>
                      <span class="price">₽ 1999</span>
                      <a href="" class="button">В корзину</a>
                  </div>
                </div>
                }
            })
            }</pre>
        
    </div>
  )
}

export default Button