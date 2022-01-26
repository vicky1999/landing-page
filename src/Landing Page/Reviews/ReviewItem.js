import { Typography } from '@mui/material';
import React from 'react';

import './Reviews.css';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.review = this.props.review;

        this.selectStyle = {};
        if(this.props.selected === this.props.index) {
            this.selectStyle = {
                border: '2px solid red'
            }
        }
        else {
            this.selectStyle = {
                border: '2px solid gray'
            }
        }
    }

    render() {
        if(this.props.selected === this.props.index) {
            this.selectStyle = {
                border: '2px solid red'
            }
        }
        else {
            this.selectStyle = {
                border: '2px solid gray'
            }
        }

        return (
            <div className='review-item' style={this.selectStyle}>
                <div className='review-header'>
                    <img src={this.review.image} />
                    <div className='reviewer-desc'>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{this.review.name}</Typography>
                        <Typography variant='body2' sx={{ color: 'gray' }}>{this.review.country}</Typography>
                    </div>
                    <div className='ratings'>
                        <Typography variant='body2'>{this.review.stars}</Typography>
                        <img src='/Images/star.png' className='star-image' />
                    </div>
                </div>
                <div className='review-text'>
                    <Typography variant='subtitle1'>{this.review.content}</Typography>
                </div>
            </div>
        )
    }
}

export default ReviewItem;