const ScanMeProPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy - ScanMe Pro</h1>
        
        {/* English Version */}
        <section className="mb-16 prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">PRIVACY POLICY</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. INTRODUCTION</h3>
          <p>
            Thank you for using ScanMe Pro ("Application"). Your privacy is extremely important to us. 
            This Privacy Policy explains how we collect, use, store, and protect your information when 
            using our iOS mobile application.
          </p>
          <p className="font-semibold">
            IMPORTANT: ScanMe Pro is a privacy-first application. We DO NOT collect, transmit, or sell 
            your personal data to third parties.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. INFORMATION WE COLLECT</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">2.1 Local Data</h4>
          <p>All document data is stored exclusively on your device:</p>
          <ul>
            <li>Scanned documents and PDF files</li>
            <li>OCR-recognized text</li>
            <li>Document signatures and annotations</li>
            <li>Document folders and organization</li>
            <li>App settings and preferences</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">2.2 iCloud Data (Optional)</h4>
          <p>With your consent, the app can:</p>
          <ul>
            <li>Synchronize documents across your devices via iCloud</li>
            <li>Store encrypted backups in your personal iCloud storage</li>
          </ul>
          <p className="font-semibold">
            IMPORTANT: iCloud access requires explicit permission. You can revoke access at any time 
            in iOS settings.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">2.3 Camera Access (Required for Scanning)</h4>
          <p>For document scanning, we require:</p>
          <ul>
            <li>Camera access to capture document images</li>
            <li>All photos are processed locally and never transmitted</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">2.4 Photo Library (Optional)</h4>
          <p>To import existing documents:</p>
          <ul>
            <li>Access to selected photos only (not entire library)</li>
            <li>Imported images are converted to PDFs locally</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. HOW WE USE INFORMATION</h3>
          <p>We use your information exclusively for:</p>
          <ul>
            <li>Converting scanned images to PDF documents</li>
            <li>Performing OCR text recognition</li>
            <li>Adding signatures and annotations</li>
            <li>Organizing documents in folders</li>
            <li>Syncing with iCloud (if enabled)</li>
          </ul>

          <p>We DO NOT use your data for:</p>
          <ul>
            <li>Advertising or targeting</li>
            <li>Analytics or tracking</li>
            <li>Selling to third parties</li>
            <li>Transmission to external servers</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. DATA STORAGE</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">4.1 Local Storage</h4>
          <ul>
            <li>All documents stored in secure local database</li>
            <li>Data encrypted with iOS standard encryption</li>
            <li>Backup to iCloud (if enabled in iOS settings)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">4.2 Security</h4>
          <p>We implement the following security measures:</p>
          <ul>
            <li>Built-in iOS security mechanisms</li>
            <li>OS-level data encryption</li>
            <li>Keychain protection for sensitive data</li>
            <li>No network data transmission</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. BACKUP AND SYNCHRONIZATION</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">5.1 iCloud (Optional)</h4>
          <p>If you have enabled iCloud backup on your device:</p>
          <ul>
            <li>App data may be included in iCloud backup</li>
            <li>Backup is managed by Apple according to their privacy policy</li>
            <li>We have NO direct access to your data in iCloud</li>
          </ul>

          <p>To disable iCloud backup:</p>
          <p className="italic">iOS Settings → [Your Name] → iCloud → Manage Storage → Backups → [Your Device] → ScanMe Pro (off)</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">6. USER RIGHTS</h3>
          <p>You have full control over your data:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">6.1 Data Access</h4>
          <ul>
            <li>All your documents are accessible in the app at any time</li>
            <li>You can view, edit, and manage any document</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">6.2 Data Deletion</h4>
          <ul>
            <li>You can delete individual documents or folders</li>
            <li>Deleting the app removes all data from device</li>
            <li>To fully remove from iCloud backup, delete app and backup</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">6.3 Data Export</h4>
          <ul>
            <li>Export documents via Share function</li>
            <li>Export as PDF or original format</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">7. APP PERMISSIONS</h3>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">7.1 Required Permissions</h4>
          <ul>
            <li>Camera - for scanning documents</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">7.2 Optional Permissions</h4>
          <ul>
            <li>Photos (Photo Library) - to import existing images</li>
            <li>iCloud - for document synchronization</li>
            <li>Notifications - for reminders and alerts</li>
          </ul>

          <p>All permissions can be revoked in iOS settings.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">8. CHILDREN</h3>
          <p>
            The app is intended for users aged 13 and above. We do not knowingly collect information 
            from children under 13. If you are a parent and discover that your child has provided us 
            with personal information, please contact us.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">9. THIRD-PARTY SERVICES</h3>
          <p>We DO NOT use:</p>
          <ul>
            <li>Analytics services (Google Analytics, Firebase, etc.)</li>
            <li>Advertising networks</li>
            <li>Tracking services</li>
            <li>Social media SDKs</li>
            <li>Third-party cloud databases</li>
          </ul>

          <p>The only integrations:</p>
          <ul>
            <li>Apple iCloud (optional, managed by you)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">10. CHANGES TO PRIVACY POLICY</h3>
          <p>
            We may update this Privacy Policy from time to time. When making significant changes, we will:
          </p>
          <ul>
            <li>Update the "Effective Date" at the top of this document</li>
            <li>Notify you through the app on next launch</li>
            <li>Publish the updated version in the App Store</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">11. CONTACT INFORMATION</h3>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <p>Email: spiro.boris@yandex.ru</p>
          <p>Developer: Boris Spiro</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">12. CONSENT</h3>
          <p>By using ScanMe Pro, you agree to the terms of this Privacy Policy.</p>

          <div className="bg-accent/10 p-4 rounded-lg mt-6">
            <h4 className="font-semibold mb-2">QUICK SUMMARY:</h4>
            <ul className="space-y-1">
              <li>✓ All documents stored only on your device</li>
              <li>✓ No servers, no data collection, no ads</li>
              <li>✓ Full control over your documents</li>
              <li>✓ iCloud integration - optional</li>
              <li>✓ Open and transparent privacy approach</li>
            </ul>
            <p className="mt-2 font-semibold">ScanMe Pro is built with a "privacy-first" philosophy.</p>
          </div>
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
