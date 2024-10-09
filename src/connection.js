/**
 * Retreives API authentication information for the endpoints.
 * auth must be passed to each function int he `auth` parameter.
 * If no auth is passed, the function will attempt to retreive it.
 * @returns {string} - the api key for authentication
 */
export async function getAuthentication() {
    var res = await fetch("https://ridebtd.org/Services/JSONPRelay.svc/GetMapConfig")

    return (await res.json()).ApiKey
}