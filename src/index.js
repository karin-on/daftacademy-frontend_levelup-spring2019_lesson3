import './style.css';
import renderComponent from './clock/Component';
import { Clock } from "./clock/Clock";


renderComponent();
const clock = new Clock();
clock.setStartTime();
clock.startGenerators();
clock.startSeconds();
