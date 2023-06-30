abstract class AudioFile {
    constructor(public name: string, public size: number) {}

    public abstract play(): void;
}

interface Decoder {
    decode(): void;
}

interface Player {
    play(): void;
}

interface Encoder {
    encode(): void;
}

class MP3File extends AudioFile implements Decoder, Player, Encoder {
    constructor(name: string, size: number, public bitrate: number) {
        super(name, size);
    }

    public decode(): void {
        // Decode MP3 file using specific algorithm
    }

    public play(): void {
        // Play MP3 file using specific player
    }

    public encode(): void {
        // Encode MP3 file using specific algorithm
    }
}

class WAVFile extends AudioFile implements Decoder, Player {
    constructor(name: string, size: number, public bitrate: number) {
        super(name, size);
    }

    public decode(): void {
        // Decode WAV file using specific algorithm
    }

    public play(): void {
        // Play WAV file using specific player
    }
}

class FLACFile extends AudioFile implements Decoder, Player, Encoder {
    constructor(name: string, size: number, public compression: number) {
        super(name, size);
    }

    public decode(): void {
        // Decode FLAC file using specific algorithm
    }

    public play(): void {
        // Play FLAC file using specific player
    }

    public encode(): void {
        // Encode FLAC file using specific algorithm
    }
}
