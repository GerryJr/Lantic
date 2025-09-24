import { Button } from "@/components/ui/button";
import { openExternalLink } from "@/config/links";
import { 
  Youtube, 
  Instagram, 
  ExternalLink,
  Video,
  Music
} from "lucide-react";

interface SocialIconProps {
  platform: string;
  url: string;
  label: string;
}

const SocialIcon = ({ platform, url, label }: SocialIconProps) => {
  const getIcon = () => {
    switch (platform) {
      case 'twitch':
        return <ExternalLink className="h-6 w-6" />;
      case 'youtube':
        return <Youtube className="h-6 w-6" />;
      case 'youtubeVods':
        return <Video className="h-6 w-6" />;
      case 'tiktok':
        return <Music className="h-6 w-6" />;
      case 'instagram':
        return <Instagram className="h-6 w-6" />;
      default:
        return <ExternalLink className="h-6 w-6" />;
    }
  };

  return (
    <Button
      variant="gamingSecondary"
      size="lg"
      onClick={() => openExternalLink(url)}
      className="flex flex-col items-center gap-2 h-auto p-4 min-w-[120px]"
    >
      {getIcon()}
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
};

export default SocialIcon;