# DAY 2

## Local Storage

_Tag_: Web APIs (JavaScript)

The **localStorage** read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. **localStorage** data has no expiration time. **localStorage** data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.

For more info, refer to the [localStorage documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [usage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) on MDN web docs.

### Useful points

- Data in localStorage has no expiration date and is stored across browser sessions.

- The keys and the values stored with localStorage are always in the UTF-16 string format, which uses two bytes per character.

- The StorageEvent is fired whenever a change is made to the Storage object. This won't work on the same page that is making the changes — it is really a way for other pages on the domain using the storage to sync any changes that are made.

eg.

```javascript
window.addEventListener('storage', e => {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
});
```

- Commonly used methods are: getItem(_key_), setItem(_key_, _value_), removeItem(_key_) and clear(). All these methods access the storage object for that domain.
