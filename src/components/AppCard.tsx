
import { motion } from "framer-motion";

interface AppCardProps {
  title: string;
  description: string;
  imageUrl: string;
  appStoreLink?: string;
  googlePlayLink?: string;
}

export const AppCard = ({ title, description, imageUrl, appStoreLink, googlePlayLink }: AppCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-muted p-6 backdrop-blur-lg border border-white/10"
    >
      <div className="mb-4 h-48 overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div className="flex gap-4">
        {appStoreLink && (
          <a
            href={appStoreLink}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/80"
          >
            App Store
          </a>
        )}
        {googlePlayLink && (
          <a
            href={googlePlayLink}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/80"
          >
            Google Play
          </a>
        )}
      </div>
    </motion.div>
  );
};
