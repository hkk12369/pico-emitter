declare class PicoEmitter {
	on(event: string, callback: Function, options?: any): this;
	once(event: string, callback: Function): this;
	emit(event: string, ...args: any[]): this;
	off(event: string, callback: Function): this;
}

export default PicoEmitter;
