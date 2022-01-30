import React, { useRef, useState } from 'react';

import './Discount.css';

const DiscountItem = (props) => {
    const discountRef = useRef(null);
    const [isSelected, setIsSelected] = useState(props.selected);
    const discount = props.discount;

    const discountClicked = () => {
        setIsSelected(true);
        props.selectionChange(props.index)
        discountRef.current.classList.add('discount-selected');
    }

    return (
        <div ref={discountRef} className={'discount-item' + ((props.selected) ? ' discount-selected' : '')} onClick={discountClicked}>
            { discount.isPopular ? <div className='popular-display'></div> : <div className='normal-display'></div> }
            <div className='discount-text'>
                {
                    !discount.isRange && `Buy ${discount.count} Get extra ${discount.discount}% off`
                }
                {
                    discount.isRange && `Buy ${discount.from}-${ discount.to ? discount.to : 'or more' } Get extra ${discount.discount}% off`
                }
            </div>
        </div>
    );
}

export default DiscountItem;