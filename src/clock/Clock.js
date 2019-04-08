import { Time } from "./Time";


export class Clock {
    constructor() {
        this.startTime = new Time();
        this.stopHours = 12;
        this.stopMinAndSec = 59;
        this.generator = function * (start, stop = this.stopMinAndSec) {
            for (let i = start; i <= stop ; i++) {
                yield i;
            }
        };
    }

    setStartTime() {
        this.startTime.getTime();
    }

    startGenerators() {
        this.hoursCounter = this.generator(this.startTime.hours, this.stopHours);
        this.minutesCounter = this.generator(this.startTime.minutes);
        this.secondsCounter = this.generator(this.startTime.seconds);

        this.hours = this.hoursCounter.next().value;
        this.minutes = this.minutesCounter.next().value;
        this.seconds = this.secondsCounter.next().value;

        this.printTime();
    }

    printTime() {
        const clockHours = document.querySelector('.clock__hours');
        const clockMinutes = document.querySelector('.clock__minutes');
        const clockSeconds = document.querySelector('.clock__seconds');

        clockHours.innerText = this.printTwoDigits(this.hours);
        clockMinutes.innerText = this.printTwoDigits(this.minutes);
        clockSeconds.innerText = this.printTwoDigits(this.seconds);
    }

    printTwoDigits(time) {
        return time.toString().padStart(2, '0');
    }

    changeMinutes() {
        if (this.seconds === 0) {
            if (this.minutes < this.stopMinAndSec) {
                this.minutes = this.minutesCounter.next().value;
            } else {
                this.minutesCounter = this.generator(0);
                this.minutes = this.minutesCounter.next().value;
            }
        }
    }

    changeHours() {
        if (this.seconds === 0 && this.minutes === 0) {
            if (this.hours < this.stopHours) {
                this.hours = this.hoursCounter.next().value;
            } else {
                this.hoursCounter = this.generator(0);
                this.hours = this.hoursCounter.next().value;
            }
        }
    }

    startSeconds() {
        setInterval(() => {
            this.seconds = this.secondsCounter.next().value;

            if (this.seconds === this.stopMinAndSec) {
                this.secondsCounter = this.generator(0);
            }

            // console.log((new Date()).getSeconds());

            this.changeMinutes();
            this.changeHours();
            this.printTime();
        }, 1000);
    }
}
