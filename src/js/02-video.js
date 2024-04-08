'use strict';
//Import
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//DOM
const iframe = document.querySelector('iframe#vimeo-player');
const iframePlayer = new Player(iframe);

//Take saved time from localStorage to player
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  iframePlayer.setCurrentTime(Number.parseFloat(currentTime));
}

//Throttle
const throttledOnPlay = throttle(onPlay, 1000);

//Save LocalStorage Data from player
iframePlayer.on('timeupdate', throttledOnPlay);

//Save LocalStorage Data from player
function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
