## pico-emitter
Extremely tiny (< 300 bytes or 0.3 k) event emitter.


`pico-emitter` utilizes native `EventTarget` and `Event` to provide performant and small implementation.

## Install
```sh
npm install pico-emitter
# OR
yarn add pico-emitter
```

## Usage

```js
import Emitter from 'pico-emitter';

const emitter = new Emitter();
emitter.on('hello', (who, what) => console.log(`${who} is ${what}`));
emitter.emit('hello', 'pico-emitter', 'best');
```

## API
```js
// Create an emitter
const emitter = new Emitter();

// Subscribe a callback to an event
// This callback will be called when the event is emitted
emitter.on(event, callback);

// Subscribe to an event only once (will be removed after first calling)
emitter.once(event, callback);

// Emit an event
// This will call all the subscribers with arguments
emitter.emit(event, ...arguments);

// Unsubscribe from an event
// callback must be the same as given in .on
emitter.off(event, callback);
```