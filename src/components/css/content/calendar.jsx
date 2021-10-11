
import React, {useState} from 'react';
import { ContentBox } from './set_default';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function ExchangeDate () {
    return(
        <>
            <ContentBox>
                <h3>수령일</h3>
                <DatePickerInput />
            </ContentBox>
        </>
    );
}

const DatePickerInput = () => {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          showDisabledMonthNavigation
          withPortal
        />
      );
}


export default ExchangeDate;
