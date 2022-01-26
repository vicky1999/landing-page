import { Typography } from '@mui/material';
import React from 'react';
import PlanItem from './PlanItem';

import './Plans.css';

class Plans extends React.Component {
    constructor(props) {
        super(props);

        this.state = { free: false, standard: false, premium: true };

        this.free = ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'];
        this.standard = ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'];
        this.premium = ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'];
        
        this.changeFreePlan = this.changeFreePlan.bind(this);
        this.changeStandardPlan = this.changeStandardPlan.bind(this);
        this.changePremiumPlan = this.changePremiumPlan.bind(this);
    }

    changeFreePlan() {
        this.setState({ free: true, standard: false, premium: false });
    }

    changeStandardPlan() {
        this.setState({ free: false, standard: true, premium: false });
    }

    changePremiumPlan() {
        this.setState({ free: false, standard: false, premium: true });
    }

    render() {
        return (
            <div className='plans'>
                <Typography variant='h4' sx={{ fontWeight: 'bold', my: '25px' }}>Choose Your Plan</Typography>
                <div className='plan-text'>
                    <Typography variant='body1' sx={{ color: '#4F5665', my: '25px' }}>Let's choose the package that is best for you and explore it happily and cheerfully.</Typography>
                </div>

                <div className='plans-desc'>
                    <PlanItem type="Free Plan" plan={this.free} planImage='/Images/FreePlan.png' price='Free' selected={this.state.free} changePlan={this.changeFreePlan} />
                    <PlanItem type="Standard Plan" plan={this.standard} planImage='/Images/Standard.png' price='$9 / mo' selected={this.state.standard} changePlan={this.changeStandardPlan} />
                    <PlanItem type="Premium Plan" plan={this.premium} planImage='/Images/Premium.png' price='$12 / mo' selected={this.state.premium} changePlan={this.changePremiumPlan} />
                </div>
            </div>
        )
    }
}

export default Plans;