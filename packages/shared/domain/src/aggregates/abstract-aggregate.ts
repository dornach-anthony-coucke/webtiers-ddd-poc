export abstract class AbstractAggregate<EventType> {
  private _pending_events: EventType[] = [];

  protected abstract applyEvent<Event extends EventType>(event: Event): void;

  protected recordEvent(event: EventType): void {
    this._pending_events.push(event);
  }

  public getUncommittedEvents(): EventType[] {
    return this._pending_events;
  }

  public commitEvents(): void {
    this._pending_events = [];
  }

  public static rehydrate<
    AggregateId,
    TEventType,
    AggregateType extends AbstractAggregate<TEventType>
  >(
    this: new (aggregateId: AggregateId) => AggregateType,
    aggregateId: AggregateId,
    events: TEventType[]
  ): AggregateType {
    const aggregate = new this(aggregateId);
    for (const event of events) {
      aggregate.applyEvent(event);
    }
    return aggregate;
  }
}
