const FitStepsPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy - FitSteps</h1>
        
        {/* English Version */}
        <div className="mb-16 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how the <strong>FitSteps</strong> app collects, uses, and protects your information.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Core Principle:</strong> All data analysis and processing occurs <strong>locally on your device</strong>. We do not transmit your personal data, workout information, or health metrics to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Data We Process</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Workout Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> The app stores your custom workouts, exercises, and training plans</li>
              <li><strong>Processing:</strong> All data is stored and processed locally on your device</li>
              <li><strong>Storage:</strong> We do not backup, copy, or transmit your workout data to external servers</li>
              <li><strong>Purpose:</strong> Creating personalized fitness routines and tracking your progress</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Health Metrics (Optional)</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> With your permission, the app may access HealthKit data</li>
              <li><strong>Processing:</strong> Health data remains on your device and is processed locally</li>
              <li><strong>Storage:</strong> We do not store or transmit health metrics to external servers</li>
              <li><strong>Purpose:</strong> Integration with your fitness tracking and workout optimization</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Technical Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Device Information:</strong> iPhone model, iOS version</li>
              <li><strong>Usage Statistics:</strong> Number of workouts created, exercises performed</li>
              <li><strong>App Settings:</strong> Selected language, theme, notification preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Core Features</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Workout Creation:</strong> Building custom exercise routines and training plans</li>
              <li><strong>Progress Tracking:</strong> Monitoring your fitness journey and achievements</li>
              <li><strong>Exercise Library:</strong> Managing and organizing your exercise database</li>
              <li><strong>Reminders:</strong> Sending workout notifications based on your schedule</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.2 App Improvement</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Performance Analytics:</strong> App loading time, feature usage patterns</li>
              <li><strong>User Experience:</strong> Interface optimization based on user preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Local Processing</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>All processing happens on your device</strong></li>
              <li><strong>No data transmission to external servers</strong></li>
              <li><strong>Uses built-in iOS APIs for secure data access</strong></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Information Protection</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Encryption:</strong> All app data is protected by iOS system encryption</li>
              <li><strong>Limited Access:</strong> App requests only minimally necessary permissions</li>
              <li><strong>Isolated Environment:</strong> Works in iOS sandbox to prevent data leaks</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.3 User Control</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Permission Revocation:</strong> Revoke access to health data anytime in iOS Settings</li>
              <li><strong>Data Deletion:</strong> All local data is automatically deleted when you uninstall the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>We DO NOT share your personal data with third parties.</strong>
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">5.1 Exceptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Data may be shared only in the following cases:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Legal Requirements:</strong> When we receive a valid request from law enforcement</li>
              <li><strong>Rights Protection:</strong> To protect our rights, user safety, or public interests</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Anonymous Statistics</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We may collect anonymized app usage statistics</li>
              <li>This information contains no personal data and cannot be linked to individual users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since all processing occurs locally on your device, <strong>no international transfer of personal data takes place</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">7.1 Local Storage</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Workout History:</strong> Stored until you delete workouts or uninstall the app</li>
              <li><strong>User Settings:</strong> Preserved for app functionality (language, theme, preferences)</li>
              <li><strong>Retention Period:</strong> Until app deletion or manual data clearing</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.2 Automatic Deletion</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Temporary Files:</strong> Automatically deleted after use</li>
              <li><strong>Cache Data:</strong> Cleared when memory limits are exceeded</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. User Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              In accordance with applicable law, you have the following rights:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">8.1 Access and Control</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>View Data:</strong> Access all data processed by the app in Settings</li>
              <li><strong>Modify Settings:</strong> Adjust data processing parameters anytime</li>
              <li><strong>Delete Data:</strong> Clear history and cache in app settings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">8.2 Consent Withdrawal</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Disable Permissions:</strong> Revoke access to health data in iOS Settings</li>
              <li><strong>Limited Features:</strong> Use basic features without personal data access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children and Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our app is not intended for children under 13 years of age. We do not knowingly collect personal data from children under 13.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>If you are a parent or guardian and learn that your child has provided us with personal data, please contact us.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Privacy Policy Changes</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">10.1 Change Notifications</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We may update this Privacy Policy from time to time</li>
              <li>Significant changes will be communicated through app updates</li>
              <li>Last update date is indicated at the top of this document</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.2 Continued Use</h3>
            <p className="text-muted-foreground leading-relaxed">
              By continuing to use the app after changes are made, you agree to the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or data processing, contact us:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Email:</strong> spiro.boris@yandex.ru
            </p>
          </section>
        </div>

        <div className="border-t border-accent/20 pt-8 mb-8"></div>

        {/* Russian Version */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Политика конфиденциальности - FitSteps</h1>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. ВВЕДЕНИЕ</h2>
            <p className="text-muted-foreground leading-relaxed">
              Благодарим вас за использование FitSteps ("Приложение"). Ваша конфиденциальность чрезвычайно важна для нас. Эта Политика конфиденциальности объясняет, как мы собираем, используем, храним и защищаем вашу информацию при использовании нашего мобильного приложения для iOS.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>ВАЖНО:</strong> FitSteps — это приложение с приоритетом конфиденциальности. Мы <strong>НЕ собираем, не передаем и не продаем</strong> ваши персональные данные третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. ИНФОРМАЦИЯ, КОТОРУЮ МЫ СОБИРАЕМ</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Локальные данные</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Все данные о ваших тренировках хранятся исключительно на вашем устройстве:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Программы тренировок и упражнения</li>
              <li>История тренировочных сессий</li>
              <li>Подходы, веса и повторения</li>
              <li>Фотографии упражнений (хранятся только локально)</li>
              <li>Заметки и настройки</li>
              <li>Статистика и достижения</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Данные Apple Health (опционально)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              При вашем согласии приложение может:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Записывать данные о тренировках в приложение Здоровье (Apple Health)</li>
              <li>Читать данные о физической активности для улучшения статистики</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>ВАЖНО:</strong> Доступ к Apple Health требует явного разрешения. Вы можете в любой момент отозвать разрешение в настройках iOS.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Уведомления (опционально)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              При включении уведомлений мы сохраняем локально:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Расписание напоминаний о тренировках</li>
              <li>Настройки времени уведомлений</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Все уведомления обрабатываются локально на вашем устройстве.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. КАК МЫ ИСПОЛЬЗУЕМ ИНФОРМАЦИЮ</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-2">
              Мы используем вашу информацию исключительно для:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Отслеживания прогресса тренировок</li>
              <li>Расчета статистики и достижений</li>
              <li>Создания программ тренировок</li>
              <li>Отправки напоминаний (если включены)</li>
              <li>Синхронизации с Apple Health (если включена)</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-4 mb-2">
              Мы <strong>НЕ используем</strong> ваши данные для:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Рекламы или таргетинга</li>
              <li>Аналитики или отслеживания</li>
              <li>Продажи третьим лицам</li>
              <li>Передачи на внешние серверы</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. ХРАНЕНИЕ ДАННЫХ</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Локальное хранилище</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Все данные хранятся локально в защищенной базе данных SwiftData</li>
              <li>Данные зашифрованы стандартным шифрованием iOS</li>
              <li>Резервное копирование в iCloud (если включено в настройках iOS)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Безопасность</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Мы применяем следующие меры безопасности:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Использование встроенных механизмов безопасности iOS</li>
              <li>Шифрование данных на уровне операционной системы</li>
              <li>Защита данных через Keychain (для чувствительной информации)</li>
              <li>Отсутствие передачи данных по сети</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. РЕЗЕРВНОЕ КОПИРОВАНИЕ И СИНХРОНИЗАЦИЯ</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">5.1 iCloud (опционально)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Если вы включили резервное копирование iCloud на вашем устройстве:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Данные приложения могут быть включены в резервную копию iCloud</li>
              <li>Резервное копирование управляется Apple в соответствии с их политикой конфиденциальности</li>
              <li>Мы <strong>НЕ имеем</strong> прямого доступа к вашим данным в iCloud</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-3">
              <strong>Для отключения резервного копирования:</strong><br />
              Настройки iOS → [Ваше имя] → iCloud → Управление хранилищем → Резервные копии → [Ваше устройство] → FitSteps (выкл)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. ПРАВА ПОЛЬЗОВАТЕЛЯ</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              У вас есть полный контроль над вашими данными:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">6.1 Доступ к данным</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Все ваши данные доступны в приложении в любое время</li>
              <li>Вы можете просматривать и редактировать любую информацию</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Удаление данных</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Вы можете удалить отдельные тренировки, программы или упражнения</li>
              <li>При удалении приложения все данные удаляются с устройства</li>
              <li>Для полного удаления данных из резервной копии iCloud удалите приложение и резервную копию</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">6.3 Экспорт данных</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Вы можете экспортировать данные через функцию Share</li>
              <li>Экспорт доступен для программ, тренировок и статистики</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. РАЗРЕШЕНИЯ ПРИЛОЖЕНИЯ</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">7.1 Обязательные разрешения</h3>
            <p className="text-muted-foreground leading-relaxed">
              Нет обязательных разрешений — приложение работает без доступа к системным функциям.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.2 Опциональные разрешения</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Фотографии (Photo Library)</strong> — для добавления фотографий упражнений (только выбранные фото)</li>
              <li><strong>Apple Health</strong> — для синхронизации данных о тренировках</li>
              <li><strong>Уведомления</strong> — для напоминаний о тренировках</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Все разрешения опциональны и могут быть отозваны в настройках iOS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. ДЕТИ</h2>
            <p className="text-muted-foreground leading-relaxed">
              Приложение предназначено для пользователей от 13 лет и старше. Мы сознательно не собираем информацию о детях младше 13 лет. Если вы родитель и обнаружили, что ваш ребенок предоставил нам персональную информацию, свяжитесь с нами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. СТОРОННИЕ СЕРВИСЫ</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-2">
              Мы <strong>НЕ используем:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Аналитические сервисы (Google Analytics, Firebase и т.д.)</li>
              <li>Рекламные сети</li>
              <li>Сервисы отслеживания</li>
              <li>Социальные медиа SDK</li>
              <li>Облачные базы данных третьих лиц</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-3 mb-2">
              <strong>Единственная интеграция:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Apple Health (опционально, управляется вами)</li>
              <li>Apple iCloud (опционально, для резервного копирования через iOS)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. ИЗМЕНЕНИЯ В ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Мы можем обновлять эту Политику конфиденциальности время от времени. При внесении существенных изменений мы:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Обновим дату "Дата вступления в силу" вверху документа</li>
              <li>Уведомим вас через приложение при следующем запуске</li>
              <li>Опубликуем обновленную версию в App Store</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Продолжая использовать приложение после изменений, вы соглашаетесь с обновленной Политикой.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Если у вас есть вопросы или опасения относительно этой Политики конфиденциальности, пожалуйста, свяжитесь с нами:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Email:</strong> spiro.boris@yandex.ru<br />
              <strong>Разработчик:</strong> Boris Spiro
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. СОГЛАСИЕ</h2>
            <p className="text-muted-foreground leading-relaxed">
              Используя FitSteps, вы соглашаетесь с условиями данной Политики конфиденциальности.
            </p>
          </section>

          <section className="bg-accent/10 p-6 rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">КРАТКОЕ РЕЗЮМЕ:</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Все данные хранятся только на вашем устройстве</li>
              <li>✓ Нет серверов, нет сбора данных, нет рекламы</li>
              <li>✓ Полный контроль над вашими данными</li>
              <li>✓ Интеграция с Apple Health — опциональна</li>
              <li>✓ Открытый и прозрачный подход к конфиденциальности</li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              FitSteps разработан с философией "конфиденциальность прежде всего".
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block rounded bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/80"
          >
            Вернуться на главную / Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default FitStepsPrivacy;