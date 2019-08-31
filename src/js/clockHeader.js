import {DOM} from "./meta/config";

export default class ClockHeader {

    constructor(config) {
        this.options = config.options;
        this.time = config.time;
        this.onHourClicked = config.onHourClicked;
        this.onMinutesClicked = config.onMinutesClicked;

        this.initView();
    }

    initView() {
        this.headerHours = document.getElementById(DOM.hoursId);
        this.headerHours.onclick = () => {
            this.toggleActiveToHours();
            this.onHourClicked();
        };

        this.headerMinutes = document.getElementById(DOM.minutesId);
        this.headerMinutes.onclick = () => {
            this.toggleActiveToMinutes();
            this.onMinutesClicked();
        };
        if (this.options.meridiem) {
            this.headerAm = document.getElementById(DOM.gTimeAmId);
            this.headerPm = document.getElementById(DOM.gTimePmId);
            this.headerAm.onclick = () => {
                this.toogleActiveMeridiemAm();
                this.time.meridiem = "am";
            };
            this.headerPm.onclick = () => {
                this.toogleActiveMeridiemPm();
                this.time.meridiem = "pm";
            };
            if (this.time.meridiem === "am") this.toogleActiveMeridiemAm();
            else if (this.time.meridiem === "pm") this.toogleActiveMeridiemPm();
            else this.defaultToggleActiveMeridiem();
        }

        this.updateDisplayedTime();
        this.toggleActiveToHours();
    }

    toggleActiveToMinutes() {
        this.toggleActive(this.headerHours, this.headerMinutes);
    }

    toggleActiveToHours() {
        this.toggleActive(this.headerMinutes, this.headerHours);
    }

    toogleActiveMeridiemAm() {
        this.toggleActive(this.headerPm, this.headerAm);
        
    }

    toogleActiveMeridiemPm() {
        this.toggleActive(this.headerAm, this.headerPm);
    }
    
    defaultToggleActiveMeridiem() {
        const { hours } = this.time;
        if (hours < 13) this.toogleActiveMeridiemAm();
        else this.toogleActiveMeridiemPm();
    }

    toggleActive(objectToRemoveClass, objectToAddClass) {
        objectToRemoveClass.style.color = this.options.headerColor;
        objectToAddClass.style.color = this.options.headerSelected;
    }

    updateDisplayedTime() {
        ClockHeader.doUpdateDisplayedTime(this.headerHours, this.time.hours, this.options.meridiem);
        ClockHeader.doUpdateDisplayedTime(this.headerMinutes, this.time.minutes);
    }

    static doUpdateDisplayedTime(node, value, meridiem) {
        if (meridiem && value !== 12) value = value % 12;
        if (value < 10)
            node.innerText = "0" + value;
        else node.innerText = value;
    }
}