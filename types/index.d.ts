// Type Definitions: API Return Data
declare module 'brazos-transit-api' {
    export interface Announcement {
        created_at: string;
        end_date: string;
        favorited: boolean;
        id: number;
        id_str: string | null;
        isAlert: boolean;
        isRideSystemsMessage: boolean;
        lang: string | null;
        retweeted: boolean;
        source: string | null;
        text: string;
        truncated: boolean;
    }

    export interface Stop {
        AddressID: number;
        City: string;
        Latitude: number;
        Line1: string;
        Line2: string;
        Longitude: number;
        State: string;
        Zip: string;
        Description: string;
        GtfsId: string;
        Heading: number;
        MapPoints: any[]; // Assuming this is an empty array, it can be replaced with a more specific type if needed
        MaxZoomLevel: number;
        Order: number;
        RouteDescription: string;
        RouteID: number;
        RouteStopID: number;
        SecondsAtStop: number;
        SecondsToNextStop: number;
        ShowDefaultedOnMap: boolean;
        ShowEstimatesOnMap: boolean;
        SignVerbiage: string;
        TextingKey: string;
    }
    
    export interface Route {
        Description: string;
        ETATypeID: number;
        EncodedPolyline: string;
        GtfsId: string;
        HideRouteLine: boolean;
        InfoText: string;
        IsCheckLineOnlyOnMap: boolean;
        IsCheckedOnMap: boolean;
        IsRunning: boolean;
        IsVisibleOnMap: boolean;
        Landmarks: any[]; // Assuming this is an empty array, it can be replaced with a more specific type if needed
        MapLatitude: number;
        MapLineColor: string;
        MapLongitude: number;
        MapZoom: number;
        Order: number;
        RouteID: number;
        RouteVehicleIcon: string;
        ShowPolygon: boolean;
        ShowRouteArrows: boolean;
        StopTimesPDFLink: string;
        Stops: Stop[];
        TextingKey: string;
        UseScheduleTripsInPassengerCounter: boolean;
        VehicleMarkerCssClass: string;
    }

    export interface Vehicle {
        GroundSpeed: number;
        Heading: number;
        IsDelayed: boolean;
        IsOnRoute: boolean;
        Latitude: number;
        Longitude: number;
        Name: string;
        RouteID: number;
        Seconds: number;
        TimeStamp: string; // Assuming this is a serialized Date object
        VehicleID: number;
    }

    interface TimeEstimate {
        EstimateTime: string; 
        IsArriving: boolean;
        IsDeparted: boolean;
        OnTimeStatus: number; 
        ScheduledArrivalTime: string; 
        ScheduledDepartureTime: string; 
        ScheduledTime: string;
        Seconds: number;
        Text: string | null;
        Time: string;
        VehicleId: number;
    }
    
    interface RouteStop {
        Color: string; 
        RouteDescription: string;
        RouteId: number; 
        RouteStopId: number;
        ShowDefaultedOnMap: boolean;
        ShowEstimatesOnMap: boolean;
        StopDescription: string; 
        StopId: number;
        Times: TimeEstimate[];
    }


    // Type Definitions: src/connection.js
    
    /**
     * Retreives API authentication information for the endpoints.
     * auth must be passed to each function int he `auth` parameter.
     * If no auth is passed, the function will attempt to retreive it.
     * @returns {string} - the header for authentication
     */
    export function getAuthentication(): Promise<string>

    // Type Definitions: src/api.js

    /**
     * Get the currently active routes
     * @param {string} auth Authentication to use for the request
     * @returns {Route[]} list of all active routes
     */
    export async function getBaseData(auth: string): Promise<Route[]> 

    /**
     * get a list of all locations for all buses that are active
     * @param {string} auth authentication to use for the request
     * @returns {Vehicle[]} list of all locations for buses that are active
    */
    export async function getVehicleLocations(auth: string): Promise<Vehicle[]>

    /**
     * get the next stop times for a given route(s)
     * @param {string[]} routes route ids to get stop times for
     * @param {string} auth authentication to use for the request
     * @returns {RouteStop[]} list of stop times for the given routes
    */
    export async function getNextStopTimes(routes: string[], auth: string): Promise<RouteStop[]>



    /**
     * get the announcements for route changes
     * @returns {Announcement[]} list of announcements
    */
    export async function getAnnouncements(): Promise<Announcement[]>

    // Type Definitions: src/utils.js


    /**
     * Converts a BTD date string to a moment.js object
     * @param {string} dateString - formatted as "/Date(1234)/"
     * @returns {moment.Moment | null} converted time
     */
    export function convertDateString(dateString: string): moment.Moment | null
}
