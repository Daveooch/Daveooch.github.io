const videoContainers = document.querySelectorAll('.video-hover-container');

videoContainers.forEach(container => {
    const video = container.querySelector('.hover-video');

    container.addEventListener('mouseenter', () => {
        video.play();
    

    
});

container.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
});

});