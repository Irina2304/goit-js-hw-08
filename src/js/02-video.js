import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
    const currentTime = evt.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);
