import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

const Home = () => {
  return (
    <>
      <h1 className='text-center mt-3'>All Items</h1>
      <section className='container py-4'>
        <div className='row justify-content-center'>
            {data.productData.map((item, index)=>{
                return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index} item={item} />
                )
            })}
        </div>
      </section>
    </>
  )
}

export default Home