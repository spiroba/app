
import { Mail, MessageSquare, Smartphone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Техническая поддержка
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Mail className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground">support@example.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Smartphone className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">Телефон</h3>
            <p className="text-muted-foreground">+7 (999) 123-45-67</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MessageSquare className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">Чат</h3>
            <p className="text-muted-foreground">Онлайн поддержка 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};
