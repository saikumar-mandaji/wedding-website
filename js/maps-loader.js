// Initialize maps using Leaflet
document.addEventListener('DOMContentLoaded', function() {
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.warn('Leaflet library not loaded');
        return;
    }

    // Thimmapur coordinates
    const thimmapurCoords = [19.04841110310464, 79.08136686975504]; // Latitude, Longitude
    const maskapurCoords = [19.03004184973851, 78.64549052512542]; // Maskapur coordinates

    // Initialize Thimmapur map
    const thimmapurMap = L.map('thimmapur-map').setView(thimmapurCoords, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(thimmapurMap);

    // Add marker for Thimmapur
    L.marker(thimmapurCoords).addTo(thimmapurMap)
        .bindPopup('<b>Wedding Ceremony</b><br>Thimmapur<br>30 Oct 2025, 10:59 AM')
        .openPopup();

    // Initialize Maskapur map
    const maskapurMap = L.map('maskapur-map').setView(maskapurCoords, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(maskapurMap);

    // Add marker for Maskapur
    L.marker(maskapurCoords).addTo(maskapurMap)
        .bindPopup('<b>Reception Celebration</b><br>Maskapur<br>31 Oct 2025, 3:00 PM')
        .openPopup();
});
