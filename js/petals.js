// Floating Flower Petals Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create the petals container
    const petalsContainer = document.createElement('div');
    petalsContainer.className = 'petals-container';
    document.body.appendChild(petalsContainer);
    
    // Colors for the petals
    const colors = ['pink', 'white', 'gold'];
    
    // Set a maximum number of petals allowed on screen at once
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
        // Check if we've reached the maximum number of petals
        if (document.querySelectorAll('.petal').length >= MAX_PETALS) {
            return; // Don't create any more petals
        }
        
        const petal = document.createElement('div');
        const size = Math.random() * 20 + 10; // 10-30px
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        
        petal.className = `petal ${colorClass}`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.top = '-10vh';
        petal.style.setProperty('--drift-factor', (Math.random() * 2 - 1).toFixed(2)); // Random drift factor between -1 and 1
        
        // Set animation
        const duration = Math.random() * 10 + 15; // 10-25s (increased to make them stay longer but fewer)
        petal.style.animation = `petal-fall ${duration}s linear forwards`;
        
        petalsContainer.appendChild(petal);
        
        // Remove petal after animation completes
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }
    
    function createPetalBurst(count) {
        // Check if we've reached the maximum number of petals
        const currentPetals = document.querySelectorAll('.petal').length;
        if (currentPetals >= MAX_PETALS) {
            return; // Don't create any more petals
        }
        
        // Adjust count if adding all would exceed the max
        const safeCount = Math.min(count, MAX_PETALS - currentPetals);
        
        // Get a random position in the viewport
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) + (window.innerHeight * 0.15);
        
        for (let i = 0; i < safeCount; i++) {
            const petal = document.createElement('div');
            const size = Math.random() * 15 + 8; // 8-23px
            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            
            petal.className = `petal petal-burst ${colorClass}`;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
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