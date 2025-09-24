import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import SocialIcon from "@/components/SocialIcon";
import StatsCard from "@/components/StatsCard";
import HighlightCard from "@/components/HighlightCard";
import { links, openExternalLink } from "@/config/links";
import { Calendar, Clock, Users, Star, ExternalLink, Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import lanticAvatar from "@/assets/lantic-avatar.png";

const LanticHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-8">
            <img 
              src={lanticAvatar}
              alt="Lantic Avatar"
              className="w-32 h-32 rounded-full border-4 border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
            />
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-foreground">Hey friend, I'm </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Lantic
                </span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground">
                welcome to the stream!
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-6">
                Soulslike challenge runs, fun vibes, and late-night streams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="gaming"
                size="lg"
                onClick={() => openExternalLink(links.twitch)}
                className="text-lg px-8 py-4 h-auto"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Watch on Twitch
              </Button>
              <Button 
                variant="gamingSecondary"
                size="lg"
                onClick={() => openExternalLink(links.youtubeOfficial)}
                className="text-lg px-8 py-4 h-auto"
              >
                YouTube Official
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Lantic
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      "What's going on friend, name's Lantic. I play all kinds of games, but here I mainly focus on soulslikes and challenge runs. I'm always open to hearing any ideas on things you'd like to see in the future! Appreciate anyone that stops by—it's always a pleasure to meet new people!"
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      Why Soulslikes?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      There's something magical about the challenge, the community input on crazy run ideas, and those late-night "one more attempt" moments. Every death is a lesson, every victory is earned, and every stream is an adventure we take together.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stream Schedule
              </span>
            </h2>
            
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                  Weekly Schedule (PST)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <span className="font-medium">Monday - Friday</span>
                    <div className="flex items-center gap-2 text-accent">
                      <Clock className="h-4 w-4" />
                      <span>10 PM PST</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <span className="font-medium">One Weekend Day</span>
                    <div className="flex items-center gap-2 text-accent">
                      <Clock className="h-4 w-4" />
                      <span>10 PM PST</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    "I stream 6 days a week—usually late-night sessions that run long."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Times may shift slightly; follow on Twitch for go-live notifications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Community Guidelines
              </span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 text-lg">
              We keep it friendly and fun—please read the room and respect others.
            </p>
            
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardContent className="p-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <span className="text-muted-foreground">We're all here to have a good time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Try not to go overboard with anything / read the room.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-green mt-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Respect your fellow chatters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <span className="text-muted-foreground">You can say whatever you want to me—just be nice to each other!</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Highlights & Clips
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <HighlightCard 
                title="Epic Elden Ring No-Death Run"
                description="Watch the insane finale of a 15-hour no-death challenge run that had chat on the edge of their seats!"
              />
              <HighlightCard 
                title="Dark Souls Randomizer Chaos"
                description="Pure chaos ensues when every enemy and item is randomized. Hilarity and pain in equal measure."
              />
              <HighlightCard 
                title="Sekiro Speedrun Attempts"
                description="Late-night grinding trying to beat personal best times. The comeback stories are legendary."
              />
              <HighlightCard 
                title="Bloodborne Challenge Compilation"
                description="The best moments from various Bloodborne challenge runs voted on by the community."
              />
              <HighlightCard 
                title="Chat's Favorite Fails"
                description="Sometimes we don't git gud. These are the moments chat will never let me forget."
              />
              <HighlightCard 
                title="Community Game Suggestions"
                description="Exploring games suggested by viewers - always leads to interesting discoveries!"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gamingSecondary"
                onClick={() => openExternalLink(links.twitchTrackerClips)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Clips on TwitchTracker
              </Button>
              <Button 
                variant="gamingSecondary"
                onClick={() => openExternalLink(links.twitchMetrics)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Channel on TwitchMetrics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Connect & Follow
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SocialIcon 
                platform="twitch"
                url={links.twitch}
                label="Twitch"
              />
              <SocialIcon 
                platform="youtube"
                url={links.youtubeOfficial}
                label="YouTube"
              />
              <SocialIcon 
                platform="youtubeVods"
                url={links.youtubeVods}
                label="VODs"
              />
              <SocialIcon 
                platform="tiktok"
                url={links.tiktok}
                label="TikTok"
              />
              <SocialIcon 
                platform="instagram"
                url={links.instagramProfile}
                label="Instagram"
              />
              <SocialIcon 
                platform="instagram"
                url={links.instagramReels}
                label="Reels"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Channel Stats
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <StatsCard 
                title="Channel Overview"
                description="Complete channel statistics and growth metrics"
                url={links.twitchTrackerOverview}
                buttonText="View on TwitchTracker"
              />
              <StatsCard 
                title="Detailed Metrics"
                description="In-depth analytics and performance data"
                url={links.twitchMetrics}
                buttonText="View on TwitchMetrics"
              />
              <StatsCard 
                title="Best Clips"
                description="Top performing clips and highlight moments"
                url={links.twitchTrackerClips}
                buttonText="View Clips"
              />
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Stats shown on third-party sites may lag behind Twitch.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe/Support Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Support the Stream
              </span>
            </h2>
            
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-6">
                  "Click to subscribe! Never expected but always appreciated. All support goes toward improving the stream / stream quality."
                </p>
                
                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-foreground">Subscriber Perks:</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Ad-free viewing experience</li>
                    <li>• Exclusive sub-only emotes (more to come)</li>
                    <li>• Higher doubloons multiplier</li>
                  </ul>
                </div>
                
                <Button 
                  variant="gaming"
                  size="lg"
                  onClick={() => openExternalLink(links.twitch)}
                  className="text-lg px-8 py-4 h-auto"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Subscribe on Twitch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Lantic. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                onClick={(e) => {e.preventDefault(); openExternalLink(links.twitch);}}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitch
              </a>
              <a 
                href="#" 
                onClick={(e) => {e.preventDefault(); openExternalLink(links.youtubeOfficial);}}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                YouTube
              </a>
              <a 
                href="#" 
                onClick={(e) => {e.preventDefault(); openExternalLink(links.tiktok);}}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                TikTok
              </a>
              <a 
                href="#" 
                onClick={(e) => {e.preventDefault(); openExternalLink(links.instagramProfile);}}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LanticHome;