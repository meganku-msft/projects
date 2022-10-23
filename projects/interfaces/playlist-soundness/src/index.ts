// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

export interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

export interface Album {
	songs: Song[];
	type: "album";
}

export interface Playlist {
	resolve(): Song[];
	type: "playlist";
}

export type Item = Song | Playlist | Album;

export type ReturnType = {
	artists: {
		[i: string]: string[];
	};
	songs: string[];
	time: number;
};

export function unrollPlaylist(items: Item[]): ReturnType {
	const results: ReturnType = {
		artists: {},
		songs: [],
		time: 0,
	};

	function addSong(song: Song) {
		const artistList =
			typeof song.artist === "string" ? [song.artist] : song.artist;
		for (let artist of artistList) {
			results.artists[artist] ??= [];
			results.artists[artist].push(song.name);
		}
		results.time += song.length;
		results.songs.push(song.name);
	}

	for (let item of items) {
		let songList: Song[];
		switch (item.type) {
			case "song":
				addSong(item);
				break;
			case "playlist":
				item.resolve().forEach(addSong);
				break;
			case "album":
				item.songs.forEach(addSong);
				break;
		}
	}
	return results;
}
