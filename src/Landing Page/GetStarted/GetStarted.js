import { Button, Typography } from '@mui/material';
import React from 'react';

import './GetStarted.css';

class GetStarted extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            getStartedButton: {
                backgroundColor: '#F53838',
                color: 'white'
            }
        }
    }

    render() {
        return (
            <div className='get-started'>
                <div className='get-started-left'>
                    <div className='get-started-text'>
                        <Typography variant='inherit' align={'left'}>Want anything to be easy with <strong>LaslesVPN</strong></Typography>
                        <Typography variant='body1' align={'left'} sx={{ my: '10px' }}>
                            Provide a network for all your needs with ease and fun using <strong>LaslesVPN </strong>  
                            discover interesting features from us.
                        </Typography>
                        <Button variant='inherit' color='inherit' align={'left'} style={this.styles.getStartedButton} className='get-started-button'><strong>Get Started</strong></Button>
                        
                    </div>
                </div>
                <div className='get-started-right'>
                    <img src='/Images/Illustration 1.png' className='illustration-image' />
                </div>
            </div>
        )
    }
}

export default GetStarted;