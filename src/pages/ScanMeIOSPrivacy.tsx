const ScanMeIOSPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg mb-6">
              <strong>Дата обновления: 29 июля 2025</strong>
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Введение</h2>
            <p className="mb-6">
              Настоящая Политика конфиденциальности описывает, как приложение ScanMe ("мы", "наше приложение") собирает, использует и защищает информацию пользователей ("вы", "пользователь").
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Собираемая информация</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Информация, которую мы собираем:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Документы и изображения</strong>: Фотографии и сканы документов, которые вы создаете в приложении</li>
              <li><strong>Настройки приложения</strong>: Предпочтения пользователя, языковые настройки</li>
              <li><strong>Техническая информация</strong>: Модель устройства, версия операционной системы (только для улучшения совместимости)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Информация, которую мы НЕ собираем:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Персональные данные (имя, адрес, телефон, email)</li>
              <li>Данные о местоположении</li>
              <li>Контакты или другие приложения на устройстве</li>
              <li>Содержимое документов для анализа третьими лицами</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Использование информации</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Мы используем собранную информацию для:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Предоставления основной функциональности приложения (сканирование, OCR, экспорт)</li>
              <li>Сохранения ваших документов локально на устройстве</li>
              <li>Улучшения качества распознавания текста</li>
              <li>Обеспечения корректной работы приложения</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Мы НЕ используем информацию для:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Продажи третьим лицам</li>
              <li>Рекламных целей</li>
              <li>Профилирования пользователей</li>
              <li>Передачи на внешние серверы без вашего согласия</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Хранение данных</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Локальное хранение:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Все ваши документы хранятся локально на вашем устройстве</li>
              <li>Мы не загружаем ваши документы на наши серверы</li>
              <li>Вы полностью контролируете свои данные</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Облачные сервисы (опционально):</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>При использовании функций экспорта в iCloud или другие облачные сервисы действуют политики конфиденциальности соответствующих провайдеров</li>
              <li>Синхронизация через iCloud происходит в зашифрованном виде</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Безопасность</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Защита данных:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Все данные приложения защищены системой безопасности iOS</li>
              <li>Используется шифрование данных на уровне операционной системы</li>
              <li>Доступ к документам имеет только владелец устройства</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Разрешения приложения:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Камера</strong>: Для сканирования документов</li>
              <li><strong>Фотогалерея</strong>: Для импорта изображений</li>
              <li><strong>Файлы</strong>: Для экспорта и импорта документов</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Обработка персональных данных</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">6.1 OCR и анализ текста:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Обработка текста происходит локально на устройстве</li>
              <li>Мы не анализируем содержимое ваших документов</li>
              <li>Распознанный текст не передается на внешние серверы</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Права пользователя:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Право на удаление всех данных (удаление приложения)</li>
              <li>Право на экспорт данных (функция экспорта в приложении)</li>
              <li>Право на отказ от сбора аналитических данных</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Сторонние сервисы</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Используемые библиотеки:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Apple Vision Framework (для OCR) - обработка происходит локально</li>
              <li>Core Data (для хранения метаданных) - данные остаются на устройстве</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Изменения в политике</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Уведомления об изменениях:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>О существенных изменениях в политике мы уведомим через обновление приложения</li>
              <li>Дата последнего обновления указана в начале документа</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Контактная информация</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Связь с нами:</h3>
            <p className="mb-4">По вопросам конфиденциальности обращайтесь:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Через App Store (отзывы и оценки)</li>
              <li>Через настройки приложения (раздел "Поддержка")</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Применимое право</h2>
            <p className="mb-6">
              Настоящая Политика конфиденциальности регулируется и толкуется в соответствии с применимым законодательством о защите персональных данных.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Согласие</h2>
            <p className="mb-6">
              Используя приложение ScanMe, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
            </p>

            <div className="border-t pt-6 mt-8">
              <p className="text-center text-gray-600">
                <strong>ScanMe - Сканер документов</strong>
              </p>
              <p className="text-center text-gray-600 mt-2">
                <strong>Дата обновления: 29 июля 2025</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanMeIOSPrivacy;