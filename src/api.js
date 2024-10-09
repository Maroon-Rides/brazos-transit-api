/**
 * Get the currently active routes
 * @param {string} auth Authentication to use for the request
 * @returns {string[]} list of route names ("01", "04", etc.)
 */
export async function getBaseData(auth) {
    var res = await fetch(`https://ridebtd.org/Services/JSONPRelay.svc/GetRoutesForMapWithScheduleWithEncodedLine?apiKey=${auth}&isDispatch=false`)
    
    return await res.json()
}

/**
 * get a list of all locations for all buses that are active
 * @param {string} auth authentication to use for the request
 * @returns list of all locations for buses that are active
*/
export async function getVehicleLocations(auth) {
    var res = await fetch(`https://ridebtd.org/Services/JSONPRelay.svc/GetMapVehiclePoints?apiKey=${auth}&isPublicMap=true`)
    
    return await res.json()
}

/**
 * get the next stop times for a given route(s)
 * @param {string[]} routes route ids to get stop times for
 * @param {string} auth authentication to use for the request
 * @returns list of stop times for the given routes
*/
export async function getNextStopTimes(routes, auth) {
    var res = await fetch(`https://ridebtd.org/Services/JSONPRelay.svc/GetStopArrivalTimes?apiKey=${auth}&routeIds=${routes.join(",")}&version=2`)
    
    return await res.json()
}

/**
 * get the announcements for route changes
 * @returns list of announcements
*/
export async function getAnnouncements() {
    var res = await fetch("https://ridebtd.org/Services/JSONPRelay.svc/GetTwitterJSON")
    
    return await res.json()
}
