import { Menu, Select, Button, TextField } from '@mui/material';


import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

import MenuItem from '@mui/material/MenuItem';

import './DatePicker.css';
import './DateRangePicker.css';

import React, { useRef, useState } from 'react';
import moment from 'moment';

function DatePicker(props) {

    const imageMaps = {
        'All Time': '/Images/Group.png',
        'Today': '/Images/Group 726.png',
        'Yesterday': '/Images/Group 727.png',
        'Last Week': '/Images/Group 728.png',
        'Last Month': '/Images/Group 729.png',
        'Custom': '/Images/Group 730.png'
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState('All Time');
    const [selectedImage, setSelectedImage] = useState(imageMaps['All Time']);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const inputElement = useRef(null);

    const open = Boolean(anchorEl);


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const menuSelected = (value) => {
        setSelectedImage(imageMaps[value]);
        if(value === 'Custom') {
            setValue(`Custom: ${startDate} - ${endDate}`);
            document.getElementById('picker-trigger').click();
        }
        else {
            let sdate = '';
            let edate = '';
            setValue(value);
            if(value === 'Today') {
                sdate = moment().format('DD/MM/YYYY');
                edate = moment().format('DD/MM/YYYY');
            }
            else if(value === 'Yesterday') {
                sdate = moment().subtract(1, 'day').format('DD/MM/YYYY');
                edate = moment().subtract(1, 'day').format('DD/MM/YYYY');
            }
            else if(value === 'Last Week') {
                sdate = moment().subtract(7, 'day').format('DD/MM/YYYY');
                edate = moment().subtract(7, 'day').format('DD/MM/YYYY');
            }
            else if(value === 'Last Month') {
                sdate = moment().subtract(1, 'months').format('DD/MM/YYYY');
                edate = moment().subtract(2, 'months').format('DD/MM/YYYY');
            }

            setStartDate(sdate);
            setEndDate(edate);    
        }
        handleClose();
    }

    const rangePickerStyle = {
        position: 'absolute',
        top: inputElement?.current?.offsetTop === undefined ? '0px' : `${inputElement.current.offsetTop + 40}px`,
        left: inputElement?.current?.offsetLeft === undefined ? '0px' : `${inputElement.current.offsetLeft  }px`,
    }

    const dateApplied = (event, picker) => {
        let sdate = picker.startDate.format('DD/MM/YYYY');
        let edate = picker.endDate.format('DD/MM/YYYY');
        setStartDate(sdate);
        setEndDate(edate);
        setValue(`Custom: ${sdate} - ${edate}`);
    }

    return (
        <div>
            <div className='date-picker'>
                <div className='date-label'>View Date for: </div>
                <div>
                    <DateRangePicker onApply={dateApplied} id='date-range-picker'>
                        <div id="picker-trigger" style={rangePickerStyle}></div>
                    </DateRangePicker>
                    <div id='basic-button' ref={inputElement} onClick={handleClick} className='select-input-handler'>
                        <span><img src={selectedImage} className='select-icon' /></span>{value}
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        className='menus'
                    >
                        <MenuItem className='menu-item' onClick={() => menuSelected('All Time')}>
                            <span><img src='/Images/Group.png' className='menu-image' /></span>All Time
                        </MenuItem>
                        <MenuItem onClick={() => menuSelected('Today')}>
                            <span><img src='/Images/Group 726.png' className='menu-image' /></span>Today
                        </MenuItem>
                        <MenuItem onClick={() => menuSelected('Yesterday')}>
                            <span><img src='/Images/Group 727.png' className='menu-image' /></span>Yesterday
                        </MenuItem>
                        <MenuItem onClick={() => menuSelected('Last Week')}>
                            <span><img src='/Images/Group 728.png' className='menu-image' /></span>Last Week
                        </MenuItem>
                        <MenuItem onClick={() => menuSelected('Last Month')}>
                            <span><img src='/Images/Group 729.png' className='menu-image' /></span>Last Month
                        </MenuItem>
                        <MenuItem onClick={() => menuSelected('Custom')}>
                            <span><img src='/Images/Group 730.png' className='menu-image' /></span>Custom
                        </MenuItem>
                    </Menu>
                </div>
            </div>

        </div>
    );
}

export default DatePicker;