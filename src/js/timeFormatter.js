import extractTime from "./timeExtractor";

export default function (time, hasMeridiem) {
    const extractedTime = extractTime(time, hasMeridiem);
    return (extractedTime.hours < 10 ? "0" + extractedTime.hours : extractedTime.hours)
        + ":" + (extractedTime.minutes < 10 ? "0" + extractedTime.minutes : extractedTime.minutes)
        + " "+ (extractedTime.meridiem !== undefined ? extractedTime.meridiem : "");
}