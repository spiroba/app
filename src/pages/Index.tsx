import { AppCard } from "@/components/AppCard";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const apps = [
    {
      title: "UpFlow",
      description:
        "Откройте для себя коллекцию вдохновляющих цитат в стильном оформлении. Делитесь мудростью в историях и постах, создавайте свои цитаты и сохраняйте любимые высказывания.",
      logoUrl: "/lovable-uploads/26455311-5077-48d7-975b-75a264bc2206.png",
      appStoreLink: "https://apps.apple.com/ru/app/upflow/id6743680634",
      privacyLink: "/privacy",
    },
    {
      title: "TaskBites",
      description:
        "TaskBites — твой новый стиль продуктивности! Хватит тонуть в бесконечных списках дел! TaskBites — это не просто планировщик, а твой личный тренер по задачам, который помогает разбивать большие цели на маленькие победы каждый день.",
      logoUrl: "/lovable-uploads/4c8bbcd1-0c69-43ce-bc56-0c199d6c2067.png",
      appStoreLink: "https://apps.apple.com/ru/app/taskbites/id6744850540",
      privacyLink: "/taskbites-privacy",
    },
    {
      title: "FlowTime",
      description:
        "Создайте здоровые привычки и достигайте целей с FlowTime – вашим персональным помощником в развитии и самосовершенствовании!",
      logoUrl: "/lovable-uploads/35127712-f767-4f65-a288-247b338741d1.png",
      appStoreLink: "#",
      privacyLink: "/flowtime-privacy",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="w-full flex flex-col items-center py-10">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
          Создаем мобильные приложения, которые делают жизнь проще
        </h1>
      </header>
      <main className="container flex-1 py-10">
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="w-full flex justify-center py-6">
        <span className="text-sm text-muted-foreground">App by Spiro</span>
      </footer>
    </div>
  );
};

export default Index;
