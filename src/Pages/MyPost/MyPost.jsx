import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './index.css'; // Ensure to import Tailwind and additional styles

const MyPost = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="w-full h-14 flex items-center justify-center">
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                className="w-full h-full px-3 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                dateFormat="yyyy-MM-dd" // Only display date in YYYY-MM-DD format
                selectsStart
                placeholderText="Select a date"
            />
            <p className="mt-4">Selected Date: {startDate.toISOString().split('T')[0]}</p>
        </div>
    );
};

export default MyPost;
