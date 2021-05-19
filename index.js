export default class PicoEmitter {
	constructor() {
		this._t = new EventTarget();
	}
	on(name, callback, options) {
		callback._ee_ = (e) => callback(null, e.detail.args);
		this._t.addEventListener(name, callback._ee_, options);
	}
	off(name, callback) {
		this._t.removeEventListener(name, callback._ee_);
	}
	emit(name, ...args) {
		this._t.dispatchEvent(new CustomEvent(name, {detail: {args}}));
	}
	once(name, callback) {
		this.on(name, callback, {once: true});
	}
}