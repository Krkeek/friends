
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