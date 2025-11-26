# API

## `capitalizeFirstLetter(str: string): string`

Capitalizes the first character of the given string.

**Parameters:**

- `str` – The string to modify.

**Returns:**

- The string with the first letter capitalized.

---

## `capitalizeLastLetter(str: string): string`

Capitalizes the last character of the given string.

**Parameters:**

- `str` – The string to modify.

**Returns:**

- The string with the last letter capitalized.

---

## `getFromStorage(key: string): any`

Retrieves a value from `localStorage` and parses it from JSON.

**Parameters:**

- `key` – The storage key.

**Returns:**

- The stored value, or `null` if not found.

---

## `setInStorage(key: string, value: any): void`

Stores a value in `localStorage` after converting it to JSON.

**Parameters:**

- `key` – The storage key.
- `value` – The value to store.

---

## `removeFromStorage(key: string): void`

Removes a value from `localStorage`.

**Parameters:**

- `key` – The storage key to remove.
