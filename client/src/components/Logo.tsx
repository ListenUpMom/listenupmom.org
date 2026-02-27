import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative" data-testid="logo-icon">
        <img 
          src={logoImage} 
          alt="Listen Up, Mom! logo" 
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-serif text-xl font-semibold tracking-tight text-foreground" data-testid="logo-text">
          Listen Up, Mom!
        </span>
      </div>
    </motion.div>
  );
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <img 
        src={logoImage} 
        alt="Listen Up, Mom! logo" 
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
