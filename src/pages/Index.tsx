
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
      privacyLink: "/privacy",
    },
    {
      title: "TaskBites",
      description: "TaskBites — твой новый стиль продуктивности! Хватит тонуть в бесконечных списках дел! TaskBites — это не просто планировщик, а твой личный тренер по задачам, который помогает разбивать большие цели на маленькие победы каждый день.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      logoUrl: "/lovable-uploads/4c8bbcd1-0c69-43ce-bc56-0c199d6c2067.png",
      appStoreLink: "#",
      privacyLink: "/taskbites-privacy",
    },
    {
      title: "FlowTime",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      logoUrl: "/lovable-uploads/64fcd10a-2a4d-4952-9498-2e108bd0e176.png",
      appStoreLink: "#",
      privacyLink: "/flowtime-privacy",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container py-16">
        <section className="mb-16 text-center flex flex-col items-center">
          <h1 className="mb-8 text-5xl font-bold tracking-tight relative inline-block">
            <span className="relative z-10">App by Spiro</span>
            <span className="absolute -inset-1 rounded-lg blur-sm bg-accent/20 z-0"></span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground pb-4 inline-block mt-4">
            Создаем мобильные приложения, которые делают жизнь проще
          </p>
        </section>

        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
