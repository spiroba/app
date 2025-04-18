
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AppCardProps {
  title: string;
  description: string;
  imageUrl: string;
  logoUrl?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  privacyLink?: string;
}

export const AppCard = ({ title, description, imageUrl, logoUrl, appStoreLink, googlePlayLink, privacyLink }: AppCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-muted p-6 backdrop-blur-lg border border-accent/30 shadow-neon animate-pulse-slow"
    >
      <div className="flex items-center mb-6">
        {logoUrl && (
          <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#0A1022] p-1 border border-accent/40 shadow-neon">
            <img 
              src={logoUrl} 
              alt={`${title} logo`} 
              className="h-full w-full object-contain" 
            />
          </div>
        )}
        <h3 className="text-2xl font-semibold text-foreground text-shadow">{title}</h3>
      </div>
      
      <div className="mb-4 h-48 overflow-hidden rounded-lg border border-accent/20 shadow-neon">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
      
      <p className="mb-4 text-muted-foreground">{description}</p>
      
      <div className="flex flex-wrap gap-4 items-center">
        {appStoreLink && (
          <a
            href={appStoreLink}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent/80 hover:shadow-neon-strong border border-accent/50 shadow-neon"
          >
            App Store
          </a>
        )}
        {googlePlayLink && (
          <a
            href={googlePlayLink}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent/80 hover:shadow-neon-strong border border-accent/50 shadow-neon"
          >
            Google Play
          </a>
        )}
        {privacyLink && (
          <Link
            to={privacyLink}
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            Политика конфиденциальности
          </Link>
        )}
      </div>
    </motion.div>
  );
};
