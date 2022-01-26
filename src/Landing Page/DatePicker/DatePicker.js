import { Menu, Select, Button, TextField } from '@mui/material';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import './DatePicker.css';
import './DateRangePicker.css';

import React, { useRef, useState } from 'react';
import DateRangePicker from './DateRangePicker';

function DatePicker(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState('All Time');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const inputElement = useRef(null);

    const open = Boolean(anchorEl);

    const [isDateSelected, setIsDateSelected] = useState(false);

    var rangePicker = (
        <DateRangePicker startDate={ (date) => {
                setStartDate(date);
                setValue(`Custom: ${startDate} - ${endDate}`) ;
            } } endDate={(date) => {
                setEndDate(date);
                setValue(`Custom: ${startDate} - ${endDate}`);
            } } 
        />
    );

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const menuSelected = (value) => {
        if(value === 'Custom') {
            setValue(`Custom: ${startDate} - ${endDate}`);
            // rangePicker = <DateRangePicker />
            setIsDateSelected(true);
        }
        else {
            setValue(value);
            setStartDate('');
            setEndDate('');
            setIsDateSelected(false);    
        }
        handleClose();
    }

    const rangePickerStyle = {
        position: 'absolute',
        top: inputElement?.current?.offsetTop === undefined ? '0px' : `${inputElement.current.offsetTop + 40}px`,
        left: inputElement?.current?.offsetLeft === undefined ? '0px' : `${inputElement.current.offsetLeft - 25}px`,
    }

    return (
        <div>
            <div className='date-picker'>
                <div className='date-label'>View Date for: </div>
                {/* <img src='/Images/Group 730.png' /> */}
                <div>
                    <TextField
                        id="basic-button"
                        ref={inputElement}
                        value={value}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        size='small'
                        contentEditable={false}
                        className='view-data'
                    >
                    </TextField>

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
            { isDateSelected ? <div style={rangePickerStyle}>{rangePicker}</div> : '' }
        </div>
    );
}

export default DatePicker;