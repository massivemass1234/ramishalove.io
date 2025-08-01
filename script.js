document.addEventListener('DOMContentLoaded', () => {
    // Music player functionality
    const audio = document.getElementById('bgMusic');
    const playPauseBtn = document.getElementById('playPause');
    let isPlaying = false;

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = '🎵 Play Music';
        } else {
            audio.play();
            playPauseBtn.textContent = '🎵 Pause Music';
        }
        isPlaying = !isPlaying;
    });

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('hearts-container').appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);

    // Interactive love message
    document.getElementById('sendLove').addEventListener('click', () => {
        const message = document.getElementById('loveMessage').value;
        if (message.trim()) {
            const notification = document.createElement('div');
            notification.classList.add('love-notification');
            notification.textContent = '💌 Message sent with love!';
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 3000);
            document.getElementById('loveMessage').value = '';
        }
    });

    // Add some animation to the header text
    const headerContent = document.querySelector('.header-content');
    headerContent.style.opacity = '0';
    headerContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        headerContent.style.transition = 'all 1s ease';
        headerContent.style.opacity = '1';
        headerContent.style.transform = 'translateY(0)';
    }, 500);
});
