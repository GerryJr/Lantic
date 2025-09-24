// Whitelisted links configuration - DO NOT modify without authorization
export const links = {
  twitch: "https://www.twitch.tv/lantlc",
  youtubeOfficial: "https://www.youtube.com/@Lantic_Official", 
  youtubeVods: "https://m.youtube.com/@LanticVODS",
  tiktok: "https://www.tiktok.com/@lanticofficial",
  instagramProfile: "https://www.instagram.com/lanticofficial/",
  instagramReels: "https://www.instagram.com/lanticofficial/reels/",
  twitchMetrics: "https://www.twitchmetrics.net/c/1321576204-lantlc",
  twitchTrackerOverview: "https://twitchtracker.com/lantlc",
  twitchTrackerClips: "https://twitchtracker.com/lantlc/clips"
} as const;

// Helper function to open external links safely
export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};