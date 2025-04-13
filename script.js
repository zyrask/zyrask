// JavaScript to toggle between different tabs
function showTab(tabIndex) {
    // Get all tabs and tab contents
    const allTabs = document.querySelectorAll('.tab-content');
    const allTabButtons = document.querySelectorAll('.tab');

    // Hide all tab contents
    allTabs.forEach(tab => tab.classList.remove('active-tab'));

    // Remove active class from all tab buttons
    allTabButtons.forEach(button => button.classList.remove('active'));

    // Show the clicked tab content
    const activeTab = document.getElementById('tab' + tabIndex);
    activeTab.classList.add('active-tab');

    // Add active class to the clicked tab button for styling
    const activeTabButton = document.querySelectorAll('.tab')[tabIndex - 1];
    activeTabButton.classList.add('active');
}

// Set the default tab to be open when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showTab(1); // Set the first tab as active by default
});
