export class ClockComponent {
    constructor() {
        this.wrapper = document.createElement('div');
    }

    render() {
        const { body } = document;
        this.wrapper.classList.add('wrapper');

        this.wrapper.innerHTML = `        
        <div class="clock">
            <span class="clock__hours"><span class="clock__placeholder">__</span></span>
            <span class="clock__colon">:</span>
            <span class="clock__minutes"><span class="clock__placeholder">__</span></span>
            <span class="clock__colon">:</span>
            <span class="clock__seconds"><span class="clock__placeholder">__</span></span>
        </div>
    `;

        body.appendChild(this.wrapper);
    }
}
