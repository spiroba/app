
import { AppCard } from "@/components/AppCard";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const apps = [
    {
      title: "UpFlow",
      description: "Откройте для себя коллекцию вдохновляющих цитат в стильном оформлении. Делитесь мудростью в историях и постах, создавайте свои цитаты и сохраняйте любимые высказывания.",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      logoUrl: "/lovable-uploads/26455311-5077-48d7-975b-75a264bc2206.png",
      appStoreLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container py-16">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">App by Spiro</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Создаем мобильные приложения, которые делают жизнь проще
          </p>
        </section>

        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-1 max-w-xl mx-auto">
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
