import React from 'react';

function getDate() {

    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    var date = month + '.' + day + '.' + year;

    return(
        <div className="date-wrapper"><b className="date-info">{date}</b></div>
    )
}

export default getDate