
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AppCardProps {
  title: string;
  description: string;
  logoUrl?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  ruStoreLink?: string;
  privacyLink?: string;
}

export const AppCard = ({
  title,
  description,
  logoUrl,
  appStoreLink,
  googlePlayLink,
  ruStoreLink,
  privacyLink,
}: AppCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center rounded-lg bg-muted p-4 border border-accent/20 shadow-neon min-h-[220px] max-w-xs mx-auto"
    >
      {logoUrl && (
        <div className="mb-3 h-14 w-14 flex items-center justify-center overflow-hidden rounded-lg bg-[#0A1022] p-1 border border-accent/30 shadow-neon">
          <img
            src={logoUrl}
            alt={`${title} logo`}
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2 text-center">{title}</h3>
      <p className="text-sm text-muted-foreground text-center mb-4">{description}</p>
      <div className="flex flex-col gap-2 w-full items-center mt-auto">
        {appStoreLink && (
          <a
            href={appStoreLink}
            className="rounded bg-accent px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-accent/80 hover:shadow-neon-strong border border-accent/50 shadow-neon"
          >
            App Store
          </a>
        )}
        {googlePlayLink && (
          <a
            href={googlePlayLink}
            className="rounded bg-accent px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-accent/80 hover:shadow-neon-strong border border-accent/50 shadow-neon"
          >
            Google Play
          </a>
        )}
        {ruStoreLink && (
          <a
            href={ruStoreLink}
            className="rounded bg-accent px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-accent/80 hover:shadow-neon-strong border border-accent/50 shadow-neon"
          >
            RuStore
          </a>
        )}
        {privacyLink && (
          <Link
            to={privacyLink}
            className="text-xs text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
          >
            Политика конфиденциальности
          </Link>
        )}
      </div>
    </motion.div>
  );
};
