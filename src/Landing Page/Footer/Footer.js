import { Grid, Typography } from '@mui/material';
import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container id='footer' className='footer' justifyContent={'space-around'}>
                <Grid item xs={12} md={4}>
                    <div className='footer-product'>
                        <img src='/Images/logo.png' className='logo' />
                        <Typography variant='h5' sx={{ p: '15px' }}>Lasles<strong>VPN</strong></Typography>
                    </div>
                    <Typography variant='body1' sx={{ color: 'gray', mx: '10%', my: '20px' }}><span style={{ color: '#4F5665' }}>LaslesVPN</span> is a private virtual network that has unique features and has high security.</Typography>
                    <Typography variant='body2' sx={{ color: '#AFB5C0', my: '20px' }}>©2020LaslesVPN</Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                    <div className='links-grid'>
                        <Typography variant='h5' align='left'>Product</Typography>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Download</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Pricing</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Locations</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Server</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Countries</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Blog</Typography>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>                
                    <div className='links-grid'>
                        <Typography variant='h5' align='left'>Engage</Typography>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>LaslesVPN ?</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>FAQ</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Tutorials</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>About Us</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Privacy Policy</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Terms of Service</Typography>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <div className='links-grid'>
                        <Typography variant='h5' align='left'>Earn Money</Typography>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Affiliate</Typography>
                        </a>
                        <a href='#footer' className='footer-link'>
                            <Typography variant='body1' sx={{ color: '#4F5665' }}>Become Partner</Typography>
                        </a>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default Footer;