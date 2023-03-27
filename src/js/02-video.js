import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

onCurrentTime();
player.on('timeupdate', throttle(onTimeSet, 1000));

function onTimeSet (e){
    localStorage.setItem(TIME_KEY, e.seconds);
}
    
function onCurrentTime (){
    if(localStorage.getItem(TIME_KEY)){
        player.setCurrentTime(localStorage.getItem(TIME_KEY));
    }
 }


