import { Button, Menu, MenuItem, Select } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const MultiVariantRangeSelector = (props) => {

    const [selectedVariant, setSelectedVariant] = useState(props.variants[0].name);
    const [quantity, setQuantity] = useState(props.discount.from);
    const variantListRef = useRef(null);

    const discountItem = props.discount;
    const pricePerItem = (props.price / discountItem.from).toFixed(2);
    const discountPricePerItem = (props.discountPrice / discountItem.from).toFixed(2);

    let optionsList = props.variants.map((variant, ind) => {
        return (<option key={`variant-option-${ind}`} value={variant.name}>{variant.name}</option>);
    });

    useEffect(() => {
        setQuantity(discountItem.from);
    }, [discountItem.from])

    let variantsList = [];
    for(let i = 1; i <= quantity; i++) {
        variantsList.push(
            <div className='variant-list-item' key={`variant-multi-range-${i}`}>
                <div className='multi-variant-id'>#{i}</div>
                <select className="variants-item variants-range-item"  
                    aria-label="Default select example">
                    {optionsList}
                </select>
                { i > discountItem.from && 
                    <span className='delete-variant' onClick={() => deleteVariant(i-1)}>
                        <img src='/Images/Vector-6.png' />
                    </span> 
                }
            </div>
        );

    }

    const deleteVariant = (ind) => {
        for(let i=ind;i<quantity-1;i++) {
            if(i === quantity) break;
            let tmp = variantListRef.current.childNodes[i].querySelector('select').value;
            let next = variantListRef.current.childNodes[i + 1].querySelector('select').value;
            variantListRef.current.childNodes[i].querySelector('select').value = next;
            next = tmp;
        }
        variantsList = variantsList.filter((val, i) => {
            return i!==ind;
        });
        // variantsList.splice(ind, 1);
        setQuantity(quantity - 1);
    }

    const addVariant = (ind) => {

        if(ind > discountItem.to) {
            return;
        }

        if(discountItem.to) {
            ind = Math.min(ind, discountItem.to);
        }

        setQuantity(ind);
    }

    const variantSelected = (val) => {
        setSelectedVariant(val);
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
            <div className='selection-section' ref={variantListRef}>
                {variantsList}
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

                <Button 
                    variant='outlined' color='inherit' 
                    onClick={() => { addVariant(quantity + 1) }} 
                    sx={{ width: '78%', position: 'relative', right: '-13%' }}    
                >
                        Add More
                </Button>
            </div>
        </div>
    )
}

export default MultiVariantRangeSelector;