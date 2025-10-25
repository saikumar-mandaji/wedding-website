// Dynamically load gallery images from the shoot folder
document.addEventListener('DOMContentLoaded', function() {
    // List of images in the shoot folder - you can add more images here
    const galleryImages = [
        'images/shoot/WhatsApp Image 2025-10-25 at 10.48.31 PM.jpeg',
        'images/shoot/WhatsApp Image 2025-10-25 at 10.49.00 PM.jpeg',
        'images/shoot/WhatsApp Image 2025-10-25 at 10.49.41 PM.jpeg',
        'images/shoot/WhatsApp Image 2025-10-25 at 10.50.41 PM.jpeg'
    ];

    const galleryContainer = document.querySelector('.gallery-container');
    
    if (galleryContainer) {
        // Clear existing gallery items
        galleryContainer.innerHTML = '';
        
        // Create gallery items dynamically
        galleryImages.forEach((imagePath, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'col-md-6 col-sm-6 gallery-item animate-box';
            
            galleryItem.innerHTML = `
                <div class="gallery-box">
                    <a href="${imagePath}" class="gallery-link" title="Photoshoot ${index + 1}">
                        <img src="${imagePath}" alt="Photoshoot ${index + 1}" class="img-responsive gallery-img">
                        <div class="gallery-overlay">
                            <i class="icon-search"></i>
                        </div>
                    </a>
                </div>
            `;
            
            galleryContainer.appendChild(galleryItem);
        });
        
        // Reinitialize Magnific Popup for dynamically added elements
        if (typeof $.fn.magnificPopup !== 'undefined') {
            $('.gallery-link').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        }
    }
});
