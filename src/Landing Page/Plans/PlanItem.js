import { Button, Typography } from '@mui/material';
import React from 'react';

import './Plans.css';

class PlanItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
        this.state = { selected: this.props.selected };

        this.plan = props.plan;
        this.price = props.price;

        this.planSelected = this.planSelected.bind(this);

        if(this.props.price === 'Free') {
            this.price = ['Free', '']
        }
        else {
            this.price = props.price.split('/');
            this.price[1] = `/ ${this.price[1]}`;
        }
    }

    componentDidMount() {
        if(!this.state.selected) {
            this.selectButtonStyle = {
                border: '2px solid #F53838',
                borderRadius: '50px',
                color: '#F53838',
                backgroundColor: 'gray'
            }
            this.selectedPlanStyle = {
                borderColor: 'gray'
            }
        }
        else {
            this.selectButtonStyle = {
                border: '2px solid #F53838',
                borderRadius: '50px',
                color: 'white',
                backgroundColor: '#F53838'
            }
            this.selectedPlanStyle = {
                borderColor: '#F53838'
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.selected !== this.state.selected) {
            this.setState({selected: nextProps.selected});
            return true;
        }
        return false;
    }

    getPlanBenefits(plan) {
        let benefits = []
        plan.forEach((f, ind) => {
            benefits.push(<li className='list-item' key={`free-plan-${ind}`}>{f}</li>);
        });
        return benefits
    }

    planSelected() {
        this.setState({ selected: true });
        this.props.changePlan();

    }

    render() {
        if(!this.state.selected) {
            this.selectButtonStyle = {
                border: '2px solid #F53838',
                borderRadius: '50px',
                color: '#F53838'
            }
            this.selectedPlanStyle = {
                borderColor: 'gray'
            }
        }
        else {
            this.selectButtonStyle = {
                border: '2px solid #F53838',
                borderRadius: '50px',
                color: 'white',
                backgroundColor: 'red'
            }
            this.selectedPlanStyle = {
                borderColor: '#F53838'
            }
        }
        
        return (
            <div className='plan-content' style={this.selectedPlanStyle}>
                <div className='plan-top'>
                    <div className='plan-image'>
                        <img src={this.props.planImage} />
                    </div>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>{this.props.type}</Typography>
                    <div className='plan-benefits'>
                        <ul className='plan-points'>
                            {this.getPlanBenefits(this.plan)}
                        </ul>
                    </div>
                </div>
                <div className='pricings'>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{this.price[0]}<span className='per-month'>{this.price[1]}</span></Typography>
                    <Button variant='inherit' color='inherit' className='select-btn' sx={this.selectButtonStyle} onClick={this.planSelected}><strong>Select</strong></Button>
                </div>
            </div>
        )
    }
}

export default PlanItem;
