import React from 'react';
import Calendar from './Calendar';
import DatePickerHeader from './Header';
import Range from './Range';


/*Smart Component*/
class DateRangePickerOld extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: Date.now(),
            selectionStart: 0,
            selectionEnd: 0
        }

        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.setRange = this.setRange.bind(this);
    }
    prevMonth(){
        let date = new Date(this.state.date);
        date.setMonth(date.getMonth() - 1);
        this.setState({date:date.getTime()});
    }
    nextMonth(){
        let date = new Date(this.state.date);
        date.setMonth(date.getMonth() + 1);
        this.setState({date:date.getTime()});
    }
    setRange(selectionStart = 0, selectionEnd = 0){
        this.setState({selectionStart, selectionEnd});
        this.props.startDate(new Date(selectionStart).toLocaleDateString());
        this.props.endDate(new Date(selectionEnd).toLocaleDateString());

    }
    render(){
       let {date, selectionStart, selectionEnd} = this.state;
       return (
            <div className="calendar">
                <DatePickerHeader date={date} prevMonth={this.prevMonth} nextMonth={this.nextMonth}/>
                <Calendar date={date}
                     indexStart = {selectionStart}
                     indexEnd = {selectionEnd}
                     setRange = {this.setRange}
                     />
            </div>
       )
    }
}

export default DateRangePickerOld;
