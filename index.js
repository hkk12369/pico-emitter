export default class PicoEmitter {
	constructor() {
		try {
			this._t = new EventTarget();
		}
		catch (e) {
			// EventTarget not supported, use DOM as EventTarget
			this._t = document.createDocumentFragment();
		}
	}
	on(name, callback, options) {
		callback._p = (e) => callback.apply(null, e._p);
		this._t.addEventListener(name, callback._p, options);
	}
	off(name, callback) {
		this._t.removeEventListener(name, callback._p);
	}
	emit(name, ...args) {
		const e = new Event(name);
		e._p = args;
		this._t.dispatchEvent(e);
	}
	once(name, callback) {
		this.on(name, callback, {once: true});
	}
}