export type EventMap = {
  launch: string;
  shutdown: number;
};

export class SimpleEventEmitter<T extends EventMap> {
  private events: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    const handlers = this.events[eventName] ?? [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    this.events[eventName]?.forEach((callback) => {
      callback(data);
    });
  }
}
