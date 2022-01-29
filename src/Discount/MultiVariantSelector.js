import { Button, Menu, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const MultiVariantSelector = (props) => {

    const [selectedVariant, setSelectedVariant] = useState(props.variants[0].name);
    const [quantity, setQuantity] = useState(props.discount.count)

    const discountItem = props.discount;
    const pricePerItem = (props.price / discountItem.count).toFixed(2);
    const discountPricePerItem = (props.discountPrice / discountItem.count).toFixed(2);

    let optionsList = props.variants.map((variant, ind) => {
        return (<option key={`variant-option-${ind}`}>{variant.name}</option>);
    });

    let variantsList = [];
    for(let i = 1; i <= discountItem.count; i++) {
        variantsList.push(
            <div className='variant-list-item' key={`variant-multi-${i}`}>
                <div className='multi-variant-id'>#{i}</div>
                <select className="variants-item" aria-label="Default select example">
                    {optionsList}
                </select>
            </div>
        )
    }

    const variantSelected = (val) => {
        setSelectedVariant(val);
    }

    const quantityChanged = (inc) => {
        let val = quantity + inc;
        val = Math.min(val, discountItem.count);
        val = Math.max(val, 0);
        setQuantity(val);
    }

    return (
        <div className='variant-selector-section'>
            <div className='variant-head-text'>
                Select variant for each item
            </div>
            <div className='price-section'>
                <span className='text-red'>${discountPricePerItem}</span>&nbsp;&nbsp;
                    <span className='price-strikeout'>${pricePerItem}</span>&nbsp;
                    <span className='text-red'>(Save ${(pricePerItem - discountPricePerItem).toFixed(2)} per item)</span>
            </div>
            <div className='selection-section'>
                {quantity > 0 && variantsList}
                {/* <select className="variants-item" aria-label="Default select example">
                    {optionsList}
                </select> */}
                {/* <div className="variants-item quantity-selector" aria-label="Default select example">
                    <div className='qty-change-buttons'>
                        <div className='left-side quantity-change-btn' onClick={ () => { quantityChanged(-1) } }>
                            -
                        </div>
                        <div className='quantity-display'>{quantity}</div>
                        <div className='left-side quantity-change-btn' onClick={ () => { quantityChanged(1) } }>+</div>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default MultiVariantSelector;