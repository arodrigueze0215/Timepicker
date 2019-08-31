const hoursRegex = /^([0-1]?[0-9]|2[0-3])$/;
const minutesRegex = /^([0-5]?[0-9])$/;
const regex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;

export default function extractTime(date, hasMeridiem) {
    if (!date)
        return fromDate(new Date(), hasMeridiem);
    else if (hoursRegex.test(date.hours) && minutesRegex.test(date.minutes) 
                && date.meridiem !== undefined 
                && date.meridiem.length > 0)
        return {hours: parseInt(date.hours), minutes: parseInt(date.minutes), meridiem: date.meridiem};
    else if (hoursRegex.test(date.hours) && minutesRegex.test(date.minutes))
        return {hours: parseInt(date.hours), minutes: parseInt(date.minutes)};
    else if (regex.test(date))
        return fromRegex(date);
    else if (date instanceof Date)
        return fromDate(date, hasMeridiem);
    else
        throw new TypeError(`INVALID FORMAT: {${JSON.stringify(date)}}.
            Time must be a Date or 'hh:MM' string or object with 'hours' and 'minutes' fields`);
}

function fromRegex(date) {
    const parsed = regex.exec(date);
    return {hours: parseInt(parsed[1]), minutes: parseInt(parsed[2])};
}

function fromDate(date, hasMeridiem) {
    if (hasMeridiem !== undefined && !hasMeridiem) return {hours: date.getHours(), minutes: date.getMinutes()};
    return getTimeWithMeridiem(date);

}

function getTimeWithMeridiem(date) {
    let meridiem = "";
    let hours = date.getHours();    
    
    if (hours < 13) meridiem = "am";
    else meridiem = "pm";
    
    if (hours !== 12) hours = hours % 12;
    
    return {hours, minutes: date.getMinutes(), meridiem};
}