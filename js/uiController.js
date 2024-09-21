// Import the necessary functions from the dateManager module
import { getCurrentDate, formatDate } from './dateManager.js';

/**
 * Updates the date display element with the current formatted date.
 */
function updateDateDisplay() {
  try {
    // Get the current date
    const currentDate = getCurrentDate();
    
    // Format the date
    const formattedDate = formatDate(currentDate);
    
    // Get the date display element from the DOM
    const dateDisplayElement = document.getElementById('date-display');
    
    // Update the text content of the date display element
    if (dateDisplayElement) {
      dateDisplayElement.textContent = formattedDate;
    } else {
      console.error('Date display element not found in the DOM');
    }
  } catch (error) {
    console.error('Error updating date display:', error);
  }
}

/**
 * Handles the click event on the refresh button, updating the date display.
 */
function handleRefreshClick() {
  updateDateDisplay();
  
  // TODO: Add visual feedback for refresh action (e.g., button animation)
}

/**
 * Initializes the user interface by setting up event listeners and updating the initial date display.
 */
function initializeUI() {
  // Set the initial date
  updateDateDisplay();
  
  // Get the refresh button element from the DOM
  const refreshButton = document.getElementById('refresh-button');
  
  // Add a click event listener to the refresh button
  if (refreshButton) {
    refreshButton.addEventListener('click', handleRefreshClick);
    
    // Add keyboard accessibility for the refresh button
    refreshButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleRefreshClick();
      }
    });
  } else {
    console.error('Refresh button element not found in the DOM');
  }
  
  // TODO: Evaluate the need for additional UI initialization tasks
}

// Export the initializeUI function
export { initializeUI };

// TODO: Implement unit tests for UI controller functions
// TODO: Consider adding more advanced UI features like animations or transitions
// TODO: Evaluate the need for a more robust state management solution if the application grows