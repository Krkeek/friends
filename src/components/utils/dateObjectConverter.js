
export const convertToDateObject = (dateString)=> {
    const [day,month,year] = dateString.split('.');
    return new Date(year, month-1, day);
}


export const sortData = (eventsData)=> {

    if (eventsData.length === 0) {
        return [];
    }

    const clonedData = [...eventsData];
    return clonedData.sort((eventA, eventB) => {
        const dateA = convertToDateObject(eventA.date);
        const dateB = convertToDateObject(eventB.date);
        return dateA - dateB
    })

}

export const convertedDateFormat = (date)=> {
    const inputDate = new Date(date);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
    const year = inputDate.getFullYear();

    return `${day}.${month}.${year}`;

}

export const convertDateBack = (date)=> {
    const inputDate = convertToDateObject(date)
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
    const year = inputDate.getFullYear();
    return `${year}-${month}-${day}`;

}