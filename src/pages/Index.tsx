
import { AppCard } from "@/components/AppCard";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const apps = [
    {
      title: "Приложение 1",
      description: "Описание первого приложения с его основными функциями и преимуществами.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      appStoreLink: "#",
      googlePlayLink: "#",
    },
    {
      title: "Приложение 2",
      description: "Описание второго приложения, рассказывающее о его уникальных особенностях.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      appStoreLink: "#",
      googlePlayLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container py-16">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Мобильные приложения</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Создаем инновационные мобильные приложения, которые делают жизнь проще
          </p>
        </section>

        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
