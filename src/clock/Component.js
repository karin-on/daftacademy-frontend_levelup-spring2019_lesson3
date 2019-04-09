export default () => {
    const { body } = document;
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    wrapper.innerHTML = `        
        <div class="clock">
            <span class="clock__numbers" id="clock__hours">
                <span class="clock__placeholder">__</span>
            </span>
            <span class="clock__colon">:</span>
            <span class="clock__numbers" id="clock__minutes">
                <span class="clock__placeholder">__</span>
            </span>
            <span class="clock__colon">:</span>
            <span class="clock__numbers" id="clock__seconds">
                <span class="clock__placeholder">__</span>
            </span>
        </div>
    `;

    body.appendChild(wrapper);
}
