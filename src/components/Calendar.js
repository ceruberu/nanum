import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends React.Component {
  render() {
    console.log(this.props);
    return <DayPicker
      onDayClick={this.props.handleDayClick}
      selectedDays={this.props.selectedDay}
      disabledDays={
        [{
          daysOfWeek: this.props.modifyDaysOfWeek(this.props.daysOfWeek),
          before: new Date(this.props.start),
          after: new Date(this.props.end),
        }]
      }

    />
  }
}

export default Calendar;