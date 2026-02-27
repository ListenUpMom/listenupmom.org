import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Upload, Mic, Play, Pause, Download, Heart, Sparkles, Square } from "lucide-react";

interface WaveformPoint {
  x: number;
  y: number;
}

function generateWaveformFromAudio(audioData: Float32Array): WaveformPoint[] {
  const points: WaveformPoint[] = [];
  const samples = 100;
  const blockSize = Math.floor(audioData.length / samples);
  
  for (let i = 0; i < samples; i++) {
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum += Math.abs(audioData[i * blockSize + j] || 0);
    }
    const average = sum / blockSize;
    points.push({
      x: (i / samples) * 100,
      y: average * 100
    });
  }
  
  return points;
}

// Brand jewelry piece featuring the double-hearts logo
function BrandJewelryPiece({ 
  style, 
  metal,
  onClick,
  selected 
}: { 
  style: "necklace" | "bracelet" | "ring";
  metal: "gold" | "roseGold" | "silver";
  onClick?: () => void;
  selected?: boolean;
}) {
  const metalColors = {
    gold: { primary: "#D4AF37", highlight: "#F4E4BA", shadow: "#B8960C" },
    roseGold: { primary: "#B76E79", highlight: "#E8C4C4", shadow: "#8B4D57" },
    silver: { primary: "#A8A9AD", highlight: "#E8E8E8", shadow: "#71727A" }
  };

  const colors = metalColors[metal];

  return (
    <motion.div
      className={`cursor-pointer transition-all duration-300 ${selected ? 'ring-2 ring-primary ring-offset-2 rounded-lg' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } }}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-label={`Select ${metal === "roseGold" ? "Rose Gold" : metal} ${style}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6 rounded-lg bg-gradient-to-br from-white to-muted/30 border border-border/50 hover:shadow-lg transition-shadow">
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-48"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
          role="img"
          aria-label={`${metal === "roseGold" ? "Rose gold" : metal} ${style} featuring the Listen Up Mom double-hearts design with sound wave motif`}
        >
          <defs>
            <linearGradient id={`metalGradient-${metal}-${style}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.highlight} />
              <stop offset="30%" stopColor={colors.primary} />
              <stop offset="70%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.shadow} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {style === "necklace" && (
            <>
              {/* Delicate chain */}
              <path 
                d="M 40 30 Q 100 10 160 30" 
                fill="none" 
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Chain links suggestion */}
              {[...Array(12)].map((_, i) => (
                <circle 
                  key={i}
                  cx={45 + i * 10} 
                  cy={28 - Math.sin(i * 0.5) * 8}
                  r="1.5"
                  fill={colors.primary}
                  opacity="0.6"
                />
              ))}
              
              {/* Pendant frame - Kendra Scott inspired oval bezel */}
              <ellipse 
                cx="100" cy="120" rx="45" ry="55"
                fill="none"
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="4"
                filter="url(#glow)"
              />
              
              {/* Inner decorative border */}
              <ellipse 
                cx="100" cy="120" rx="38" ry="48"
                fill="none"
                stroke={colors.highlight}
                strokeWidth="1"
                opacity="0.5"
              />
              
              {/* Mother heart (larger, outer) */}
              <path 
                d="M 100 95 
                   C 100 85, 85 80, 80 90 
                   C 75 100, 80 110, 100 130 
                   C 120 110, 125 100, 120 90 
                   C 115 80, 100 85, 100 95"
                fill={`url(#metalGradient-${metal}-${style})`}
                stroke={colors.shadow}
                strokeWidth="1"
                filter="url(#glow)"
              />
              
              {/* Daughter heart (smaller, nested) */}
              <path 
                d="M 100 102 
                   C 100 97, 93 95, 90 100 
                   C 87 105, 90 110, 100 118 
                   C 110 110, 113 105, 110 100 
                   C 107 95, 100 97, 100 102"
                fill={colors.highlight}
                stroke={colors.primary}
                strokeWidth="0.5"
              />
              
              {/* Sound wave marks */}
              <path d="M 70 105 Q 65 120 70 135" fill="none" stroke={colors.primary} strokeWidth="1.5" opacity="0.7" />
              <path d="M 63 100 Q 56 120 63 140" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.5" />
              <path d="M 130 105 Q 135 120 130 135" fill="none" stroke={colors.primary} strokeWidth="1.5" opacity="0.7" />
              <path d="M 137 100 Q 144 120 137 140" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.5" />
              
              {/* Bail (connector to chain) */}
              <ellipse cx="100" cy="65" rx="8" ry="10" fill="none" stroke={`url(#metalGradient-${metal}-${style})`} strokeWidth="3" />
            </>
          )}

          {style === "bracelet" && (
            <>
              {/* Cuff bracelet band */}
              <path 
                d="M 20 100 Q 100 60 180 100 Q 100 140 20 100" 
                fill="none" 
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Central charm mounting plate */}
              <ellipse 
                cx="100" cy="100" rx="35" ry="30"
                fill={colors.highlight}
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="3"
                filter="url(#glow)"
                opacity="0.9"
              />
              
              {/* Mother heart */}
              <path 
                d="M 100 85 
                   C 100 78, 88 75, 84 82 
                   C 80 89, 84 96, 100 112 
                   C 116 96, 120 89, 116 82 
                   C 112 75, 100 78, 100 85"
                fill={`url(#metalGradient-${metal}-${style})`}
                stroke={colors.shadow}
                strokeWidth="1"
              />
              
              {/* Daughter heart */}
              <path 
                d="M 100 90 
                   C 100 86, 94 84, 92 88 
                   C 90 92, 92 96, 100 104 
                   C 108 96, 110 92, 108 88 
                   C 106 84, 100 86, 100 90"
                fill={colors.highlight}
                stroke={colors.primary}
                strokeWidth="0.5"
              />
              
              {/* Small sound wave marks */}
              <path d="M 75 95 Q 72 100 75 105" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.6" />
              <path d="M 125 95 Q 128 100 125 105" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.6" />
              
              {/* Decorative dots along band */}
              {[...Array(5)].map((_, i) => (
                <circle key={`left-${i}`} cx={30 + i * 8} cy={100 - (i * 2)} r="2" fill={colors.primary} opacity="0.4" />
              ))}
              {[...Array(5)].map((_, i) => (
                <circle key={`right-${i}`} cx={170 - i * 8} cy={100 - (i * 2)} r="2" fill={colors.primary} opacity="0.4" />
              ))}
            </>
          )}

          {style === "ring" && (
            <>
              {/* Ring band - elegant curved perspective */}
              <ellipse 
                cx="100" cy="140" rx="50" ry="20"
                fill="none"
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="12"
              />
              
              {/* Ring setting/mounting */}
              <path 
                d="M 70 120 L 80 90 L 120 90 L 130 120"
                fill={colors.highlight}
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="3"
                strokeLinejoin="round"
              />
              
              {/* Face plate */}
              <ellipse 
                cx="100" cy="75" rx="30" ry="25"
                fill={colors.highlight}
                stroke={`url(#metalGradient-${metal}-${style})`}
                strokeWidth="3"
                filter="url(#glow)"
              />
              
              {/* Mother heart - smaller for ring */}
              <path 
                d="M 100 62 
                   C 100 57, 92 55, 89 60 
                   C 86 65, 89 70, 100 82 
                   C 111 70, 114 65, 111 60 
                   C 108 55, 100 57, 100 62"
                fill={`url(#metalGradient-${metal}-${style})`}
                stroke={colors.shadow}
                strokeWidth="0.8"
              />
              
              {/* Daughter heart */}
              <path 
                d="M 100 66 
                   C 100 63, 96 62, 94 65 
                   C 92 68, 94 71, 100 77 
                   C 106 71, 108 68, 106 65 
                   C 104 62, 100 63, 100 66"
                fill={colors.highlight}
                stroke={colors.primary}
                strokeWidth="0.3"
              />
              
              {/* Tiny sound marks */}
              <path d="M 82 70 Q 80 75 82 80" fill="none" stroke={colors.primary} strokeWidth="0.8" opacity="0.6" />
              <path d="M 118 70 Q 120 75 118 80" fill="none" stroke={colors.primary} strokeWidth="0.8" opacity="0.6" />
            </>
          )}
        </svg>
        
        <p className="text-center text-sm font-medium text-foreground mt-2 capitalize">
          {metal === "roseGold" ? "Rose Gold" : metal.charAt(0).toUpperCase() + metal.slice(1)} {style.charAt(0).toUpperCase() + style.slice(1)}
        </p>
      </div>
    </motion.div>
  );
}

// Custom waveform jewelry with voice recording
function CustomWaveformPiece({ 
  points, 
  metal 
}: { 
  points: WaveformPoint[];
  metal: "gold" | "roseGold" | "silver";
}) {
  const metalColors = {
    gold: { primary: "#D4AF37", highlight: "#F4E4BA", shadow: "#B8960C" },
    roseGold: { primary: "#B76E79", highlight: "#E8C4C4", shadow: "#8B4D57" },
    silver: { primary: "#A8A9AD", highlight: "#E8E8E8", shadow: "#71727A" }
  };

  const colors = metalColors[metal];
  
  // Generate waveform path
  const waveformPath = points.length > 0 
    ? `M ${points.map((p, i) => `${20 + (i / points.length) * 160},${100 - p.y * 0.3}`).join(' L ')}`
    : "";

  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-white to-muted/30 border border-border/50">
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-64"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
        role="img"
        aria-label={`Custom ${metal === "roseGold" ? "rose gold" : metal} pendant featuring your unique voice waveform`}
      >
        <defs>
          <linearGradient id={`customMetalGradient-${metal}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.highlight} />
            <stop offset="30%" stopColor={colors.primary} />
            <stop offset="70%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.shadow} />
          </linearGradient>
          <filter id="customGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Chain */}
        <path 
          d="M 30 25 Q 100 5 170 25" 
          fill="none" 
          stroke={`url(#customMetalGradient-${metal})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Pendant frame - larger rectangle with rounded corners for waveform */}
        <rect 
          x="20" y="45" width="160" height="120" rx="10"
          fill="none"
          stroke={`url(#customMetalGradient-${metal})`}
          strokeWidth="4"
          filter="url(#customGlow)"
        />
        
        {/* Inner decorative border */}
        <rect 
          x="28" y="53" width="144" height="104" rx="6"
          fill={colors.highlight}
          opacity="0.3"
        />
        
        {/* The actual waveform from user's voice */}
        {points.length > 0 && (
          <path 
            d={waveformPath}
            fill="none"
            stroke={`url(#customMetalGradient-${metal})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#customGlow)"
          />
        )}
        
        {/* Small hearts at corners */}
        <path 
          d="M 35 60 C 35 57 32 56 30 58 C 28 60 30 63 35 68 C 40 63 42 60 40 58 C 38 56 35 57 35 60"
          fill={colors.primary}
          opacity="0.7"
        />
        <path 
          d="M 165 60 C 165 57 162 56 160 58 C 158 60 160 63 165 68 C 170 63 172 60 170 58 C 168 56 165 57 165 60"
          fill={colors.primary}
          opacity="0.7"
        />
        
        {/* Bail */}
        <ellipse cx="100" cy="35" rx="10" ry="12" fill="none" stroke={`url(#customMetalGradient-${metal})`} strokeWidth="3" />
        
        {/* "I love you" text engraving suggestion */}
        <text x="100" y="158" textAnchor="middle" fontSize="8" fill={colors.shadow} fontStyle="italic" opacity="0.6">
          I love you
        </text>
      </svg>
    </div>
  );
}

export default function Prototype() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveformPoints, setWaveformPoints] = useState<WaveformPoint[]>([]);
  const [selectedMetal, setSelectedMetal] = useState<"gold" | "roseGold" | "silver">("gold");
  const [selectedStyle, setSelectedStyle] = useState<"necklace" | "bracelet" | "ring">("necklace");
  const [activeSection, setActiveSection] = useState<"brand" | "custom">("brand");
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    document.title = "Jewelry Collection | Listen Up, Mom!";
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      await processAudioFile(file);
    }
  };

  const processAudioFile = async (file: File) => {
    try {
      const audioContext = new AudioContext();
      const arrayBuffer = await file.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const channelData = audioBuffer.getChannelData(0);
      const points = generateWaveformFromAudio(channelData);
      setWaveformPoints(points);
    } catch (err) {
      console.error('Error processing audio:', err);
      // Generate demo waveform if processing fails
      generateDemoWaveform();
    }
  };

  const generateDemoWaveform = () => {
    const demoPoints: WaveformPoint[] = [];
    for (let i = 0; i < 100; i++) {
      demoPoints.push({
        x: i,
        y: Math.sin(i * 0.15) * 40 + Math.random() * 25 + 35
      });
    }
    setWaveformPoints(demoPoints);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Use the browser's preferred MIME type
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') 
        ? 'audio/webm' 
        : MediaRecorder.isTypeSupported('audio/mp4') 
          ? 'audio/mp4' 
          : 'audio/ogg';
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        const file = new File([blob], `recording.${mimeType.split('/')[1]}`, { type: mimeType });
        setAudioFile(file);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        await processAudioFile(file);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
    } catch (err) {
      console.error('Recording error:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Generate demo waveform for custom section preview
  useEffect(() => {
    if (activeSection === "custom" && waveformPoints.length === 0) {
      generateDemoWaveform();
    }
  }, [activeSection, waveformPoints.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for keyboard/screen reader users */}
      <a 
        href="#prototype-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <Logo />
            <Badge variant="outline" className="text-xs">Prototype</Badge>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main id="prototype-content" className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" aria-hidden="true" />
            Jewelry Concept
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Listen Up, Mom! Jewelry Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wearable reminders of the mother-daughter bond. Inspired by Kendra Scott's elegant designs.
          </p>
        </motion.div>

        {/* Section Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          <Button
            variant={activeSection === "brand" ? "default" : "outline"}
            onClick={() => setActiveSection("brand")}
            className="gap-2"
            data-testid="button-section-brand"
          >
            <Heart className="h-4 w-4" />
            Signature Collection
          </Button>
          <Button
            variant={activeSection === "custom" ? "default" : "outline"}
            onClick={() => setActiveSection("custom")}
            className="gap-2"
            data-testid="button-section-custom"
          >
            <Mic className="h-4 w-4" />
            Custom Voice Piece
          </Button>
        </div>

        {/* Brand Collection Section */}
        {activeSection === "brand" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                The Signature Collection
              </h2>
              <p className="text-muted-foreground">
                Featuring our iconic mother-daughter hearts with sound wave motif
              </p>
            </div>

            {/* Metal selector */}
            <div className="flex justify-center gap-3 mb-8">
              {(["gold", "roseGold", "silver"] as const).map((metal) => (
                <Button
                  key={metal}
                  variant={selectedMetal === metal ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedMetal(metal)}
                  data-testid={`button-metal-${metal}`}
                >
                  {metal === "roseGold" ? "Rose Gold" : metal.charAt(0).toUpperCase() + metal.slice(1)}
                </Button>
              ))}
            </div>

            {/* Jewelry pieces grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {(["necklace", "bracelet", "ring"] as const).map((style) => (
                <BrandJewelryPiece
                  key={style}
                  style={style}
                  metal={selectedMetal}
                  selected={selectedStyle === style}
                  onClick={() => setSelectedStyle(style)}
                />
              ))}
            </div>

            <motion.div
              className="mt-10 p-6 rounded-md bg-muted/30 border border-border/30 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each piece features the Listen Up, Mom! signature design: two hearts representing 
                the mother-daughter bond, with delicate sound wave marks symbolizing the voices 
                that connect them. A permanent reminder that every "I love you" deserves to be heard.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Custom Voice Piece Section */}
        {activeSection === "custom" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Your Voice, Your Jewelry
              </h2>
              <p className="text-muted-foreground">
                Record "I love you" and transform your unique sound wave into wearable art
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recording controls */}
              <Card className="p-6 border-border/50">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Capture Your Voice
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Button
                      variant={isRecording ? "destructive" : "default"}
                      onClick={isRecording ? stopRecording : startRecording}
                      className="flex-1 gap-2"
                      data-testid="button-record"
                    >
                      {isRecording ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      {isRecording ? "Stop Recording" : "Record Voice"}
                    </Button>
                    
                    <label className="flex-1">
                      <Button variant="outline" className="w-full gap-2" asChild>
                        <span>
                          <Upload className="h-4 w-4" />
                          Upload Audio
                        </span>
                      </Button>
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        data-testid="input-audio-upload"
                        aria-label="Upload audio file"
                      />
                    </label>
                  </div>

                  {isRecording && (
                    <div className="p-4 rounded-md bg-destructive/10 border border-destructive/30 text-center">
                      <div className="flex items-center justify-center gap-2 text-destructive">
                        <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                        Recording... Say "I love you"
                      </div>
                    </div>
                  )}

                  {audioFile && !isRecording && (
                    <div className="p-4 rounded-md bg-muted/50 border border-border/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{audioFile.name}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={togglePlay}
                          data-testid="button-play"
                          aria-label={isPlaying ? "Pause audio" : "Play audio"}
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                      </div>
                      {audioUrl && (
                        <audio
                          ref={audioRef}
                          src={audioUrl}
                          onEnded={() => setIsPlaying(false)}
                          className="hidden"
                        />
                      )}
                    </div>
                  )}

                  {/* Metal selector for custom piece */}
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm text-muted-foreground mb-3">Choose your metal:</p>
                    <div className="flex gap-2">
                      {(["gold", "roseGold", "silver"] as const).map((metal) => (
                        <Button
                          key={metal}
                          variant={selectedMetal === metal ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedMetal(metal)}
                          className="flex-1"
                          data-testid={`button-custom-metal-${metal}`}
                        >
                          {metal === "roseGold" ? "Rose Gold" : metal.charAt(0).toUpperCase() + metal.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Your voice creates a unique waveform pattern that becomes part of your jewelry design.
                  </p>
                </div>
              </Card>

              {/* Preview */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-center">Your Custom Design</h3>
                <CustomWaveformPiece points={waveformPoints} metal={selectedMetal} />
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2" data-testid="button-download-design">
                    <Download className="h-4 w-4" />
                    Download Design
                  </Button>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-10 p-6 rounded-md bg-muted/30 border border-border/30 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Imagine: a mother and daughter each record "I love you." Those unique sound waves 
                become matching pieces of jewelry—a permanent, wearable reminder of their bond. 
                No two pieces are ever the same because no two voices are the same.
              </p>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
