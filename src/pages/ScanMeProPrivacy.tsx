const ScanMeProPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy - ScanMe Pro</h1>
        
        {/* English Version */}
        <section className="mb-16 prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">PRIVACY POLICY</h2>

          <p>
            ScanMe Pro ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard your information when you use our mobile application 
            ScanMe Pro (the "App").
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">1. Information You Provide</h4>
          <ul>
            <li><strong>Documents and Images:</strong> When you scan documents or import images, these files are stored locally on your device</li>
            <li><strong>Signatures:</strong> Digital signatures you create are stored locally on your device</li>
            <li><strong>User Preferences:</strong> App settings and preferences (language, scan quality, theme)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">2. Automatically Collected Information</h4>
          <ul>
            <li><strong>Device Information:</strong> Device model, operating system version, unique device identifiers</li>
            <li><strong>Usage Data:</strong> App features used, crash reports, performance data</li>
            <li><strong>iCloud Data:</strong> If you enable iCloud sync, your documents are stored in your personal iCloud account</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide core scanning and document management functionality</li>
            <li>Sync your documents across your devices via iCloud (if enabled)</li>
            <li>Improve app performance and fix bugs</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Provide customer support</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage and Security</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Local Storage:</h4>
          <ul>
            <li>All documents, scans, and signatures are stored locally on your device</li>
            <li>Secure Vault documents are encrypted using AES-256 encryption</li>
            <li>PIN codes and biometric data are stored in iOS Keychain</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">iCloud Storage:</h4>
          <ul>
            <li>When iCloud sync is enabled, documents are stored in your personal iCloud account</li>
            <li>We do not have access to your iCloud data</li>
            <li>Apple's privacy policy applies to iCloud storage</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Security Measures:</h4>
          <ul>
            <li>End-to-end encryption for Secure Vault documents</li>
            <li>Biometric authentication (Face ID/Touch ID) support</li>
            <li>No third-party access to your documents</li>
            <li>No cloud storage on our servers</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Sharing</h3>
          
          <p className="font-semibold">We DO NOT:</p>
          <ul>
            <li>Sell your personal information to third parties</li>
            <li>Share your documents with any external services</li>
            <li>Upload your data to our servers (except iCloud sync)</li>
            <li>Use your documents for training AI models</li>
            <li>Track your location</li>
          </ul>

          <p className="font-semibold mt-4">We MAY share information only in these limited cases:</p>
          <ul>
            <li>When required by law or legal process</li>
            <li>To protect our rights or the safety of users</li>
            <li>With your explicit consent</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Services</h3>
          <p>The App uses the following Apple services:</p>
          <ul>
            <li><strong>iCloud:</strong> For optional document synchronization (controlled by you)</li>
            <li><strong>App Store:</strong> For app distribution and updates</li>
            <li><strong>Apple Vision Framework:</strong> For on-device OCR processing</li>
          </ul>
          <p>These services are governed by Apple's Privacy Policy.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access all your data (stored locally on your device)</li>
            <li>Delete your data at any time by deleting the app</li>
            <li>Disable iCloud sync in app settings</li>
            <li>Export your documents in standard formats (PDF, images)</li>
            <li>Contact us with privacy-related questions</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            updating the "Last Updated" date at the top of this policy.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <p><strong>Email:</strong> spiro.boris@yandex.ru</p>
        </section>

        {/* Russian Version */}
        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. ВВЕДЕНИЕ</h3>
          <p>
            Благодарим вас за использование ScanMe Pro ("Приложение"). Ваша конфиденциальность чрезвычайно 
            важна для нас. Эта Политика конфиденциальности объясняет, как мы собираем, используем, храним и 
            защищаем вашу информацию при использовании нашего мобильного приложения для iOS.
          </p>
          <p className="font-semibold">
            ВАЖНО: ScanMe Pro — это приложение с приоритетом конфиденциальности. Мы НЕ собираем, не передаем 
            и не продаем ваши персональные данные третьим лицам.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. ИНФОРМАЦИЯ, КОТОРУЮ МЫ СОБИРАЕМ</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">2.1 Локальные данные</h4>
          <p>Все данные о документах хранятся исключительно на вашем устройстве:</p>
          <ul>
            <li>Отсканированные документы и PDF-файлы</li>
            <li>OCR-распознанный текст</li>
            <li>Подписи и аннотации документов</li>
            <li>Папки и организация документов</li>
            <li>Настройки приложения</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">2.2 Данные iCloud (опционально)</h4>
          <p>При вашем согласии приложение может:</p>
          <ul>
            <li>Синхронизировать документы между вашими устройствами через iCloud</li>
            <li>Хранить зашифрованные резервные копии в вашем личном хранилище iCloud</li>
          </ul>
          <p className="font-semibold">
            ВАЖНО: Доступ к iCloud требует явного разрешения. Вы можете в любой момент отозвать разрешение 
            в настройках iOS.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">2.3 Доступ к камере (требуется для сканирования)</h4>
          <p>Для сканирования документов требуется:</p>
          <ul>
            <li>Доступ к камере для захвата изображений документов</li>
            <li>Все фотографии обрабатываются локально и никогда не передаются</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">2.4 Библиотека фотографий (опционально)</h4>
          <p>Для импорта существующих документов:</p>
          <ul>
            <li>Доступ только к выбранным фотографиям (не ко всей библиотеке)</li>
            <li>Импортированные изображения конвертируются в PDF локально</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. КАК МЫ ИСПОЛЬЗУЕМ ИНФОРМАЦИЮ</h3>
          <p>Мы используем вашу информацию исключительно для:</p>
          <ul>
            <li>Конвертации отсканированных изображений в PDF-документы</li>
            <li>Выполнения OCR-распознавания текста</li>
            <li>Добавления подписей и аннотаций</li>
            <li>Организации документов в папки</li>
            <li>Синхронизации с iCloud (если включена)</li>
          </ul>

          <p>Мы НЕ используем ваши данные для:</p>
          <ul>
            <li>Рекламы или таргетинга</li>
            <li>Аналитики или отслеживания</li>
            <li>Продажи третьим лицам</li>
            <li>Передачи на внешние серверы</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. ХРАНЕНИЕ ДАННЫХ</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">4.1 Локальное хранилище</h4>
          <ul>
            <li>Все документы хранятся в защищенной локальной базе данных</li>
            <li>Данные зашифрованы стандартным шифрованием iOS</li>
            <li>Резервное копирование в iCloud (если включено в настройках iOS)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">4.2 Безопасность</h4>
          <p>Мы применяем следующие меры безопасности:</p>
          <ul>
            <li>Использование встроенных механизмов безопасности iOS</li>
            <li>Шифрование данных на уровне операционной системы</li>
            <li>Защита данных через Keychain (для чувствительной информации)</li>
            <li>Отсутствие передачи данных по сети</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. РЕЗЕРВНОЕ КОПИРОВАНИЕ И СИНХРОНИЗАЦИЯ</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">5.1 iCloud (опционально)</h4>
          <p>Если вы включили резервное копирование iCloud на вашем устройстве:</p>
          <ul>
            <li>Данные приложения могут быть включены в резервную копию iCloud</li>
            <li>Резервное копирование управляется Apple в соответствии с их политикой конфиденциальности</li>
            <li>Мы НЕ имеем прямого доступа к вашим данным в iCloud</li>
          </ul>

          <p>Для отключения резервного копирования:</p>
          <p className="italic">Настройки iOS → [Ваше имя] → iCloud → Управление хранилищем → Резервные копии → [Ваше устройство] → ScanMe Pro (выкл)</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">6. ПРАВА ПОЛЬЗОВАТЕЛЯ</h3>
          <p>У вас есть полный контроль над вашими данными:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">6.1 Доступ к данным</h4>
          <ul>
            <li>Все ваши документы доступны в приложении в любое время</li>
            <li>Вы можете просматривать, редактировать и управлять любым документом</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">6.2 Удаление данных</h4>
          <ul>
            <li>Вы можете удалить отдельные документы или папки</li>
            <li>При удалении приложения все данные удаляются с устройства</li>
            <li>Для полного удаления данных из резервной копии iCloud удалите приложение и резервную копию</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">6.3 Экспорт данных</h4>
          <ul>
            <li>Экспорт документов через функцию Share</li>
            <li>Экспорт в PDF или оригинальном формате</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">7. РАЗРЕШЕНИЯ ПРИЛОЖЕНИЯ</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">7.1 Обязательные разрешения</h4>
          <ul>
            <li>Камера - для сканирования документов</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">7.2 Опциональные разрешения</h4>
          <ul>
            <li>Фотографии (Photo Library) - для импорта существующих изображений</li>
            <li>iCloud - для синхронизации документов</li>
            <li>Уведомления - для напоминаний и оповещений</li>
          </ul>

          <p>Все разрешения могут быть отозваны в настройках iOS.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">8. ДЕТИ</h3>
          <p>
            Приложение предназначено для пользователей от 13 лет и старше. Мы сознательно не собираем информацию 
            о детях младше 13 лет. Если вы родитель и обнаружили, что ваш ребенок предоставил нам персональную 
            информацию, свяжитесь с нами.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">9. СТОРОННИЕ СЕРВИСЫ</h3>
          <p>Мы НЕ используем:</p>
          <ul>
            <li>Аналитические сервисы (Google Analytics, Firebase и т.д.)</li>
            <li>Рекламные сети</li>
            <li>Сервисы отслеживания</li>
            <li>Социальные медиа SDK</li>
            <li>Облачные базы данных третьих лиц</li>
          </ul>

          <p>Единственная интеграция:</p>
          <ul>
            <li>Apple iCloud (опционально, управляется вами)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">10. ИЗМЕНЕНИЯ В ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</h3>
          <p>
            Мы можем обновлять эту Политику конфиденциальности время от времени. При внесении существенных 
            изменений мы:
          </p>
          <ul>
            <li>Обновим дату "Дата вступления в силу" вверху документа</li>
            <li>Уведомим вас через приложение при следующем запуске</li>
            <li>Опубликуем обновленную версию в App Store</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">11. КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
          <p>
            Если у вас есть вопросы или опасения относительно этой Политики конфиденциальности, пожалуйста, 
            свяжитесь с нами:
          </p>
          <p>Email: spiro.boris@yandex.ru</p>
          <p>Разработчик: Boris Spiro</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">12. СОГЛАСИЕ</h3>
          <p>Используя ScanMe Pro, вы соглашаетесь с условиями данной Политики конфиденциальности.</p>

          <div className="bg-accent/10 p-4 rounded-lg mt-6">
            <h4 className="font-semibold mb-2">КРАТКОЕ РЕЗЮМЕ:</h4>
            <ul className="space-y-1">
              <li>✓ Все документы хранятся только на вашем устройстве</li>
              <li>✓ Нет серверов, нет сбора данных, нет рекламы</li>
              <li>✓ Полный контроль над вашими документами</li>
              <li>✓ Интеграция с iCloud — опциональна</li>
              <li>✓ Открытый и прозрачный подход к конфиденциальности</li>
            </ul>
            <p className="mt-2 font-semibold">ScanMe Pro разработан с философией "конфиденциальность прежде всего".</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScanMeProPrivacy;
