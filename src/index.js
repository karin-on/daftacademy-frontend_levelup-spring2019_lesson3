import './style.css';
import { ClockComponent } from './clock/Component';
import { Clock } from "./clock/Clock";


const clockComponent = new ClockComponent();
clockComponent.render();

const clock = new Clock();
clock.setStartTime();
clock.startGenerators();
clock.startSeconds();


