
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Техническая поддержка
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center">
            <Mail className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground">spiro.boris@yandex.ru</p>
          </div>
        </div>
      </div>
    </section>
  );
};
