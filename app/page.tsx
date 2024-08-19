import React, { FunctionComponent } from "react";
import LeftBar from "@/components/main/LeftBar/LeftBar";
import Main from "@/components/main/Main/Main";
import RightBar from "@/components/main/RightBar/RightBar";
import BottomBar from "@/components/main/BottomBar/BottomBar";
import Providers from "@/provider/Providers";
import { fetchArtists } from "@/lib/fetchArtistList";
import { fetchPlaylists } from "@/lib/fetchPlaylistList";
import { fetchAlbums } from "@/lib/fetchAlbumList";


/**
 * The main component - this is a single-page-application, so there won't be any navigating.
 * @returns The entire site..
 */
const Home: FunctionComponent = async () => {
	const artistList = await fetchArtists();
	const playlistList = await fetchPlaylists();
	const albumList = await fetchAlbums();

	return (
		<Providers artistList={artistList} playlistList={playlistList} albumList={albumList}>
			<div className="h-screen w-screen flex flex-col bg-black text-white p-2">
				<div className="flex flex-1 gap-2 overflow-hidden">
					<LeftBar />
					<div className="flex-grow overflow-hidden">
						<Main />
					</div>
					<RightBar />
				</div>
				<div>
					<BottomBar />
				</div>
			</div>
		</Providers>

	);
}

export default Home;

