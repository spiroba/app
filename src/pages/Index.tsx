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
      title: "TaskSteps",
      description:
        "TaskSteps — твой новый стиль продуктивности! Хватит тонуть в бесконечных списках дел! TaskSteps — это не просто планировщик, а твой личный тренер по задачам, который помогает разбивать большие цели на маленькие победы каждый день.",
      logoUrl: "/lovable-uploads/tasksteps-icon.png",
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
    {
      title: "ScanMe",
      description:
        "Профессиональный сканер документов с ИИ-переводчиком. Сканируйте, распознавайте текст и переводите документы в высоком качестве. Работает полностью автономно без передачи данных.",
      logoUrl: "/lovable-uploads/0f0a4eb5-f686-462b-94b4-bd904041ac7f.png",
      ruStoreLink: "https://www.rustore.ru/catalog/app/com.scanme.scanner",
      privacyLink: "/scanme-privacy",
    },
    {
      title: "ScanMe",
      description:
        "Профессиональный сканер документов с ИИ-переводчиком. Сканируйте, распознавайте текст и переводите документы в высоком качестве. Работает полностью автономно без передачи данных.",
      logoUrl: "/lovable-uploads/c014b09c-56c2-49ac-9fb8-107fc9264c69.png",
      appStoreLink: "#",
      privacyLink: "/scanme-ios-privacy",
    },
    {
      title: "Checkers",
      description:
        "Классическая игра в шашки с современным дизайном. Играйте против ИИ или с друзьями. Улучшайте свои навыки с различными уровнями сложности.",
      logoUrl: "/lovable-uploads/ba599e25-5b12-4f2e-88fb-790c0b89b639.png",
      appStoreLink: "#",
      privacyLink: "/checkers-privacy",
      privacyLink2: "/checkers-privacy-alt",
    },
    {
      title: "CleanUp Guru",
      description:
        "Профессиональная очистка памяти iPhone с ИИ! Ваш iPhone переполнен? CleanUp Guru - это умный cleaner для очистки телефона, который поможет освободить память и навести порядок в галерее с помощью искусственного интеллекта.",
      logoUrl: "/lovable-uploads/18f6b23b-ef17-4145-8f61-46d607310b97.png",
      appStoreLink: "#",
      privacyLink: "/cleanup-guru-privacy",
    },
    {
      title: "FitSteps",
      description:
        "Создавайте персональные фитнес-тренировки и достигайте своих целей! FitSteps - ваш умный тренер для построения идеальных программ упражнений.",
      logoUrl: "/lovable-uploads/fitsteps-icon.png",
      appStoreLink: "#",
      privacyLink: "/fitsteps-privacy",
    },
    {
      title: "PDF Studio",
      description:
        "Превращайте бумажные документы в цифровые PDF мгновенно! OCR-распознавание, подписи, защищённое хранилище и iCloud синхронизация.",
      logoUrl: "/lovable-uploads/scan2convert-icon.png",
      appStoreLink: "#",
      privacyLink: "/scanme-pro-privacy",
    },
    {
      title: "TravelMate",
      description:
        "Планируйте идеальные путешествия за минуты. Создавайте детальные маршруты, контролируйте расходы и не забывайте важное с готовыми чек-листами. Ваш умный компаньон в каждой поездке",
      logoUrl: "/lovable-uploads/travelmate-icon.png",
      appStoreLink: "#",
      privacyLink: "/travelmate-privacy",
    },
    {
      title: "PDF Studio - Сканер и Редактор",
      description:
        "Лучшее приложение для работы с PDF на iPhone и iPad. Конвертируйте фото в PDF, сканируйте документы, редактируйте и объединяйте файлы!",
      logoUrl: "/lovable-uploads/pdf-studio-scanner-icon.png",
      appStoreLink: "#",
      privacyLink: "/pdf-studio-scanner-privacy",
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
