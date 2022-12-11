import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://media.istockphoto.com/id/1335033038/photo/afro-woman-buying-clothes.jpg?b=1&s=170667a&w=0&k=20&c=AbfhFexids_WvtJKE7Ce6kbYyizTaj7XcPyBxWmbQvY=",
            img2:"https://media.istockphoto.com/id/1372606305/photo/volunteers-arranging-clothes-donations-in-a-community-charity-donation-center.jpg?b=1&s=170667a&w=0&k=20&c=VP1tkLjzhu2DDYcQ-fgQUSyVfFOoWsQLr_MRaQ3K_3g=",
            title:"Long Sleeves tee",
            isNew: true,
            oldPrice: 780,
            price: 120,
        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/1286538907/photo/stylish-blonde-girl-wearing-black-t-shirt-and-glasses-posing-against-street-urban-clothing.jpg?b=1&s=170667a&w=0&k=20&c=V3wOZPR198haWvUTfEWvJGpuUR5_b6sm05oYAm7KEJ8=",
            img2:"https://images.unsplash.com/photo-1484887603430-371459454eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwdGVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
            title:"Full Sleeves tee",
            isNew: true,
            oldPrice: 580,
            price: 100,
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/685132231/photo/businesswoman-smiling-over-white-background.jpg?b=1&s=170667a&w=0&k=20&c=HtcJfiv7WDBurg0zRt4Y50ydbckcJ1aefXl_hAPnsG0=",
            img2:"https://media.istockphoto.com/id/1346782075/photo/middle-eastern-girl-attending-a-video-call.jpg?b=1&s=170667a&w=0&k=20&c=Pzs_ogd2LbI71LTFF66vStF116WxQR6sLw-xc9HodCc=",
            title:"Long tee",
            oldPrice: 420,
            price: 90,
        },
        {
            id:4,
            img:"https://media.istockphoto.com/id/1326426267/photo/half-length-shot-of-positive-attractive-female-model-with-afro-haircut-feels-good-uses.jpg?b=1&s=170667a&w=0&k=20&c=ZcUs_x0LiRo7HFxylFWV_8Vp2Z0vmLz0utnk5jpX2CY=",
            img2:"https://media.istockphoto.com/id/1339552201/photo/stylish-couple-with-casual-white-tees.jpg?b=1&s=170667a&w=0&k=20&c=ewMp4S-UEBW9aydn9ZgaSIJEfnan2lCIKWON0UrzaTM=",
            title:"Cropped tee",
            oldPrice: 980,
            price: 220,
        },
    ]
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
      <div className='bottom'>
       {data.map(item =>(
        <Card item={item} key={item.id}/>
       ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
