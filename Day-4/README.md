# DAY 4

## GeoLocation

_Tag_: Web APIs (JavaScript)

The **Geolocation** API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

For more info, refer to the [GeoLocation documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) and [usage](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API) on MDN web docs.

### Useful points

- `Geolocation.getCurrentPosition()`: Retrieves the device's current location.

- `Geolocation.watchPosition()`: Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.
