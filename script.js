document.getElementById('reveal-btn').addEventListener('click', function() {
    const message = document.getElementById('hidden-message');
    message.classList.remove('hidden');
    this.style.display = 'none'; // Sembunyikan tombol setelah diklik
    
    // Mulai buat hujan hati
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}