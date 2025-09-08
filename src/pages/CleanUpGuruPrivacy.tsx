const CleanUpGuruPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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

        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default CleanUpGuruPrivacy;