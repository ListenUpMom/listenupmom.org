import { useEffect } from "react";
import { Logo, LogoMark } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logoImage from "@/assets/logo.png";
import letterheadImage from "@/assets/letterhead.png";

export default function Assets() {
  useEffect(() => {
    document.title = "Assets | Listen Up, Mom!";
  }, []);

  const downloadAsset = (src: string, filename: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Skip to main content link for keyboard/screen reader users */}
      <a 
        href="#assets-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <main id="assets-content" className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl font-semibold text-foreground mb-2">Brand Assets</h1>
        <p className="text-muted-foreground mb-8">Download logos and branding materials for Listen Up, Mom!</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-semibold text-foreground mb-4">Logo Icon</h2>
            <div className="bg-muted/30 rounded-md p-8 mb-4 flex items-center justify-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%23f0f0f0\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%23f0f0f0\'/%3E%3C/svg%3E")' }}>
              <img src={logoImage} alt="Logo icon" className="w-24 h-24 object-contain" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">Hearts with sound waves - transparent PNG</p>
            <Button 
              onClick={() => downloadAsset(logoImage, 'listen-up-mom-logo.png')}
              className="w-full"
              data-testid="button-download-logo"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Logo
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="font-semibold text-foreground mb-4">Full Letterhead</h2>
            <div className="bg-muted/30 rounded-md p-8 mb-4 flex items-center justify-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%23f0f0f0\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%23f0f0f0\'/%3E%3C/svg%3E")' }}>
              <img src={letterheadImage} alt="Letterhead" className="max-w-full h-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">Logo + brand name + tagline - transparent PNG</p>
            <Button 
              onClick={() => downloadAsset(letterheadImage, 'listen-up-mom-letterhead.png')}
              className="w-full"
              data-testid="button-download-letterhead"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Letterhead
            </Button>
          </Card>
        </div>

        <Card className="p-6 mt-6">
          <h2 className="font-semibold text-foreground mb-4">Preview: How it looks in use</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Header style:</p>
              <div className="bg-background border border-border rounded-md p-4">
                <Logo />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Footer style (with tagline):</p>
              <div className="bg-background border border-border rounded-md p-4">
                <div className="flex items-center gap-3">
                  <LogoMark size={48} />
                  <div>
                    <span className="font-serif text-lg font-semibold text-foreground block">Listen Up, Mom!</span>
                    <span className="text-sm text-muted-foreground italic">Because every "I love you" deserves to be heard.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
