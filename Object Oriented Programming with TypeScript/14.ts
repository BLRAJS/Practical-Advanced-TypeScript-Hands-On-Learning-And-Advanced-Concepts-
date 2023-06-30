abstract class GameObject {
    constructor(public x: number, public y: number) {}

    public abstract update(): void;

    public abstract render(): void;
}

interface Sprite {
    image: HTMLImageElement;
    width: number;
    height: number;
}

interface Sound {
    audio: HTMLAudioElement;
}

interface PhysicsObject {
    velocityX: number;
    velocityY: number;
    weight: number;
}

class SpriteObject extends GameObject implements Sprite {
    constructor(x: number, y: number, public image: HTMLImageElement, public width: number, public height: number) {
        super(x, y);
    }

    public update(): void {
        // Update sprite animation or movement
    }

    public render(): void {
        // Draw sprite image on canvas
    }
}

class SoundObject extends GameObject implements Sound {
    constructor(x: number, y: number, public audio: HTMLAudioElement) {
        super(x, y);
    }

    public update(): void {
        // Update sound playback or volume
    }

    public render(): void {
        // No rendering for sound object
    }
}

class PhysicsObjectImpl extends GameObject implements PhysicsObject {
    constructor(x: number, y: number, public velocityX: number, public velocityY: number, public weight: number) {
        super(x, y);
    }

    public update(): void {
        // Update physics calculations based on velocity and weight
    }

    public render(): void {
        // Draw physics object on canvas based on position and weight
    }
}
