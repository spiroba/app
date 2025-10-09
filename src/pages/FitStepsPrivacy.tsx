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
            <h2 className="text-2xl font-semibold mb-4">1. Введение</h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы ценим вашу конфиденциальность и стремимся защищать ваши персональные данные. Данная Политика конфиденциальности объясняет, как приложение <strong>FitSteps</strong> собирает, использует и защищает вашу информацию.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Главный принцип:</strong> Все анализы и обработка данных происходят <strong>локально на вашем устройстве</strong>. Мы не передаем ваши персональные данные, информацию о тренировках или показатели здоровья третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Какие данные мы обрабатываем</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Данные тренировок</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Доступ:</strong> Приложение хранит ваши пользовательские тренировки, упражнения и планы тренировок</li>
              <li><strong>Обработка:</strong> Все данные хранятся и обрабатываются локально на вашем устройстве</li>
              <li><strong>Хранение:</strong> Мы не создаем резервные копии, не копируем и не передаем данные ваших тренировок на внешние серверы</li>
              <li><strong>Цель:</strong> Создание персонализированных фитнес-программ и отслеживание вашего прогресса</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Показатели здоровья (опционально)</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Доступ:</strong> С вашего разрешения приложение может получать доступ к данным HealthKit</li>
              <li><strong>Обработка:</strong> Данные о здоровье остаются на вашем устройстве и обрабатываются локально</li>
              <li><strong>Хранение:</strong> Мы не храним и не передаем показатели здоровья на внешние серверы</li>
              <li><strong>Цель:</strong> Интеграция с отслеживанием фитнеса и оптимизация тренировок</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Техническая информация</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Информация об устройстве:</strong> Модель iPhone, версия iOS</li>
              <li><strong>Статистика использования:</strong> Количество созданных тренировок, выполненных упражнений</li>
              <li><strong>Настройки приложения:</strong> Выбранный язык, тема, настройки уведомлений</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Как мы используем ваши данные</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Основные функции</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Создание тренировок:</strong> Построение пользовательских программ упражнений и тренировочных планов</li>
              <li><strong>Отслеживание прогресса:</strong> Мониторинг вашего фитнес-путешествия и достижений</li>
              <li><strong>Библиотека упражнений:</strong> Управление и организация вашей базы данных упражнений</li>
              <li><strong>Напоминания:</strong> Отправка уведомлений о тренировках на основе вашего расписания</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.2 Улучшение приложения</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Аналитика производительности:</strong> Время загрузки приложения, паттерны использования функций</li>
              <li><strong>Пользовательский опыт:</strong> Оптимизация интерфейса на основе предпочтений пользователей</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Безопасность данных</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Локальная обработка</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Вся обработка происходит на вашем устройстве</strong></li>
              <li><strong>Нет передачи данных на внешние серверы</strong></li>
              <li><strong>Использование встроенных API iOS для безопасного доступа к данным</strong></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Защита информации</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Шифрование:</strong> Все данные приложения защищены системным шифрованием iOS</li>
              <li><strong>Ограниченный доступ:</strong> Приложение запрашивает только минимально необходимые разрешения</li>
              <li><strong>Изолированная среда:</strong> Работа в песочнице iOS для предотвращения утечек данных</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Контроль пользователя</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Отзыв разрешений:</strong> Вы можете в любой момент отозвать доступ к данным о здоровье в Настройках iOS</li>
              <li><strong>Удаление данных:</strong> При удалении приложения все локальные данные автоматически удаляются</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Мы НЕ передаем ваши персональные данные третьим лицам.</strong>
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">5.1 Исключения</h3>
            <p className="text-muted-foreground leading-relaxed">
              Данные могут быть переданы только в следующих случаях:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>По требованию закона:</strong> При получении обоснованного запроса от правоохранительных органов</li>
              <li><strong>Защита прав:</strong> Для защиты наших прав, безопасности пользователей или общественных интересов</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Анонимная статистика</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Мы можем собирать обезличенную статистику использования приложения</li>
              <li>Данная информация не содержит персональных данных и не может быть связана с конкретным пользователем</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Международная передача данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Поскольку вся обработка происходит локально на вашем устройстве, <strong>международная передача персональных данных не осуществляется</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Хранение данных</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">7.1 Локальное хранение</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>История тренировок:</strong> Хранится до удаления тренировок или удаления приложения</li>
              <li><strong>Настройки пользователя:</strong> Сохраняются для функциональности приложения (язык, тема, предпочтения)</li>
              <li><strong>Время хранения:</strong> До удаления приложения или ручной очистки данных</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.2 Автоматическое удаление</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Временные файлы:</strong> Автоматически удаляются после использования</li>
              <li><strong>Кэш данных:</strong> Очищается при превышении лимитов памяти</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Права пользователей</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              В соответствии с применимым законодательством, вы имеете следующие права:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">8.1 Доступ и контроль</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Просмотр данных:</strong> Доступ ко всем данным, обрабатываемым приложением, в Настройках</li>
              <li><strong>Изменение настроек:</strong> Настройка параметров обработки данных в любое время</li>
              <li><strong>Удаление данных:</strong> Очистка истории и кэша в настройках приложения</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">8.2 Отзыв согласия</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Отключение разрешений:</strong> Отзыв доступа к данным о здоровье в Настройках iOS</li>
              <li><strong>Ограничение функций:</strong> Использование базовых функций без доступа к персональным данным</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Дети и конфиденциальность</h2>
            <p className="text-muted-foreground leading-relaxed">
              Наше приложение не предназначено для детей младше 13 лет. Мы сознательно не собираем персональные данные детей младше 13 лет.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Если вы родитель или опекун и узнали, что ваш ребенок предоставил нам персональные данные, пожалуйста, свяжитесь с нами.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Изменения в Политике конфиденциальности</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">10.1 Уведомление об изменениях</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Мы можем обновлять данную Политику конфиденциальности время от времени</li>
              <li>Существенные изменения будут сообщены через обновление приложения</li>
              <li>Дата последнего обновления указана в начале документа</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.2 Продолжение использования</h3>
            <p className="text-muted-foreground leading-relaxed">
              Продолжая использовать приложение после внесения изменений, вы соглашаетесь с обновленной Политикой конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Контактная информация</h2>
            <p className="text-muted-foreground leading-relaxed">
              Если у вас есть вопросы о данной Политике конфиденциальности или обработке ваших данных, свяжитесь с нами:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Email:</strong> spiro.boris@yandex.ru
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