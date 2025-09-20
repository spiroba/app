const CleanUpGuruPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Privacy Policy — CleanUp Guru
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              We value your privacy and strive to protect your personal data. 
              This Privacy Policy explains how the <strong>Cleaner</strong> app collects, 
              uses, and protects your information.
            </p>
            <p className="font-semibold">
              Main principle: All analysis and data processing occurs locally on your device. 
              We do not transfer your personal data, photos, or contacts to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. What data we process</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Photos and media files</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> The app accesses your photo gallery to analyze duplicates, quality, and file sizes</li>
              <li><strong>Processing:</strong> Analysis occurs exclusively on your device using Vision Framework</li>
              <li><strong>Storage:</strong> We do not save, copy, or transfer your photos</li>
              <li><strong>Purpose:</strong> Finding duplicates, blurred images, large videos, and storage optimization</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Contacts</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> The app may request access to contacts to find duplicates</li>
              <li><strong>Processing:</strong> Analysis occurs locally to detect duplicate entries</li>
              <li><strong>Storage:</strong> Contact data is not saved in the app and not transferred to third parties</li>
              <li><strong>Purpose:</strong> Address book optimization and duplicate removal</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Technical information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Device information:</strong> iPhone model, iOS version, available storage space</li>
              <li><strong>Usage statistics:</strong> Number of duplicates found, freed space</li>
              <li><strong>App settings:</strong> Selected language, theme, scanning frequency</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How we use your data</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 Core functions</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Duplicate analysis:</strong> Using AI to find identical photos</li>
              <li><strong>Quality assessment:</strong> Identifying blurred or poor-quality images</li>
              <li><strong>Content categorization:</strong> Classifying photos by type (screenshots, selfies, documents)</li>
              <li><strong>Storage optimization:</strong> Calculating potential space savings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 App improvement</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Performance analytics:</strong> Analysis time, number of processed files</li>
              <li><strong>Algorithm optimization:</strong> Improving duplicate detection accuracy</li>
              <li><strong>User experience:</strong> Adapting interface to user preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data security</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Local processing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All analysis is performed on your device</li>
              <li>No data transmission to external servers</li>
              <li>Use of built-in iOS APIs for secure data access</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Information protection</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Encryption:</strong> All app data is protected by iOS system encryption</li>
              <li><strong>Limited access:</strong> The app requests only minimally necessary permissions</li>
              <li><strong>Isolated environment:</strong> Operating in iOS sandbox to prevent data leaks</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3 User control</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Permission revocation:</strong> You can revoke access to photos or contacts in iOS Settings at any time</li>
              <li><strong>Data deletion:</strong> All local data is automatically deleted when the app is removed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data sharing with third parties</h2>
            <p className="font-semibold mb-4">We DO NOT share your personal data with third parties.</p>
            
            <h3 className="text-xl font-semibold mb-3">5.1 Exceptions</h3>
            <p className="mb-2">Data may be shared only in the following cases:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Legal requirement:</strong> Upon receiving a justified request from law enforcement</li>
              <li><strong>Rights protection:</strong> To protect our rights, user safety, or public interests</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">5.2 Anonymous statistics</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We may collect anonymized app usage statistics</li>
              <li>This information contains no personal data and cannot be linked to specific users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. International data transfer</h2>
            <p>
              Since all processing occurs locally on your device, 
              <strong> no international transfer of personal data takes place</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data storage</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 Local storage</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Scan history:</strong> We store recent analysis results for quick access</li>
              <li><strong>User settings:</strong> We save your preferences (language, theme, cleanup frequency)</li>
              <li><strong>Storage duration:</strong> Until app deletion or user data cleanup</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">7.2 Automatic deletion</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Temporary files:</strong> Automatically deleted after analysis completion</li>
              <li><strong>Data cache:</strong> Cleared when memory limits are exceeded</li>
              <li><strong>History:</strong> Old records automatically deleted after 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. User rights</h2>
            <p className="mb-4">In accordance with applicable law, you have the following rights:</p>
            
            <h3 className="text-xl font-semibold mb-3">8.1 Access and control</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Data viewing:</strong> View all data processed by the app in the "Statistics" section</li>
              <li><strong>Settings changes:</strong> Adjust data processing parameters at any time</li>
              <li><strong>Data deletion:</strong> Clear history and cache in app settings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">8.2 Consent withdrawal</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Permission disabling:</strong> Revoke access to photos or contacts in iOS Settings</li>
              <li><strong>Function limitation:</strong> Use only basic functions without access to personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children and privacy</h2>
            <p className="mb-4">
              Our app is not intended for children under 13 years old. 
              We knowingly do not collect personal data from children under 13.
            </p>
            <p className="font-semibold">
              If you are a parent or guardian and learn that your child has provided us with personal data, 
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Privacy Policy changes</h2>
            
            <h3 className="text-xl font-semibold mb-3">10.1 Change notification</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We may update this Privacy Policy from time to time</li>
              <li>Significant changes will be communicated through app updates</li>
              <li>The last update date is indicated at the beginning of the document</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">10.2 Continued use</h3>
            <p>
              By continuing to use the app after changes are made, 
              you agree to the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact information</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or the processing of your data, 
              contact us:
            </p>
            <p className="font-semibold">Email: spiro.boris@yandex.ru</p>
          </section>
        </div>

        {/* Russian Version */}
        <div className="mt-16 pt-16 border-t border-border">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Политика конфиденциальности — CleanUp Guru
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Введение</h2>
              <p className="mb-4">
                Мы ценим вашу конфиденциальность и стремимся защищать ваши персональные данные. 
                Данная Политика конфиденциальности объясняет, как приложение <strong>Cleaner</strong> собирает, 
                использует и защищает вашу информацию.
              </p>
              <p className="font-semibold">
                Главный принцип: Все анализы и обработка данных происходят локально на вашем устройстве. 
                Мы не передаем ваши персональные данные, фотографии или контакты третьим лицам.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Какие данные мы обрабатываем</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Фотографии и медиафайлы</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Доступ:</strong> Приложение получает доступ к вашей фотогалерее для анализа дубликатов, качества и размера файлов</li>
                <li><strong>Обработка:</strong> Анализ происходит исключительно на вашем устройстве с использованием Vision Framework</li>
                <li><strong>Хранение:</strong> Мы не сохраняем, не копируем и не передаем ваши фотографии</li>
                <li><strong>Цель:</strong> Поиск дубликатов, размытых изображений, больших видео и оптимизация хранилища</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Контакты</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Доступ:</strong> Приложение может запросить доступ к контактам для поиска дубликатов</li>
                <li><strong>Обработка:</strong> Анализ происходит локально для обнаружения повторяющихся записей</li>
                <li><strong>Хранение:</strong> Контактные данные не сохраняются в приложении и не передаются третьим лицам</li>
                <li><strong>Цель:</strong> Оптимизация адресной книги и удаление дубликатов</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Техническая информация</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Информация об устройстве:</strong> Модель iPhone, версия iOS, доступное место в хранилище</li>
                <li><strong>Статистика использования:</strong> Количество найденных дубликатов, освобожденное место</li>
                <li><strong>Настройки приложения:</strong> Выбранный язык, тема оформления, частота сканирования</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Как мы используем ваши данные</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Основные функции</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Анализ дубликатов:</strong> Использование ИИ для поиска одинаковых фотографий</li>
                <li><strong>Оценка качества:</strong> Определение размытых или некачественных изображений</li>
                <li><strong>Категоризация контента:</strong> Классификация фотографий по типам (скриншоты, селфи, документы)</li>
                <li><strong>Оптимизация хранилища:</strong> Расчет потенциальной экономии места</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Улучшение приложения</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Аналитика производительности:</strong> Время анализа, количество обработанных файлов</li>
                <li><strong>Оптимизация алгоритмов:</strong> Улучшение точности поиска дубликатов</li>
                <li><strong>Пользовательский опыт:</strong> Адаптация интерфейса под предпочтения пользователей</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Безопасность данных</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Локальная обработка</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Все анализы выполняются на вашем устройстве</li>
                <li>Нет передачи данных на внешние серверы</li>
                <li>Использование встроенных API iOS для безопасного доступа к данным</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.2 Защита информации</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Шифрование:</strong> Все данные приложения защищены системным шифрованием iOS</li>
                <li><strong>Ограниченный доступ:</strong> Приложение запрашивает только минимально необходимые разрешения</li>
                <li><strong>Изолированная среда:</strong> Работа в песочнице iOS для предотвращения утечек данных</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.3 Контроль пользователя</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Отзыв разрешений:</strong> Вы можете в любой момент отозвать доступ к фото или контактам в Настройках iOS</li>
                <li><strong>Удаление данных:</strong> При удалении приложения все локальные данные автоматически удаляются</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Передача данных третьим лицам</h2>
              <p className="font-semibold mb-4">Мы НЕ передаем ваши персональные данные третьим лицам.</p>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Исключения</h3>
              <p className="mb-2">Данные могут быть переданы только в следующих случаях:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>По требованию закона:</strong> При получении обоснованного запроса от правоохранительных органов</li>
                <li><strong>Защита прав:</strong> Для защиты наших прав, безопасности пользователей или общественных интересов</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Анонимная статистика</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Мы можем собирать обезличенную статистику использования приложения</li>
                <li>Данная информация не содержит персональных данных и не может быть связана с конкретным пользователем</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Международная передача данных</h2>
              <p>
                Поскольку вся обработка происходит локально на вашем устройстве, 
                <strong> международная передача персональных данных не осуществляется</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Хранение данных</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Локальное хранение</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>История сканирований:</strong> Храним результаты последних анализов для быстрого доступа</li>
                <li><strong>Настройки пользователя:</strong> Сохраняем ваши предпочтения (язык, тема, частота очистки)</li>
                <li><strong>Время хранения:</strong> До удаления приложения или очистки данных пользователем</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.2 Автоматическое удаление</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Временные файлы:</strong> Автоматически удаляются после завершения анализа</li>
                <li><strong>Кэш данных:</strong> Очищается при превышении лимитов памяти</li>
                <li><strong>История:</strong> Старые записи автоматически удаляются через 30 дней</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Права пользователей</h2>
              <p className="mb-4">В соответствии с применимым законодательством, вы имеете следующие права:</p>
              
              <h3 className="text-xl font-semibold mb-3">8.1 Доступ и контроль</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Просмотр данных:</strong> Просматривайте все данные, обрабатываемые приложением в разделе "Статистика"</li>
                <li><strong>Изменение настроек:</strong> Настраивайте параметры обработки данных в любое время</li>
                <li><strong>Удаление данных:</strong> Очищайте историю и кэш в настройках приложения</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">8.2 Отзыв согласия</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Отключение разрешений:</strong> Отзывайте доступ к фотографиям или контактам в Настройках iOS</li>
                <li><strong>Ограничение функций:</strong> Используйте только базовые функции без доступа к персональным данным</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Дети и конфиденциальность</h2>
              <p className="mb-4">
                Наше приложение не предназначено для детей младше 13 лет. 
                Мы сознательно не собираем персональные данные детей младше 13 лет.
              </p>
              <p className="font-semibold">
                Если вы родитель или опекун и узнали, что ваш ребенок предоставил нам персональные данные, 
                пожалуйста, свяжитесь с нами.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Изменения в Политике конфиденциальности</h2>
              
              <h3 className="text-xl font-semibold mb-3">10.1 Уведомление об изменениях</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Мы можем обновлять данную Политику конфиденциальности время от времени</li>
                <li>Существенные изменения будут сообщены через обновление приложения</li>
                <li>Дата последнего обновления указана в начале документа</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">10.2 Продолжение использования</h3>
              <p>
                Продолжая использовать приложение после внесения изменений, 
                вы соглашаетесь с обновленной Политикой конфиденциальности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Контактная информация</h2>
              <p className="mb-4">
                Если у вас есть вопросы о данной Политике конфиденциальности или обработке ваших данных, 
                свяжитесь с нами:
              </p>
              <p className="font-semibold">Email: spiro.boris@yandex.ru</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanUpGuruPrivacy;