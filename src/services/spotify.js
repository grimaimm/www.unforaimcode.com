import axios from "axios";
import querystring from "querystring";
import { PAIR_DEVICES } from "@/common/constant/Devices";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const TOKEN = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");
const BASE_URL = "https://api.spotify.com/v1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const endpoints = {
  devices: `${BASE_URL}/me/player/devices`,
  nowPlaying: `${BASE_URL}/me/player/currently-playing`,
  topTracks: `${BASE_URL}/me/top/tracks`,
};

// const getAccessToken = async () => {
//   const { data } = await axios.post(
//     TOKEN_ENDPOINT,
//     querystring.stringify({
//       grant_type: "refresh_token",
//       refresh_token: SPOTIFY_REFRESH_TOKEN,
//     }),
//     {
//       headers: {
//         Authorization: `Basic ${TOKEN}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );
//   return data.access_token;
// };

const getAccessToken = async () => {
  try {
    const { data } = await axios.post(
      TOKEN_ENDPOINT,
      querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
      {
        headers: {
          Authorization: `Basic ${TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response ? error.response.data : error.message);
    // Anda bisa menambahkan logika retry di sini jika perlu
    throw new Error("Failed to fetch access token");
  }
};


const fetchFromSpotify = async (endpoint, token) => {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(`Error fetching from Spotify at ${endpoint}:`, error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch data from Spotify");
  }
};


const handleResponse = (response) => {
  const { status, data } = response;
  if (status === 204 || status > 400) return { status, data: [] };
  return { status, data };
};

// export const getAvailableDevices = async () => {
//   const access_token = await getAccessToken();
//   const response = await fetchFromSpotify(endpoints.devices, access_token);
//   const { status, data } = handleResponse(response);

//   const devices =
//     data.devices?.map((device) => ({
//       name: device.name,
//       is_active: device.is_active,
//       type: device.type,
//       model: PAIR_DEVICES[device?.type]?.model || "Unknown Device",
//       id: PAIR_DEVICES[device?.type]?.id || "aiiimmmm-device",
//     })) || [];

//   return { status, data: devices };
// };

// export const getNowPlaying = async () => {
//   const access_token = await getAccessToken();
//   const response = await fetchFromSpotify(endpoints.nowPlaying, access_token);
//   const { status, data } = handleResponse(response);

//   if (!data.item) return { status, isPlaying: false, data: null };

//   const isPlaying = data.is_playing;
//   const album = data.item.album.name ?? "";
//   const albumImageUrl = data.item.album.images?.find(
//     (img) => img.width === 640
//   )?.url;
//   const artist =
//     data.item.artists.map((artist) => artist.name).join(", ") ?? "";
//   const songUrl = data.item.external_urls.spotify ?? "";
//   const title = data.item.name ?? "";

//   return {
//     status,
//     isPlaying,
//     data: {
//       album,
//       albumImageUrl,
//       artist,
//       songUrl,
//       title,
//     },
//   };
// };

// export const getTopTracks = async () => {
//   const access_token = await getAccessToken();
//   const response = await fetchFromSpotify(
//     `${endpoints.topTracks}?limit=10`,
//     access_token
//   );
//   const { status, data } = handleResponse(response);

//   const tracks = data.items.map((track) => ({
//     album: {
//       name: track.album.name,
//       image: track.album.images.find((img) => img.width === 64),
//     },
//     artist: track.artists.map((artist) => artist.name).join(", "),
//     songUrl: track.external_urls.spotify,
//     title: track.name,
//   }));

//   return { status, data: tracks };
// };

export const getAvailableDevices = async () => {
  try {
    const access_token = await getAccessToken();
    const response = await fetchFromSpotify(endpoints.devices, access_token);
    const { status, data } = handleResponse(response);

    const devices =
      data.devices?.map((device) => ({
        name: device.name,
        is_active: device.is_active,
        type: device.type,
        model: PAIR_DEVICES[device?.type]?.model || "Unknown Device",
        id: PAIR_DEVICES[device?.type]?.id || "aiiimmmm-device",
      })) || [];

    return { status, data: devices };
  } catch (error) {
    console.error("Error getting available devices:", error.message);
    return { status: 500, data: [] }; // Menyediakan data default jika terjadi kesalahan
  }
};

export const getNowPlaying = async () => {
  try {
    const access_token = await getAccessToken();
    const response = await fetchFromSpotify(endpoints.nowPlaying, access_token);
    const { status, data } = handleResponse(response);

    if (!data.item) return { status, isPlaying: false, data: null };

    const isPlaying = data.is_playing;
    const album = data.item.album.name ?? "";
    const albumImageUrl = data.item.album.images?.find(
      (img) => img.width === 640
    )?.url;
    const artist =
      data.item.artists.map((artist) => artist.name).join(", ") ?? "";
    const songUrl = data.item.external_urls.spotify ?? "";
    const title = data.item.name ?? "";

    return {
      status,
      isPlaying,
      data: {
        album,
        albumImageUrl,
        artist,
        songUrl,
        title,
      },
    };
  } catch (error) {
    console.error("Error getting now playing:", error.message);
    return { status: 500, isPlaying: false, data: null }; // Menyediakan data default jika terjadi kesalahan
  }
};

export const getTopTracks = async () => {
  try {
    const access_token = await getAccessToken();
    const response = await fetchFromSpotify(
      `${endpoints.topTracks}?limit=10`,
      access_token
    );
    const { status, data } = handleResponse(response);

    const tracks = data.items.map((track) => ({
      album: {
        name: track.album.name,
        image: track.album.images.find((img) => img.width === 64),
      },
      artist: track.artists.map((artist) => artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));

    return { status, data: tracks };
  } catch (error) {
    console.error("Error getting top tracks:", error.message);
    return { status: 500, data: [] }; // Menyediakan data default jika terjadi kesalahan
  }
};
