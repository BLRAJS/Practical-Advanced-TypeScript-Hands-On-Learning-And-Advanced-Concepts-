type Playlist<T> = T extends infer U ? { value: U, children?: Playlist<U>[] } : never;

const playlist: Playlist<string> = {
    value: 'My Playlist',
    children: [
        {
            value: 'Classical Music',
            children: [
                { value: 'Mozart - Symphony No. 40' },
                { value: 'Beethoven - Moonlight Sonata' }
            ]
        },
        {
            value: 'Rock Music',
            children: [
                { value: 'The Beatles - Let It Be' },
                { value: 'Led Zeppelin - Stairway to Heaven' },
                {
                    value: 'Alternative Rock',
                    children: [
                        { value: 'Nirvana - Smells Like Teen Spirit' },
                        { value: 'Pearl Jam - Jeremy' }
                    ]
                }
            ]
        }
    ]
};

function traversePlaylist<T>(playlist: Playlist<T>, callback: (value: T) => void): void {
    callback(playlist.value);
    if (playlist.children) {
        playlist.children.forEach(child => traversePlaylist(child, callback));
    }
}

traversePlaylist(playlist, console.log); // prints "My Playlist", "Classical Music", "Mozart - Symphony No. 40", "Beethoven - Moonlight Sonata", "Rock Music", "The Beatles - Let It Be", "Led Zeppelin - Stairway to Heaven", "Alternative Rock", "Nirvana - Smells Like Teen Spirit", "Pearl Jam - Jeremy"
