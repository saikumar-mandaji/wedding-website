// Floating Hearts Animation (formerly Petals)
document.addEventListener('DOMContentLoaded', function() {
    // Create the petals container (kept name for CSS compatibility)
    const petalsContainer = document.createElement('div');
    petalsContainer.className = 'petals-container';
    document.body.appendChild(petalsContainer);
    
    // Colors for the hearts
    const colors = ['#FF6B6B', '#FFB3B3', '#FFC2C2', '#FFD700', '#FFFFFF'];
    
    // Set a maximum number of hearts allowed on screen at once
    const MAX_PETALS = 20;
    
    // Create initial petals - reduced from 20 to 8
    for (let i = 0; i < 8; i++) {
        createPetal();
    }
    
    // Create a petal every 3 seconds instead of every second
    setInterval(createPetal, 3000);
    
    // Create petals when scrolling to romantic sections
    const romanticSections = ['#fh5co-header', '#fh5co-event', '#fh5co-services'];
    
    window.addEventListener('scroll', function() {
        romanticSections.forEach(sectionId => {
            const section = document.querySelector(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                // If section is in view
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    createPetalBurst(2); // Reduced from 5 to 2 petals in a burst
                }
            }
        });
    });
    
    function createPetal() {
        // Check if we've reached the maximum number of hearts
        if (document.querySelectorAll('.petal').length >= MAX_PETALS) {
            return; // Don't create any more hearts
        }
        
        const petal = document.createElement('div');
        const size = Math.random() * 20 + 10; // 10-30px
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        petal.className = `petal`; // Keep petal class for CSS compatibility
        petal.innerHTML = '❤';
        petal.style.fontSize = `${size}px`;
        petal.style.color = colors[colorIndex];
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.top = '-10vh';
        petal.style.opacity = (Math.random() * 0.4 + 0.4).toFixed(2); // 0.4-0.8 opacity
        petal.style.setProperty('--drift-factor', (Math.random() * 2 - 1).toFixed(2)); // Random drift factor between -1 and 1
        petal.style.setProperty('--rotation', (Math.random() * 360).toFixed(0) + 'deg'); // Random rotation
        
        // Set animation
        const duration = Math.random() * 10 + 15; // 10-25s
        petal.style.animation = `petal-fall ${duration}s linear forwards`;
        
        petalsContainer.appendChild(petal);
        
        // Remove heart after animation completes
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }
    
    function createPetalBurst(count) {
        // Check if we've reached the maximum number of hearts
        const currentPetals = document.querySelectorAll('.petal').length;
        if (currentPetals >= MAX_PETALS) {
            return; // Don't create any more hearts
        }
        
        // Adjust count if adding all would exceed the max
        const safeCount = Math.min(count, MAX_PETALS - currentPetals);
        
        // Get a random position in the viewport
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) + (window.innerHeight * 0.15);
        
        for (let i = 0; i < safeCount; i++) {
            const petal = document.createElement('div');
            const size = Math.random() * 15 + 8; // 8-23px
            const colorIndex = Math.floor(Math.random() * colors.length);
            
            petal.className = `petal petal-burst`; // Keep petal class for CSS compatibility
            petal.innerHTML = '❤';
            petal.style.fontSize = `${size}px`;
            petal.style.color = colors[colorIndex];
            petal.style.left = `${x}px`;
            petal.style.top = `${y}px`;
            
            // Random angle for burst direction
            const angle = Math.random() * 360;
            const distance = Math.random() * 100 + 50;
            petal.style.setProperty('--angle', `${angle}deg`);
            petal.style.setProperty('--distance', `${distance}px`);
            
            petalsContainer.appendChild(petal);
            
            // Remove after animation completes
            setTimeout(() => {
                petal.remove();
            }, 4000);
        }
    }
});