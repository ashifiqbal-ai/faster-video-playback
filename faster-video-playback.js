const PLAYBACK_INCREMENT_RATE = 0.25, PLAYBACK_MAX_SPEED = 16, PLAYBACK_MIN_SPEED = 0.25;

const getListOfVideos = () => {
    return document.getElementsByTagName("video");
};

const videoPlayback = {
    faster : () => {
        const videos = getListOfVideos();
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            if (video.playbackRate === PLAYBACK_MAX_SPEED) continue;
            video.playbackRate = video.playbackRate + PLAYBACK_INCREMENT_RATE;
            chrome.runtime.sendMessage(video.playbackRate);
        }
    },
    slower : () => {
        const videos = getListOfVideos();
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            if (video.playbackRate === PLAYBACK_MIN_SPEED) continue;
            video.playbackRate = video.playbackRate - PLAYBACK_INCREMENT_RATE;
            chrome.runtime.sendMessage(video.playbackRate);
        }
    }
};

const FASTER_KEY = "+", SLOWER_KEY = "-";
document.addEventListener("keyup", (event) => {
    if (event.key === FASTER_KEY) {
        videoPlayback.faster();
    } else if (event.key === SLOWER_KEY){
        videoPlayback.slower();
    }
});