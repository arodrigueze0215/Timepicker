
export default (options) => {
    const arrayTemplate = ["<section class='g-time-wrapper'>" ,
        "    <header class='g-head g-flex' id='g-head'>" ,
        "        <section class='g-head-content'>" ,
        "            <span class='g-current g-hour g-active g-pointer' id='g-hours'>21</span>" ,
        "            <span class='g-current'>:</span>" ,
        "            <span class='g-current g-minute g-pointer' id='g-minutes'>37</span>"];
    if (options.meridiem){
        arrayTemplate.push(["<div class='content-meridiem'>" ,
            "<span id='g-time-am' class='item-meridiem g-am g-pointer'>AM</span>" ,
            "<span id='g-time-pm' class='item-meridiem g-pm g-pointer'>PM</span>",
            "</div>"].join("\n"));
        
    }
    const nextTemplate = ["        </section>" ,
        "    </header>" ,
        "" ,
        "" ,
        "    <section class='g-clock-wrapper g-flex' id='g-clock-wrapper'>" ,
        "        <div class='g-clock' id='g-clock'>" ,
        "            <span class='g-middle-dot' id='g-middle-dot'></span>" ,
        "            <div class='g-hand-of-a-clock' id='g-hand-of-a-clock'></div>" ,
        "            <div class='g-clock g-clock-inner' id='g-clock-inner'></div>" ,
        "        </div>" ,
        "    </section>" ,
        "" ,
        "" ,
        "    <footer class='g-buttons g-flex' id='g-buttons'>"];

    nextTemplate.push(`
        <button id='g-time-cancel' class='g-button g-cancel g-pointer'>${options.labels.cancel || ""}</button>
        <button id='g-time-submit' class='g-button g-submit g-pointer'>${options.labels.ok || ""}</button>
    `);
    nextTemplate.push("</footer> </section>");
    return arrayTemplate.concat(nextTemplate).join("\n");
};