const BASE_URL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed`;
const URL_TO_TEST = `https://817e-36-81-26-4.ngrok-free.app/`; // Gantilah dengan URL ngrok
const API_KEY = process.env.NEXT_PUBLIC_PAGE_SPEED_API;

const fullUrl = `${BASE_URL}?url=${encodeURIComponent(URL_TO_TEST)}&key=${API_KEY}&category=performance`;

// Use this URL in your fetcher
console.log(`Fetching data from: ${fullUrl}`);