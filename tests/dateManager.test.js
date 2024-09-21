import { getCurrentDate, formatDate } from '../js/dateManager.js';

describe('dateManager', () => {
  describe('getCurrentDate', () => {
    test('should return a Date object', () => {
      const result = getCurrentDate();
      expect(result).toBeInstanceOf(Date);
    });

    test('should return the current date', () => {
      // Mock the current date
      const mockDate = new Date('2023-05-15T12:00:00Z');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = getCurrentDate();
      expect(result).toEqual(mockDate);

      // Restore the original Date implementation
      jest.restoreAllMocks();
    });
  });

  describe('formatDate', () => {
    test('should format the date correctly', () => {
      const sampleDate = new Date('2023-05-15T12:00:00Z');
      const result = formatDate(sampleDate);
      expect(result).toMatch(/^May 15, 2023(,| at) 12:00 PM$/); // Allowing for slight variations in format
    });

    test('should handle different locales', () => {
      const sampleDate = new Date('2023-05-15T12:00:00Z');
      
      // Mock different locales
      const locales = ['en-US', 'fr-FR', 'de-DE'];
      const expectedFormats = [
        /^May 15, 2023(,| at) 12:00 PM$/,
        /^15 mai 2023(,| à) 12:00$/,
        /^15\. Mai 2023(,| um) 12:00$/
      ];

      locales.forEach((locale, index) => {
        // Mock the Intl.DateTimeFormat to use the specific locale
        jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => ({
          format: () => new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          }).format(sampleDate)
        }));

        const result = formatDate(sampleDate);
        expect(result).toMatch(expectedFormats[index]);

        jest.restoreAllMocks();
      });
    });
  });
});

// TODO: Implement additional edge case tests for date formatting
// TODO: Add tests for error handling scenarios
// TODO: Ensure test coverage is adequate for all dateManager functions
// TODO: Add integration tests if dateManager interacts with other modules