const PDFStudioScannerPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Политика конфиденциальности PDF Studio</h1>
        
        <p className="text-sm text-muted-foreground mb-8">
          <strong>Последнее обновление: 16 ноября 2025</strong>
        </p>

        {/* Russian Version */}
        <section className="mb-16 prose prose-invert max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">Введение</h2>
          <p>
            PDF Studio («мы», «наше» или «нас») стремится защищать вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего мобильного приложения PDF Studio («Приложение»).
          </p>

          <h2 className="text-2xl font-semibold mt-8">Информация, которую мы собираем</h2>
          
          <h3 className="text-xl font-semibold mt-6">Информация, которую вы предоставляете</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Документы и файлы:</strong> PDF-файлы и изображения, которые вы создаёте, импортируете или конвертируете в Приложении</li>
            <li><strong>Подписи:</strong> Цифровые подписи, которые вы создаёте и сохраняете в Приложении</li>
            <li><strong>Настройки и предпочтения:</strong> Ваш выбор языка, настройки темы оформления и конфигурация приложения</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Автоматически собираемая информация</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Информация об устройстве:</strong> Модель устройства, версия операционной системы и уникальные идентификаторы устройства</li>
            <li><strong>Данные об использовании:</strong> Используемые функции приложения, статистика конвертаций и показатели производительности</li>
            <li><strong>Информация о регионе:</strong> Код страны/региона для определения доступности подписок (соответствие требованиям ЕС)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Синхронизация с iCloud (опционально)</h3>
          <p>Если вы включаете синхронизацию с iCloud:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ваши документы, папки и данные приложения хранятся в вашей личной учётной записи iCloud</li>
            <li>Мы не имеем доступа к вашим данным в iCloud</li>
            <li>К синхронизированным данным применяется Политика конфиденциальности Apple iCloud</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Как мы используем вашу информацию</h2>
          <p>Мы используем собранную информацию для:</p>

          <h3 className="text-xl font-semibold mt-6">1. Обеспечения функциональности приложения</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обработки конвертаций PDF и операций с документами</li>
            <li>Сохранения и управления вашими документами и подписями</li>
            <li>Синхронизации данных между вашими устройствами через iCloud (если включено)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">2. Улучшения пользовательского опыта</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Запоминания ваших предпочтений и настроек</li>
            <li>Предоставления локализованного контента на выбранном вами языке</li>
            <li>Оптимизации производительности приложения</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">3. Управления подписками</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обработки покупок внутри приложения через App Store от Apple</li>
            <li>Определения региональной доступности подписок</li>
            <li>Управления лимитами бесплатной версии (вне ЕС)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">4. Соблюдения законодательства</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Соответствия требованиям Закона ЕС о цифровых услугах (DSA)</li>
            <li>Предоставления бесплатного неограниченного доступа пользователям из ЕС в соответствии с законом</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Хранение и защита данных</h2>

          <h3 className="text-xl font-semibold mt-6">Локальное хранилище</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Все документы и файлы хранятся <strong>локально на вашем устройстве</strong></li>
            <li>Мы не загружаем ваши документы на наши серверы</li>
            <li>Ваши данные остаются под вашим контролем</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Хранилище iCloud (опционально)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>При включении данные шифруются и хранятся в вашей личной учётной записи iCloud</li>
            <li>Мы не имеем доступа к вашим данным в iCloud</li>
            <li>Вы можете отключить синхронизацию с iCloud в любое время в Настройках</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Меры безопасности</h3>
          <p>Мы применяем стандартные для отрасли меры безопасности для защиты ваших данных:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Шифрование данных при хранении и передаче</li>
            <li>Безопасная обработка покупок внутри приложения через StoreKit от Apple</li>
            <li>Отсутствие сбора персональной идентифицирующей информации</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Сторонние сервисы</h2>

          <h3 className="text-xl font-semibold mt-6">Сервисы Apple</h3>
          <p>Приложение использует следующие сервисы Apple:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>App Store / StoreKit:</strong> Для покупок и подписок внутри приложения</li>
            <li><strong>iCloud:</strong> Для опциональной синхронизации данных (контролируется пользователем)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Отсутствие сторонней аналитики</h3>
          <p>Мы <strong>не используем</strong> сторонние сервисы аналитики, отслеживания или рекламы.</p>

          <h2 className="text-2xl font-semibold mt-8">Ваши права и выбор</h2>

          <h3 className="text-xl font-semibold mt-6">Контроль данных</h3>
          <p>У вас есть полный контроль над вашими данными:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Доступ:</strong> Просмотр всех ваших документов и данных в Приложении</li>
            <li><strong>Удаление:</strong> Удаление отдельных документов или очистка всех данных приложения</li>
            <li><strong>Экспорт:</strong> Обмен или экспорт ваших документов в любое время</li>
            <li><strong>Синхронизация iCloud:</strong> Включение или отключение синхронизации с iCloud в Настройках</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Права пользователей из ЕС</h3>
          <p>Если вы находитесь в Европейском Союзе, у вас есть дополнительные права в соответствии с GDPR:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Право на доступ к вашим данным</li>
            <li>Право на исправление</li>
            <li>Право на удаление</li>
            <li>Право на портируемость данных</li>
            <li>Право на возражение против обработки</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Управление подписками</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Управляйте подписками через настройки вашей учётной записи Apple ID</li>
            <li>Отменяйте подписки в любое время без штрафов</li>
            <li>Пользователи из ЕС получают полную функциональность приложения бесплатно</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Региональные особенности</h2>

          <h3 className="text-xl font-semibold mt-6">Пользователи из ЕС</h3>
          <p>В соответствии с законодательством ЕС:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Подписки не требуются:</strong> Полная функциональность приложения бесплатна</li>
            <li><strong>Без ограничений:</strong> Неограниченные конвертации и документы</li>
            <li><strong>Минимизация данных:</strong> Мы собираем минимум данных, необходимых для работы приложения</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Пользователи вне ЕС</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Бесплатная версия:</strong> 3 конвертации в день, до 5 документов</li>
            <li><strong>Премиум подписки:</strong> Доступны для неограниченного использования</li>
            <li><strong>Опциональная покупка:</strong> Все подписки являются опциональными</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Конфиденциальность детей</h2>
          <p>
            PDF Studio не предназначено для детей младше 13 лет. Мы сознательно не собираем персональную информацию от детей младше 13 лет. Если вы считаете, что мы собрали информацию от ребёнка младше 13 лет, пожалуйста, немедленно свяжитесь с нами.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Изменения в Политике конфиденциальности</h2>
          <p>Мы можем время от времени обновлять эту Политику конфиденциальности. Мы уведомим вас о любых изменениях:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обновив дату «Последнее обновление» в начале этой политики</li>
            <li>Отображением уведомления в приложении о существенных изменениях</li>
            <li>Размещением обновлённой политики в Приложении</li>
          </ul>
          <p>
            Ваше продолжение использования Приложения после изменений означает принятие обновлённой Политики конфиденциальности.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Хранение данных</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Документы:</strong> Хранятся на вашем устройстве до тех пор, пока вы их не удалите</li>
            <li><strong>Предпочтения:</strong> Сохраняются до удаления Приложения или сброса настроек</li>
            <li><strong>Данные iCloud:</strong> Сохраняются в вашей учётной записи iCloud в соответствии с вашими настройками iCloud</li>
            <li><strong>Статистика использования:</strong> Хранится локально и сбрасывается ежедневно/при удалении приложения</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Международная передача данных</h2>
          <p>
            Ваши данные хранятся локально на вашем устройстве или в вашей личной учётной записи iCloud. Мы не передаём ваши данные за границу. Если вы используете iCloud, применяются политики передачи данных Apple.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Свяжитесь с нами</h2>
          <p>Если у вас есть вопросы, замечания или запросы относительно этой Политики конфиденциальности или ваших данных, пожалуйста, свяжитесь с нами:</p>
          <p className="mt-4">
            <strong>Email:</strong> spiro.boris@yandex.ru<br />
            <strong>Приложение:</strong> PDF Studio
          </p>

          <h2 className="text-2xl font-semibold mt-8">Соблюдение законодательства</h2>
          <p>Эта Политика конфиденциальности соответствует:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Общему регламенту по защите данных (GDPR)</li>
            <li>Закону Калифорнии о конфиденциальности потребителей (CCPA)</li>
            <li>Закону ЕС о цифровых услугах (DSA)</li>
            <li>Руководству по проверке приложений App Store от Apple</li>
          </ul>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Краткое изложение</h2>
            <ul className="space-y-2">
              <li><strong>Что мы собираем:</strong> Документы, которые вы создаёте, настройки, которые вы выбираете, и основная информация об устройстве</li>
              <li><strong>Как мы это используем:</strong> Для обеспечения функциональности приложения и улучшения вашего опыта</li>
              <li><strong>Где это хранится:</strong> На вашем устройстве и опционально в вашей учётной записи iCloud</li>
              <li><strong>С кем мы делимся:</strong> Ни с кем - ваши данные остаются конфиденциальными</li>
              <li><strong>Ваш контроль:</strong> Полный доступ для просмотра, экспорта или удаления ваших данных в любое время</li>
            </ul>
          </div>

          <p className="mt-8 text-center font-semibold text-lg">
            PDF Studio уважает вашу конфиденциальность. Ваши документы принадлежат вам и остаются на вашем устройстве.
          </p>

          <p className="text-center text-muted-foreground mt-8">
            © 2025 App by Spiro. Все права защищены.
          </p>
        </section>

        {/* English Version */}
        <section className="mb-16 prose prose-invert max-w-none space-y-6 border-t border-border pt-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy - PDF Studio</h1>
          
          <p className="text-sm text-muted-foreground mb-8">
            <strong>Last Updated: November 16, 2025</strong>
          </p>

          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            PDF Studio ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application PDF Studio (the "App").
          </p>

          <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6">Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Documents and Files:</strong> PDF files and images you create, import, or convert in the App</li>
            <li><strong>Signatures:</strong> Digital signatures you create and save in the App</li>
            <li><strong>Settings and Preferences:</strong> Your language choice, theme settings, and app configuration</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Device Information:</strong> Device model, operating system version, and unique device identifiers</li>
            <li><strong>Usage Data:</strong> App features used, conversion statistics, and performance metrics</li>
            <li><strong>Region Information:</strong> Country/region code for subscription availability determination (EU compliance)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">iCloud Sync (Optional)</h3>
          <p>If you enable iCloud sync:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your documents, folders, and app data are stored in your personal iCloud account</li>
            <li>We do not have access to your iCloud data</li>
            <li>Apple's iCloud Privacy Policy applies to synced data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
          <p>We use the collected information for:</p>

          <h3 className="text-xl font-semibold mt-6">1. Providing App Functionality</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing PDF conversions and document operations</li>
            <li>Storing and managing your documents and signatures</li>
            <li>Syncing data between your devices via iCloud (if enabled)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">2. Improving User Experience</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remembering your preferences and settings</li>
            <li>Providing localized content in your chosen language</li>
            <li>Optimizing app performance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">3. Managing Subscriptions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing in-app purchases through Apple's App Store</li>
            <li>Determining regional subscription availability</li>
            <li>Managing free tier limits (outside EU)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">4. Legal Compliance</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complying with EU Digital Services Act (DSA) requirements</li>
            <li>Providing free unlimited access to EU users as required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Data Storage and Security</h2>

          <h3 className="text-xl font-semibold mt-6">Local Storage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All documents and files are stored <strong>locally on your device</strong></li>
            <li>We do not upload your documents to our servers</li>
            <li>Your data remains under your control</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">iCloud Storage (Optional)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>When enabled, data is encrypted and stored in your personal iCloud account</li>
            <li>We do not have access to your iCloud data</li>
            <li>You can disable iCloud sync anytime in Settings</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Security Measures</h3>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data at rest and in transit</li>
            <li>Secure in-app purchase handling through Apple's StoreKit</li>
            <li>No collection of personally identifiable information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Third-Party Services</h2>

          <h3 className="text-xl font-semibold mt-6">Apple Services</h3>
          <p>The App uses the following Apple services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>App Store / StoreKit:</strong> For in-app purchases and subscriptions</li>
            <li><strong>iCloud:</strong> For optional data synchronization (user-controlled)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">No Third-Party Analytics</h3>
          <p>We <strong>do not use</strong> third-party analytics, tracking, or advertising services.</p>

          <h2 className="text-2xl font-semibold mt-8">Your Rights and Choices</h2>

          <h3 className="text-xl font-semibold mt-6">Data Control</h3>
          <p>You have full control over your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> View all your documents and data in the App</li>
            <li><strong>Deletion:</strong> Delete individual documents or clear all app data</li>
            <li><strong>Export:</strong> Share or export your documents anytime</li>
            <li><strong>iCloud Sync:</strong> Enable or disable iCloud sync in Settings</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">EU User Rights</h3>
          <p>If you are located in the European Union, you have additional rights under GDPR:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access your data</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Managing Subscriptions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manage subscriptions through your Apple ID account settings</li>
            <li>Cancel subscriptions anytime without penalty</li>
            <li>EU users receive full app functionality for free</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Regional Specifics</h2>

          <h3 className="text-xl font-semibold mt-6">EU Users</h3>
          <p>In accordance with EU law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No Subscription Required:</strong> Full app functionality is free</li>
            <li><strong>No Limits:</strong> Unlimited conversions and documents</li>
            <li><strong>Data Minimization:</strong> We collect minimum data necessary for app operation</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Non-EU Users</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Free Tier:</strong> 3 conversions per day, up to 5 documents</li>
            <li><strong>Premium Subscriptions:</strong> Available for unlimited usage</li>
            <li><strong>Optional Purchase:</strong> All subscriptions are optional</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Children's Privacy</h2>
          <p>
            PDF Studio is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Updating the "Last Updated" date at the top of this policy</li>
            <li>Displaying an in-app notification about significant changes</li>
            <li>Posting the updated policy in the App</li>
          </ul>
          <p>
            Your continued use of the App after changes means acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Documents:</strong> Stored on your device until you delete them</li>
            <li><strong>Preferences:</strong> Saved until App deletion or settings reset</li>
            <li><strong>iCloud Data:</strong> Saved in your iCloud account according to your iCloud settings</li>
            <li><strong>Usage Statistics:</strong> Stored locally and reset daily/on app deletion</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">International Data Transfers</h2>
          <p>
            Your data is stored locally on your device or in your personal iCloud account. We do not transfer your data internationally. If you use iCloud, Apple's data transfer policies apply.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:</p>
          <p className="mt-4">
            <strong>Email:</strong> spiro.boris@yandex.ru<br />
            <strong>App:</strong> PDF Studio
          </p>

          <h2 className="text-2xl font-semibold mt-8">Legal Compliance</h2>
          <p>This Privacy Policy complies with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>EU Digital Services Act (DSA)</li>
            <li>Apple App Store Review Guidelines</li>
          </ul>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <ul className="space-y-2">
              <li><strong>What we collect:</strong> Documents you create, settings you choose, and basic device information</li>
              <li><strong>How we use it:</strong> To provide app functionality and improve your experience</li>
              <li><strong>Where it's stored:</strong> On your device and optionally in your iCloud account</li>
              <li><strong>Who we share with:</strong> No one - your data remains private</li>
              <li><strong>Your control:</strong> Full access to view, export, or delete your data anytime</li>
            </ul>
          </div>

          <p className="mt-8 text-center font-semibold text-lg">
            PDF Studio respects your privacy. Your documents belong to you and remain on your device.
          </p>

          <p className="text-center text-muted-foreground mt-8">
            © 2025 App by Spiro. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PDFStudioScannerPrivacy;
