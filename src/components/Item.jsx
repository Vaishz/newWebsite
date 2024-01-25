import React from 'react'

const Item = (props) => {
    return (
        <>
            <div className='h-86 bg-red-200 p-1 flex flex-col items-center justify-center w-60 mb-5 pl-2'>
                    <img className='w-60 h-60 object-contain bg-slate-500' src={props.image} alt='image' />              
                <div className="name">{props.name}</div>
                <div className="price">{props.price}</div>
            </div>
        </>
    )
}

export default Item