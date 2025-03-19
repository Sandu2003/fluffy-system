// This file contains JavaScript functionality for the website, including event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Event listener for a button click
    const button = document.getElementById('exampleButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Example: Function to dynamically load featured items
    function loadFeaturedItems() {
        const featuredItemsContainer = document.getElementById('featuredItems');
        // Simulated data fetching
        const items = [
            { id: 1, name: 'Used Bicycle', price: '$150' },
            { id: 2, name: 'Vintage Camera', price: '$200' },
            { id: 3, name: 'Second-hand Laptop', price: '$300' }
        ];

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `<h3>${item.name}</h3><p>Price: ${item.price}</p>`;
            featuredItemsContainer.appendChild(itemElement);
        });
    }

    loadFeaturedItems();
});