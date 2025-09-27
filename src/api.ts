/**
 * Get the currently active routes
 * @param {string} auth Authentication to use for the request
 * @returns {Route[]} list of all active routes
 */
export async function getRoutes(auth: string) {
    var res = await fetch(`https://ridebtd.org/Services/JSONPRelay.svc/GetRoutesForMapWithScheduleWithEncodedLine?apiKey=${auth}&isDispatch=false`)
    
    return await res.json()
}

/**
 * get a list of all locations for all buses that are active
 * @param {string} auth authentication to use for the request
 * @returns {Vehicle[]} list of all locations for buses that are active
*/
export async function getMapVehicles(auth: string) {
    var res = await fetch(`https://ridebtd.org/Services/JSONPRelay.svc/GetMapVehiclePoints?apiKey=${auth}&isPublicMap=true`)
    
    return await res.json()
}

/**
 * get the next stop times for a given route(s)
 * @param {string[]} routes route ids to get stop times for
 * @param {string} auth authentication to use for the request
 * @returns {RouteStop[]} list of stop times for the given routes
*/
export async function getStopArrivalTimes(routes: string[], auth: string) {
    var res = await fetch(`https://ridebtd.org/Services/JSONPRelay.svc/GetStopArrivalTimes?apiKey=${auth}&routeIds=${routes.join(",")}&version=2`)
    
    return await res.json()
}

/**
 * get the announcements for route changes
 * @returns {Announcement[]} list of announcements
*/
export async function getAnnouncements() {
    var res = await fetch("https://ridebtd.org/Services/JSONPRelay.svc/GetTwitterJSON")
    
    return await res.json()
}
