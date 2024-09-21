/**
 * This module handles all date-related operations for the Hello World web application.
 * It provides functions to get the current date and format it for display.
 */

/**
 * Retrieves the current date as a Date object.
 * @returns {Date} A Date object representing the current date and time.
 */
function getCurrentDate() {
  // Create a new Date object representing the current date and time
  return new Date();
}

/**
 * Formats a given Date object into a human-readable string.
 * @param {Date} date - The date to format.
 * @returns {string} A formatted string representation of the date.
 */
function formatDate(date) {
  // Create a new Intl.DateTimeFormat object with the user's locale and desired options
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  });

  // Use the DateTimeFormat object to format the input date
  return dateFormatter.format(date);
}

// Export the functions for use in other modules
export { getCurrentDate, formatDate };

// TODO: Consider adding localization support for different languages and regions
// TODO: Evaluate the need for custom date formatting options based on user requirements