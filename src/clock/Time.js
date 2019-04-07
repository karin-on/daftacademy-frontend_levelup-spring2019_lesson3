export class Time {
    constructor() {
        this.date = new Date();
    }

    getTime() {
        this.hours = this.date.getHours() > 12 ?
            this.date.getHours() - 12 :
            this.date.getHours();

        //fake hour
        // const fakeHour = 0;
        // this.hours = fakeHour > 12 ? fakeHour - 12 : fakeHour;

        this.minutes = this.date.getMinutes();
        // this.minutes = 59;

        this.seconds = this.date.getSeconds();
    }
}


