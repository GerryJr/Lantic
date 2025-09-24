import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { openExternalLink } from "@/config/links";
import { ExternalLink } from "lucide-react";

interface StatsCardProps {
  title: string;
  description: string;
  url: string;
  buttonText: string;
}

const StatsCard = ({ title, description, url, buttonText }: StatsCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 group">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="gamingSecondary" 
          className="w-full"
          onClick={() => openExternalLink(url)}
        >
          {buttonText}
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default StatsCard;