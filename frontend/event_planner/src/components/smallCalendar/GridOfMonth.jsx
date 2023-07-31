import React from "react";

const GridOfMonth = function (props)
{
    let grid = []
    let checkDayIsToday = (new Date(new Date().getFullYear(), new Date().setMonth()) === new Date(props.useYear, props.useMonth)) ? new Date().getDate() : null;
    let startDayOfWeek = new Date(props.useYear, props.useMonth, 0).getDay()
    let countDaysInUseMonth = 33 - new Date(props.useYear, props.useMonth, 33).getDate()
    let countDaysInPreviousMonth = 33 - new Date(props.useYear, props.useMonth - 1, 33).getDate()

    /*
    // в зависимости от настроек (с какого дня начинается неделя) сдвигает значение
    if(startDayOfWeek === 0 && !(props.settings)) startDayOfWeek = 6;
    else if (!(props.settings)) startDayOfWeek--;
    */


    // создание сетки из 42 элементов и ее заполнение
    for (let i = 0; i < 43; i++) {
        let f = ""
        let value = 0;

        if(i < startDayOfWeek) value = countDaysInPreviousMonth - startDayOfWeek + i + 1 //предыдущий месяц
        else if(i >= startDayOfWeek + countDaysInUseMonth) value = i - startDayOfWeek - countDaysInUseMonth + 1 // следующий месяй
        else value = i - startDayOfWeek + 1 // текущий месяц

        if(checkDayIsToday !== null && i === startDayOfWeek + checkDayIsToday - 1) f = 'Today' // установка флага текущего дня
        grid.push({id: i, flagToday: f, value: value})
    }

    return(
        <div className="sc_gridOfMonth">
            {grid.map(day => (
                <a className={"sc_day " + day.flagToday} key={day.id}>{day.value}</a>
            ))}
        </div>
    )
}

export default GridOfMonth;
