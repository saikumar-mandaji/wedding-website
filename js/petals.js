// Floating Flower Petals Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create the petals container
    const petalsContainer = document.createElement('div');
    petalsContainer.className = 'petals-container';
    document.body.appendChild(petalsContainer);
    
    // Colors for the petals
    const colors = ['pink', 'white', 'gold'];
    
    // Create initial petals
    for (let i = 0; i < 20; i++) {
        createPetal();
    }
    
    // Create a petal every second
    setInterval(createPetal, 1000);
    
    // Create petals when scrolling to romantic sections
    const romanticSections = ['#fh5co-header', '#fh5co-event', '#fh5co-services'];
    
    window.addEventListener('scroll', function() {
        romanticSections.forEach(sectionId => {
            const section = document.querySelector(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                // If section is in view
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    createPetalBurst(5); // Create 5 petals in a burst
                }
            }
        });
    });
    
    function createPetal() {
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
        const duration = Math.random() * 10 + 10; // 10-20s
        petal.style.animation = `petal-fall ${duration}s linear forwards`;
        
        petalsContainer.appendChild(petal);
        
        // Remove petal after animation completes
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }
    
    function createPetalBurst(count) {
        // Get a random position in the viewport
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) + (window.innerHeight * 0.15);
        
        for (let i = 0; i < count; i++) {
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