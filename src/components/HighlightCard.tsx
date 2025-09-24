import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
  thumbnail?: string;
}

const HighlightCard = ({ title, description, thumbnail }: HighlightCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer overflow-hidden">
      <div className="relative aspect-video bg-muted/20 flex items-center justify-center">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <Play className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="h-8 w-8 text-white drop-shadow-lg" />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;