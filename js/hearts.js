// Floating Hearts Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create the hearts container
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-container';
    document.body.appendChild(heartsContainer);
    
    // Colors for the hearts
    const colors = ['#FF6B6B', '#FF9999', '#FFB3B3', '#FFC2C2', '#D46A6A', '#D10000'];
    
    // Set a maximum number of hearts allowed on screen at once
    const MAX_HEARTS = 12;
    
    // Create initial hearts (reduced from 12 to 5)
    for (let i = 0; i < 5; i++) {
        createHeart();
    }
    
    // Create a heart every 4 seconds (reduced frequency from 2s to 4s)
    setInterval(createHeart, 4000);
    
    // Create hearts when clicking on romantic elements
    document.body.addEventListener('click', function(e) {
        // Check if clicked element or parent has romantic class or attributes
        if (e.target.closest('.heart, .romantic-section, #fh5co-couple') || 
            e.target.classList.contains('heart') ||
            e.target.closest('#fh5co-header')) {
            createHeartBurst(3, e.clientX, e.clientY); // Reduced from 6 to 3 hearts per burst
        }
    });
    
    function createHeart() {
        // Check if we've reached the maximum number of hearts
        if (document.querySelectorAll('.floating-heart').length >= MAX_HEARTS) {
            return; // Don't create any more hearts
        }
        
        const heart = document.createElement('div');
        const size = Math.random() * 20 + 10; // 10-30px
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        heart.className = 'floating-heart';
        heart.innerHTML = '❤';
        heart.style.fontSize = `${size}px`;
        heart.style.color = colors[colorIndex];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = '-10vh';
        const opacity = (Math.random() * 0.4 + 0.4).toFixed(2); // 0.4-0.8 opacity
        heart.style.opacity = opacity;
        heart.style.setProperty('--opacity', opacity);
        heart.style.setProperty('--drift-factor', (Math.random() * 2 - 1).toFixed(2)); // Random drift factor between -1 and 1
        heart.style.setProperty('--rotation', (Math.random() * 360).toFixed(0) + 'deg'); // Random rotation
        
        // Set animation
        const duration = Math.random() * 8 + 12; // 12-20s
        heart.style.animation = `heart-float ${duration}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    function createHeartBurst(count, x, y) {
        // Check if we've reached the maximum number of hearts
        const currentHearts = document.querySelectorAll('.floating-heart').length;
        if (currentHearts >= MAX_HEARTS) {
            return; // Don't create any more hearts
        }
        
        // Adjust count if adding all would exceed the max
        const safeCount = Math.min(count, MAX_HEARTS - currentHearts);
        
        // Position is where the click happened, or random if not provided
        const posX = x || Math.random() * window.innerWidth;
        const posY = y || Math.random() * (window.innerHeight * 0.7) + (window.innerHeight * 0.15);
        
        for (let i = 0; i < safeCount; i++) {
            const heart = document.createElement('div');
            const size = Math.random() * 15 + 15; // 15-30px
            const colorIndex = Math.floor(Math.random() * colors.length);
            
            heart.className = 'floating-heart heart-burst';
            heart.innerHTML = '❤';
            heart.style.fontSize = `${size}px`;
            heart.style.color = colors[colorIndex];
            heart.style.left = `${posX}px`;
            heart.style.top = `${posY}px`;
            
            // Random angle for burst direction
            const angle = Math.random() * 360;
            const distance = Math.random() * 150 + 50;
            heart.style.setProperty('--angle', `${angle}deg`);
            heart.style.setProperty('--distance', `${distance}px`);
            
            heartsContainer.appendChild(heart);
            
            // Remove after animation completes
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }
});