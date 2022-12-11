import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
    const data = [
        {
            id:4,
            img:"https://media.istockphoto.com/id/1326426267/photo/half-length-shot-of-positive-attractive-female-model-with-afro-haircut-feels-good-uses.jpg?b=1&s=170667a&w=0&k=20&c=ZcUs_x0LiRo7HFxylFWV_8Vp2Z0vmLz0utnk5jpX2CY=",
            img2:"https://media.istockphoto.com/id/1339552201/photo/stylish-couple-with-casual-white-tees.jpg?b=1&s=170667a&w=0&k=20&c=ewMp4S-UEBW9aydn9ZgaSIJEfnan2lCIKWON0UrzaTM=",
            title:"Cropped tee",
            oldPrice: 980,
            desc:"awsrdfgvbhjnmk  rxtcvygubhjn",
            price: 220,
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/685132231/photo/businesswoman-smiling-over-white-background.jpg?b=1&s=170667a&w=0&k=20&c=HtcJfiv7WDBurg0zRt4Y50ydbckcJ1aefXl_hAPnsG0=",
            img2:"https://media.istockphoto.com/id/1346782075/photo/middle-eastern-girl-attending-a-video-call.jpg?b=1&s=170667a&w=0&k=20&c=Pzs_ogd2LbI71LTFF66vStF116WxQR6sLw-xc9HodCc=",
            title:"Long tee",
            oldPrice: 420,
            price: 90,
        },
    ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
    {data?.map(item =>(
        <div className='item' key={item.id}>
        <img src={item.img} alt = ''/>
        <div className='details'>
        <h1>{item.title}</h1>
        <p>{item.desc?.substring(0,50)}</p>

        <div className='price'>
        1 x ${item.price}
        </div>
        </div>
        <DeleteOutlineIcon className='delete'/>
        </div>
    ))}

    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    
    </div>
  )
}

export default Cart
