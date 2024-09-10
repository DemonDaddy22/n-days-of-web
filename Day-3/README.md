# DAY 3

## Session Storage

_Tag_: Web APIs (JavaScript)

The **sessionStorage** read-only property of the window interface allows you to access a Storage object for the Document's origin. **sessionStorage** data is cleared when the page session ends.

For more info, refer to the [sessionStorage documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and [usage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) on MDN web docs.

### Useful points

- Data is cleared when the page session ends.

- Data is specific to the protocol of the page. In particular, data stored by a script on a site accessed with HTTP (e.g., <http://example.com/>) is put in a different sessionStorage object from the same site accessed with HTTPS (e.g., <https://example.com/>)
