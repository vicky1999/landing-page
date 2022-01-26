import { Button, Typography } from '@mui/material';
import React from 'react';
import ReviewItem from './ReviewItem';

import './Reviews.css';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: 0, currentPage: 0 };
        
        this.currentCarouselPosition = 0;

        this.reviews = [
            {
                name: 'Viezh Robert',
                image: '/Images/Reviewer-1.png',
                country: 'Warsaw, Poland',
                stars: '4.5',
                content: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
            },
            {
                name: 'Yessica Christy',
                image: '/Images/Reviewer-2.png',
                country: 'Shanxi, China',
                stars: '4.5',
                content: '“I like it because I like to travel far and still can connect with high speed.”.'
            },
            {
                name: 'Kim Young Jou',
                image: '/Images/Reviewer-3.png',
                country: 'Seoul, South Korea',
                stars: '4.5',
                content: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },
            {
                name: 'Viezh Robertdfs',
                image: '/Images/Reviewer-1.png',
                country: 'Warsaw, Poland',
                stars: '4.5',
                content: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
            },
            {
                name: 'Yessica Christy',
                image: '/Images/Reviewer-2.png',
                country: 'Shanxi, China',
                stars: '4.5',
                content: '“I like it because I like to travel far and still can connect with high speed.”.'
            },
            {
                name: 'Kim Young Jou',
                image: '/Images/Reviewer-3.png',
                country: 'Seoul, South Korea',
                stars: '4.5',
                content: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },
            {
                name: 'Kim Young Jou',
                image: '/Images/Reviewer-3.png',
                country: 'Seoul, South Korea',
                stars: '4.5',
                content: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },
            {
                name: 'Viezh Robertdfs',
                image: '/Images/Reviewer-1.png',
                country: 'Warsaw, Poland',
                stars: '4.5',
                content: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
            },
            {
                name: 'Yessica Christy',
                image: '/Images/Reviewer-2.png',
                country: 'Shanxi, China',
                stars: '4.5',
                content: '“I like it because I like to travel far and still can connect with high speed.”.'
            },
        ];

        this.reviewsList = [];

        this.selectNextCard = this.selectNextCard.bind(this);
        this.selectPreviousCard = this.selectPreviousCard.bind(this);
        this.scrollCarousel = this.scrollCarousel.bind(this);
    }

    scrollCarousel(ind) {
        const reviewsSection = document.getElementById('review-section');
        const scrollAmt = reviewsSection.offsetWidth / 3;
        console.log(ind, this.currentCarouselPosition, scrollAmt);
        if(this.currentCarouselPosition === ind) {
            return; 
        }
        if(ind === 0) {
            reviewsSection.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }
        if(this.currentCarouselPosition > ind) {
            reviewsSection.scrollBy({
                top: 0,
                left: -((ind) * scrollAmt),
                behavior: 'smooth'
            });
        }
        else {
            reviewsSection.scrollBy({
                top: 0,
                left: ((ind) * reviewsSection.offsetWidth),
                behavior: 'smooth'
            });
        }
        this.currentCarouselPosition = ind;
        this.setState({ currentPage: ind });
    }

    selectNextCard() {
        this.setState({ selected: Math.min(this.state.selected + 1, this.reviews.length - 1 ) });
        console.log(this.state)
    }

    selectPreviousCard() {
        this.setState({ selected: Math.max(this.state.selected - 1, 0) })
    }

    render() {

        this.reviewsList = [];
        this.reviews.forEach((rev, ind) => {
            this.reviewsList.push(<ReviewItem key={`review-${ind}`} review={rev} index={ind} selected={this.state.selected} />);
        });

        this.carouselControls = [];
        this.carouselCount = Math.ceil(this.reviews.length / 3);

        for(let i=0;i<this.carouselCount;i++) {
            if(this.state.currentPage === i) {
                this.carouselControls.push(
                    <Button variant='inherit' key={`carousel-${i}`} onClick={() => this.scrollCarousel(i)}>
                        <img src='/Images/current-carousel.png' />
                    </Button>
                );
            }
            else {
                this.carouselControls.push(
                    <Button variant='inherit' key={`carousel-${i}`} onClick={() => this.scrollCarousel(i)}>
                        <img src='/Images/carousel-slide.png' />
                    </Button>
                );
            }

        }

        return (
            <div className='reviews'>
                <div className='review-heading'>
                    <div className='review-body'>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                            Trusted by Thousands of Happy Customer
                        </Typography>
                    </div>
                    <div className='review-body'>
                        <Typography variant='body1' sx={{ color: '#4F5665' }}>
                            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                        </Typography>
                    </div>
                </div>
                <div id='review-section' className='review-content'>
                    {this.reviewsList}
                </div>  

                <div className='review-control'>
                    <div className='review-control-left'>
                        <div className='carousel-control'>
                            {this.carouselControls}
                        </div>
                    </div>
                    <div className='review-controls-right'>
                        <Button variant="inherit" color='inherit' 
                            sx={{ width: '60px', height: '60px', border: '2px solid red', borderRadius: '50%' }}
                            onClick={this.selectPreviousCard}
                        >
                            <img src='/Images/Vector.svg' />
                        </Button>
                        <Button variant="inherit" color='inherit' 
                            sx={{ width: '60px', height: '60px', border: '2px solid red', borderRadius: '50%', transform: 'rotateY(180deg)' }}
                            onClick={this.selectNextCard}
                        >
                            <img src='/Images/Vector.svg' />
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;