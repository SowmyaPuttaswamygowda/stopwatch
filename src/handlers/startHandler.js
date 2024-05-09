import data from '../data.js';
import dom from '../dom.js';
import updateTime from '../utils/updateTime.js';
import updateTimeComponent from '../components/updateTimeUnits.js';

const startHandler = () => {
    if (data.intervalId !== null) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }

    data.intervalId = setInterval(() => {
        const time = updateTime(data);
        updateTimeComponent(dom.time, time);
    }, 10);
};

export default startHandler;