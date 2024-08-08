// pages/api/now-playing.js
import { getNowPlaying } from "@/services/spotify";

export default async function handler(req, res) {
  const response = await getNowPlaying();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json(response?.data);
}
