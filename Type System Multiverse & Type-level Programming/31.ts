type Event = "click" | "hover";
type EventPayload<T extends Event> = {
    type: T;
    payload: string;
};

type ClickPayload = EventPayload<"click">; // { type: "click", payload: string }
type HoverPayload = EventPayload<"hover">; // { type: "hover", payload: string }
