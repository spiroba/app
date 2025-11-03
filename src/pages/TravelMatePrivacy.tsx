const TravelMatePrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy - TravelMate</h1>
        
        {/* Russian Version */}
        <section className="mb-16 prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Введение</h3>
          <p>
            Добро пожаловать в TravelMate ("мы", "нас" или "наше приложение"). Мы уважаем вашу конфиденциальность и стремимся защитить ваши персональные данные. Настоящая политика конфиденциальности описывает, как мы собираем, используем и защищаем вашу информацию при использовании мобильного приложения TravelMate (далее - "Приложение").
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Сбор и использование информации</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Информация, которую вы предоставляете</h4>
          <p>
            TravelMate разработан с учетом принципа "конфиденциальность прежде всего". Все ваши данные хранятся локально на вашем устройстве. Мы собираем и обрабатываем следующую информацию:
          </p>

          <p><strong>Данные о поездках:</strong></p>
          <ul>
            <li>Названия поездок, даты начала и окончания</li>
            <li>Информация о пункте назначения (страна, город)</li>
            <li>Планируемый и фактический бюджет</li>
            <li>Заметки и описания поездок</li>
          </ul>

          <p><strong>Данные маршрутов:</strong></p>
          <ul>
            <li>Запланированные активности и мероприятия</li>
            <li>Временные слоты и расписание</li>
            <li>Геолокационные данные для планирования маршрутов</li>
          </ul>

          <p><strong>Финансовые данные:</strong></p>
          <ul>
            <li>Категории расходов и суммы трат</li>
            <li>Валюта и бюджетные ограничения</li>
            <li>Статистика расходов</li>
          </ul>

          <p><strong>Чек-листы:</strong></p>
          <ul>
            <li>Пункты чек-листов и их статусы</li>
            <li>Категории подготовки к поездке</li>
          </ul>

          <p><strong>Данные геолокации:</strong></p>
          <ul>
            <li>Координаты местоположения для отображения на картах</li>
            <li>Данные о достопримечательностях и интересных местах</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Автоматически собираемая информация</h4>
          <p><strong>Данные об использовании приложения:</strong></p>
          <ul>
            <li>Информация о функциях, которые вы используете</li>
            <li>Время использования приложения (для улучшения пользовательского опыта)</li>
            <li>Технические данные о вашем устройстве (модель, версия iOS)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Как мы используем вашу информацию</h3>
          <p>Мы используем собранную информацию исключительно для:</p>

          <p><strong>1. Предоставления основных функций приложения:</strong></p>
          <ul>
            <li>Создание и управление поездками</li>
            <li>Планирование маршрутов и активностей</li>
            <li>Отслеживание бюджета и расходов</li>
            <li>Управление чек-листами</li>
          </ul>

          <p><strong>2. Персонализации опыта:</strong></p>
          <ul>
            <li>Предоставление рекомендаций направлений на основе ваших предпочтений</li>
            <li>Отображение актуальной информации о погоде</li>
          </ul>

          <p><strong>3. Улучшения приложения:</strong></p>
          <ul>
            <li>Анализ использования функций для оптимизации интерфейса</li>
            <li>Исправление ошибок и повышение стабильности</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Хранение данных</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Локальное хранилище:</h4>
          <p>Все ваши персональные данные хранятся локально на вашем устройстве с использованием технологии Core Data. Мы не передаем ваши данные на внешние серверы.</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Синхронизация через iCloud (опционально):</h4>
          <p>
            Если вы включите синхронизацию через iCloud в настройках устройства, ваши данные будут автоматически синхронизироваться между вашими устройствами Apple через защищенные серверы Apple. Эта синхронизация осуществляется напрямую между вашими устройствами и серверами Apple, и мы не имеем доступа к этим данным.
          </p>
          <p>Apple обрабатывает данные iCloud в соответствии со своей политикой конфиденциальности: https://www.apple.com/legal/privacy/</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Передача данных третьим лицам</h3>
          <p>Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Сервисы Apple:</h4>
          <ul>
            <li><strong>Apple WeatherKit:</strong> Для получения прогноза погоды мы отправляем координаты местоположения в WeatherKit API. Apple обрабатывает эти данные в соответствии со своей политикой конфиденциальности.</li>
            <li><strong>Apple Maps / Google Maps:</strong> Для отображения карт и геолокационных данных используются сервисы Apple Maps и Google Maps SDK.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Требования законодательства:</h4>
          <p>Мы можем раскрыть вашу информацию, если это требуется по закону или в ответ на официальные запросы государственных органов.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Разрешения приложения</h3>
          <p>TravelMate запрашивает следующие разрешения:</p>

          <p><strong>Геолокация:</strong></p>
          <p>Используется для отображения вашего текущего местоположения на карте, планирования маршрутов и получения актуального прогноза погоды. Вы можете запретить доступ к геолокации в настройках iOS, но это ограничит функциональность приложения.</p>

          <p><strong>Уведомления:</strong></p>
          <p>Используются для напоминаний о запланированных активностях и событиях. Вы можете отключить уведомления в настройках приложения или iOS.</p>

          <p><strong>Доступ к iCloud (опционально):</strong></p>
          <p>Используется для синхронизации данных между вашими устройствами. Полностью опционально и контролируется вами.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Безопасность данных</h3>
          <p>Мы применяем технические и организационные меры для защиты ваших данных:</p>
          <ul>
            <li>Все данные хранятся в зашифрованной базе данных Core Data</li>
            <li>Синхронизация через iCloud использует end-to-end шифрование Apple</li>
            <li>Мы не собираем данные о платежных картах или паролях</li>
            <li>Доступ к данным имеет только владелец устройства</li>
          </ul>
          <p>
            Однако важно понимать, что ни один метод передачи данных через интернет или метод электронного хранения не является на 100% безопасным. Мы не можем гарантировать абсолютную безопасность ваших данных.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Права пользователей</h3>
          <p>У вас есть следующие права в отношении ваших данных:</p>

          <p><strong>Доступ к данным:</strong></p>
          <p>Все ваши данные доступны непосредственно в приложении.</p>

          <p><strong>Удаление данных:</strong></p>
          <p>Вы можете в любой момент удалить конкретные данные о поездках, расходах или чек-листах через интерфейс приложения. Для полного удаления всех данных удалите приложение с вашего устройства.</p>

          <p><strong>Экспорт данных:</strong></p>
          <p>Ваши данные хранятся локально и могут быть экспортированы через функции iOS резервного копирования.</p>

          <p><strong>Отзыв согласия:</strong></p>
          <p>Вы можете в любой момент отключить разрешения приложения (геолокация, уведомления) в настройках iOS.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Дети</h3>
          <p>
            TravelMate не предназначен для детей младше 13 лет. Мы сознательно не собираем персональные данные детей младше 13 лет. Если вы являетесь родителем или опекуном и узнали, что ваш ребенок предоставил нам персональные данные, пожалуйста, свяжитесь с нами.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Международная передача данных</h3>
          <p>TravelMate хранит все данные локально на вашем устройстве. Единственная международная передача данных может происходить через:</p>
          <ul>
            <li>Серверы iCloud (если включена синхронизация)</li>
            <li>Apple WeatherKit API (только координаты для прогноза погоды)</li>
            <li>Google Maps API (для отображения карт)</li>
          </ul>
          <p>Эти сервисы управляются Apple Inc. и Google LLC и подчиняются их политикам конфиденциальности.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Изменения в политике конфиденциальности</h3>
          <p>
            Мы можем периодически обновлять настоящую политику конфиденциальности. Мы уведомим вас о любых существенных изменениях, разместив новую политику конфиденциальности в приложении и обновив дату "Последнее обновление" в начале этого документа.
          </p>
          <p>Мы рекомендуем периодически проверять эту политику конфиденциальности на предмет изменений. Изменения вступают в силу с момента их публикации.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Контактная информация</h3>
          <p>Если у вас есть вопросы или замечания по поводу настоящей политики конфиденциальности, свяжитесь с нами:</p>
          <p><strong>Email:</strong> spiro.boris@yandex.ru</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Согласие</h3>
          <p>
            Используя TravelMate, вы соглашаетесь с настоящей политикой конфиденциальности и обработкой ваших данных в соответствии с описанными условиями.
          </p>

          <p className="mt-8 text-center"><strong>© 2025 App by Spiro. Все права защищены.</strong></p>
        </section>

        {/* English Version */}
        <section className="mb-16 prose prose-invert max-w-none border-t border-border pt-16">
          <h2 className="text-2xl font-semibold mb-4">PRIVACY POLICY (English)</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Introduction</h3>
          <p>
            Welcome to TravelMate ("we," "us," or "our application"). We respect your privacy and are committed to protecting your personal data. This privacy policy describes how we collect, use, and protect your information when you use the TravelMate mobile application (the "App").
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information Collection and Use</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Information You Provide</h4>
          <p>
            TravelMate is designed with a "privacy-first" approach. All your data is stored locally on your device. We collect and process the following information:
          </p>

          <p><strong>Trip Data:</strong></p>
          <ul>
            <li>Trip names, start and end dates</li>
            <li>Destination information (country, city)</li>
            <li>Planned and actual budget</li>
            <li>Trip notes and descriptions</li>
          </ul>

          <p><strong>Itinerary Data:</strong></p>
          <ul>
            <li>Planned activities and events</li>
            <li>Time slots and schedules</li>
            <li>Geolocation data for route planning</li>
          </ul>

          <p><strong>Financial Data:</strong></p>
          <ul>
            <li>Expense categories and amounts</li>
            <li>Currency and budget limits</li>
            <li>Expense statistics</li>
          </ul>

          <p><strong>Checklists:</strong></p>
          <ul>
            <li>Checklist items and their statuses</li>
            <li>Trip preparation categories</li>
          </ul>

          <p><strong>Geolocation Data:</strong></p>
          <ul>
            <li>Location coordinates for map display</li>
            <li>Attraction and point of interest data</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Automatically Collected Information</h4>
          <p><strong>App Usage Data:</strong></p>
          <ul>
            <li>Information about features you use</li>
            <li>App usage time (for improving user experience)</li>
            <li>Technical data about your device (model, iOS version)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
          <p>We use the collected information solely for:</p>

          <p><strong>1. Providing Core App Features:</strong></p>
          <ul>
            <li>Creating and managing trips</li>
            <li>Planning routes and activities</li>
            <li>Tracking budget and expenses</li>
            <li>Managing checklists</li>
          </ul>

          <p><strong>2. Personalizing Experience:</strong></p>
          <ul>
            <li>Providing destination recommendations based on your preferences</li>
            <li>Displaying relevant weather information</li>
          </ul>

          <p><strong>3. Improving the App:</strong></p>
          <ul>
            <li>Analyzing feature usage to optimize the interface</li>
            <li>Fixing bugs and improving stability</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Local Storage:</h4>
          <p>All your personal data is stored locally on your device using Core Data technology. We do not transfer your data to external servers.</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">iCloud Sync (Optional):</h4>
          <p>
            If you enable iCloud sync in your device settings, your data will automatically sync between your Apple devices through Apple's secure servers. This synchronization occurs directly between your devices and Apple's servers, and we do not have access to this data.
          </p>
          <p>Apple processes iCloud data in accordance with their privacy policy: https://www.apple.com/legal/privacy/</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Data Sharing</h3>
          <p>We do not sell, trade, or transfer your personal data to third parties, except in the following cases:</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Apple Services:</h4>
          <ul>
            <li><strong>Apple WeatherKit:</strong> To obtain weather forecasts, we send location coordinates to the WeatherKit API. Apple processes this data in accordance with their privacy policy.</li>
            <li><strong>Apple Maps / Google Maps:</strong> Apple Maps and Google Maps SDK services are used for displaying maps and geolocation data.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Legal Requirements:</h4>
          <p>We may disclose your information if required by law or in response to official government requests.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">App Permissions</h3>
          <p>TravelMate requests the following permissions:</p>

          <p><strong>Location:</strong></p>
          <p>Used to display your current location on the map, plan routes, and obtain accurate weather forecasts. You can deny location access in iOS settings, but this will limit app functionality.</p>

          <p><strong>Notifications:</strong></p>
          <p>Used for reminders about scheduled activities and events. You can disable notifications in the app or iOS settings.</p>

          <p><strong>iCloud Access (Optional):</strong></p>
          <p>Used to sync data between your devices. Completely optional and controlled by you.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Security</h3>
          <p>We implement technical and organizational measures to protect your data:</p>
          <ul>
            <li>All data is stored in an encrypted Core Data database</li>
            <li>iCloud sync uses Apple's end-to-end encryption</li>
            <li>We do not collect payment card data or passwords</li>
            <li>Only the device owner has access to the data</li>
          </ul>
          <p>
            However, it's important to understand that no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">User Rights</h3>
          <p>You have the following rights regarding your data:</p>

          <p><strong>Data Access:</strong></p>
          <p>All your data is directly accessible in the app.</p>

          <p><strong>Data Deletion:</strong></p>
          <p>You can delete specific trip data, expenses, or checklists through the app interface at any time. To completely delete all data, remove the app from your device.</p>

          <p><strong>Data Export:</strong></p>
          <p>Your data is stored locally and can be exported through iOS backup features.</p>

          <p><strong>Consent Withdrawal:</strong></p>
          <p>You can disable app permissions (location, notifications) in iOS settings at any time.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Children</h3>
          <p>
            TravelMate is not intended for children under 13 years of age. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and learn that your child has provided us with personal data, please contact us.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">International Data Transfer</h3>
          <p>TravelMate stores all data locally on your device. The only international data transfer may occur through:</p>
          <ul>
            <li>iCloud servers (if sync is enabled)</li>
            <li>Apple WeatherKit API (only coordinates for weather forecasts)</li>
            <li>Google Maps API (for map display)</li>
          </ul>
          <p>These services are operated by Apple Inc. and Google LLC and are subject to their privacy policies.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Privacy Policy</h3>
          <p>
            We may periodically update this privacy policy. We will notify you of any material changes by posting the new privacy policy in the app and updating the "Last Updated" date at the top of this document.
          </p>
          <p>We recommend periodically reviewing this privacy policy for changes. Changes become effective upon posting.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Contact Information</h3>
          <p>If you have questions or comments about this privacy policy, contact us:</p>
          <p><strong>Email:</strong> spiro.boris@yandex.ru</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Consent</h3>
          <p>
            By using TravelMate, you agree to this privacy policy and the processing of your data as described.
          </p>

          <p className="mt-8 text-center"><strong>© 2025 App by Spiro. All rights reserved.</strong></p>
        </section>
      </div>
    </div>
  );
};

export default TravelMatePrivacy;