import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DVjEfBMEfQH/",
  "https://www.instagram.com/p/DVjEkUgEZ9E/",
  "https://www.instagram.com/p/DVjEpPpEQAk/",
  "https://www.instagram.com/p/DVjEtwnEWmc/",
  "https://www.instagram.com/p/DVjE1uREbQn/",
  "https://www.instagram.com/p/DVq1ZxXEXVW/",
  "https://www.instagram.com/p/DVq1t96kQf8/",
  "https://www.instagram.com/p/DVq2AF1EeSP/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) {
      window.instgrm?.Embeds.process();
      return;
    }

    const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existing) {
      scriptLoaded.current = true;
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
      window.instgrm?.Embeds.process();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/30" data-testid="instagram-feed-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold" data-testid="text-instagram-heading">
              Follow Along
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            See the latest from <span className="font-semibold text-primary">@listenupmom</span> — data, advocacy, and the voices that matter most.
          </p>
          <a
            href="https://www.instagram.com/listenupmom/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            data-testid="link-instagram-follow"
          >
            <Instagram className="w-5 h-5" />
            Follow @listenupmom
          </a>
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          data-testid="instagram-grid"
        >
          {INSTAGRAM_POSTS.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="w-full max-w-[350px]"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "12px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0",
                  maxWidth: "350px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 text-center text-muted-foreground text-sm"
                  data-testid={`link-instagram-post-${i}`}
                >
                  View this post on Instagram
                </a>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/listenupmom/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline transition-colors"
            data-testid="link-instagram-see-more"
          >
            See more on Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
