import { Button } from '@mui/material';
import React, { useState } from 'react';


import './Discount.css';
import DiscountItem from './DiscountItem';
import MultiVariantSelector from './MultiVariantSelector';
import SingleVariantSelector from './SingleVariantSelector';

const Discount = (props) => {
    const discounts = props.discounts;
    
    const [totalPrice, setTotalPrice] = useState(props.price * discounts[0].count);
    const [selectedIndex, setSelectedIndex] = useState(0);

    let discountPrice = (totalPrice - (totalPrice * (discounts[0].discount/100))).toFixed(2);

    const [price, setPrice] = useState(discountPrice);

    const discountChanged = (ind) => {
        setSelectedIndex(ind);
        let tp=(props.price * discounts[ind].count).toFixed(2);
        setTotalPrice(tp);
        let discountPrice = ( tp - (tp * (discounts[ind].discount/100))).toFixed(2);
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
            <div className='variant-selector'>
            {
                props.variants.length > 0 && props.variantConfig.singleVariant &&
                <SingleVariantSelector variants={props.variants} variantConfig={props.variantConfig} discountPrice={price} price={totalPrice} discount={discounts[selectedIndex]} />
            }
            {
                props.variants.length > 0 && !props.variantConfig.singleVariant && 
                <MultiVariantSelector variants={props.variants} variantConfig={props.variantConfig} discountPrice={price} price={totalPrice} discount={discounts[selectedIndex]} />                
            }
            </div>
            <div className='price-section'>
                Total: &nbsp;<span className='text-red'>${price}</span>&nbsp;&nbsp;
                <span className='price-strikeout'>${totalPrice}</span>&nbsp;
                <span className='text-red'>(Save ${(totalPrice - price).toFixed(2)})</span>
            </div>
            <div className='grab-btn'>
                <button className='grab-deal-button'>Grab this Deal</button>
                {/* <Button variant='contained' color='inherit' className='grab-deal-button'>Grab this Deal</Button> */}
            </div>
        </div>
    )
}

export default Discount;