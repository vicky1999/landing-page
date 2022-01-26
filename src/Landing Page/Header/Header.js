import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.styles = {
            signinButton: {
                color: 'black',
                borderRadius: '50px'
            },
            signupButton: {
                color: 'red',
                borderRadius: '50px'
            }
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='product'>
                    <img src='/Images/logo.png' className='logo' />
                    <p variant='inherit' className='product-name'>Lasles<span className='bold-text'>VPN</span></p>
                </div>
                <div className='links'>
                    <a href='#'>Pricing</a>
                    <a href='#'>Testimonials</a>
                </div>
                <div className='auth'>
                    <Button variant='inherit' color='inherit' sx={this.styles.signinButton}>Sign in</Button>
                    <Button variant='outlined' color='inherit' sx={this.styles.signupButton}>Sign Up</Button>
                </div>
            </div>
        )
    }
}

export default Header;