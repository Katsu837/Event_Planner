import React, {useState} from "react"
import GridOfMonth from "./GridOfMonth";

const SmallCalendar = function (props) {

    let tempDay = new Date().getDate();
    let tempDayOfWeek = new Date().getDay();
    let tempMonth = new Date().getMonth();
    let tempYear = new Date().getFullYear();
    let listOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let listOfDaysOfWeek = [
        {id: 0, name: "Mo"},
        {id: 1, name: "Tu"},
        {id: 2, name: "We"},
        {id: 3, name: "Th"},
        {id: 4, name: "Fr"},
        {id: 5, name: "Sa"},
        {id: 6, name: "Su"}
    ]

    /*
    if(props.settings) // поменять порядок дней недели (начало с воскресенья)
    {
        listOfDaysOfWeek = [
        {id: 0, name: "Su"},
        {id: 1, name: "Mo"},
        {id: 2, name: "Tu"},
        {id: 3, name: "We"},
        {id: 4, name: "Th"},
        {id: 5, name: "Fr"},
        {id: 6, name: "Sa"}
    ]
    }
    */

    //создание состояния месяца и года
    const [useMonth, setUseMonth] = useState(tempMonth)
    const [useYear, setUseYear] = useState(tempYear)

    function setNextMonth() // функция переключения месяца на следующий
    {
        if(useMonth === 11) {
            setUseMonth(0)
            setUseYear(useYear + 1)
        }
        else setUseMonth(useMonth + 1)
    }

    function setPreviousMonth() // функция переключения месяца на предыдущий
    {
        if(useMonth === 0) {
            setUseMonth(11)
            setUseYear(useYear - 1)
        }
        else setUseMonth(useMonth - 1)
    }

    return(
        <section className="SmallCalendar">

            <div className="SmallCalendarFirstLine">
                <button className="SC_PreviousMonth" onClick={setPreviousMonth}><img alt="Previous"/></button>
                <a className="SC_NameOfMonth">{listOfMonths[useMonth]} {useYear}</a>
                <button className="SC_NextMonth" onClick={setNextMonth}><img alt="Next"/></button>
            </div>

            <div className="SC_DaysOfWeek">
                {listOfDaysOfWeek.map(day => (
                    <a className={"SC_DayOfWeek " + day.name} key={day.id}>{day.name}</a>
                ))}
            </div>

            <GridOfMonth useMonth={useMonth} useYear={useYear}/>

        </section>
    )
}

export default SmallCalendar;
