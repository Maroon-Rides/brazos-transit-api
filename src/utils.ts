import moment from "moment";

/**
 * Converts a BTD date string to a moment.js object
 * @param {string} dateString - formatted as "/Date(1234)/"
 * @returns {moment.Moment | null} converted time
 */
export function convertDateString(dateString: string): moment.Moment | undefined {
    // Extract the timestamp from the string using a regular expression
    const match = dateString.match(/\/Date\((\d+)\)\//);
    
    if (match) {
        // Convert the extracted timestamp string to a number
        const timestamp = parseInt(match[1], 10);
        
        // Create a Moment.js object from the timestamp
        return moment(timestamp);
    }

    return undefined;
}