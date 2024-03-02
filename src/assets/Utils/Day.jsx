import React from 'react'
import { useState, useEffect } from 'react';

const Day = () => {
    const [date, setDate] = useState(new Date());

    return (
      <div>
        <h1>{date.toDateString()}</h1>
     
      </div>
      )
}

export default Day