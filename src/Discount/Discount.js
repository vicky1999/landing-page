import { Button } from '@mui/material';
import React, { useState } from 'react';


import './Discount.css';
import DiscountItem from './DiscountItem';

const Discount = (props) => {
    const discounts = props.discounts;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [price, setPrice] = useState(props.price);

    const discountChanged = (ind) => {
        setSelectedIndex(ind);
        let discountPrice = ( props.price - props.price * (discounts[ind].discount/100)).toFixed(2);
        setPrice(discountPrice);
    }

    var discountsList = discounts.map((d, ind) => {
        return (
            <DiscountItem 
                discount={d} key={`disc-${ind}`} index={ind} selected={selectedIndex === ind } 
                selectionChange={discountChanged}
            />)
    });
    
    return (
        <div className='discounts'>
            <div className='discount-head-text'>
                Buy more and get extra discount!🎉
            </div>
            <div className='discount-items'>
                {discountsList}
            </div>
            <div className='price-section'>
                Total: &nbsp;<span className='text-red'>${price}</span>&nbsp;&nbsp;
                <span className='price-strikeout'>${props.price}</span>&nbsp;
                <span className='text-red'>(Save ${(props.price - price).toFixed(2)})</span>
            </div>
            <div className='grab-btn'>
                <button className='grab-deal-button'>Grab this Deal</button>
                {/* <Button variant='contained' color='inherit' className='grab-deal-button'>Grab this Deal</Button> */}
            </div>
        </div>
    )
}

export default Discount;