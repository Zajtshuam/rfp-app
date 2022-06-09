import React from 'react'
import "./css/Datetime.css"


var datetime = ()=>
{
    var showdate=new Date();
    var displaytodaysdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes()
    const myStyle = {
        color: "white",
        fontFamily: "Arial",
        position: 'absolute', left: '43%', bottom: '95%'
        
        
    }
    return(
        <div style = {myStyle}>
            <center>
                
            {dt} - {displaytime}
            </center>
        </div>
    );
}

export default datetime;