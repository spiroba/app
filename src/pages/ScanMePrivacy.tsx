
const ScanMePrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg mb-6">
              <strong>Дата вступления в силу:</strong> 10 января 2025 г.
            </p>
            
            <p className="mb-6">
              ScanMe - Сканер Документов полностью соблюдает российское законодательство о персональных данных и не собирает никаких пользовательских данных.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Общие положения</h2>
            <p className="mb-4">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации пользователей мобильного приложения "ScanMe - Сканер Документов" (далее - "Приложение").
            </p>
            
            <p className="mb-4">Приложение разработано в соответствии с требованиями:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Федерального закона РФ № 152-ФЗ "О персональных данных"</li>
              <li>Федерального закона РФ № 149-ФЗ "Об информации, информационных технологиях и о защите информации"</li>
              <li>Постановления Правительства РФ № 1119 от 01.11.2012</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Принципы обработки данных</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="font-semibold">
                ВАЖНО: Приложение ScanMe работает полностью в автономном режиме и НЕ СОБИРАЕТ, НЕ ХРАНИТ и НЕ ПЕРЕДАЕТ персональные данные пользователей на внешние серверы.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Какие данные НЕ собираются</h2>
            <p className="mb-4">Приложение ScanMe гарантирует, что следующие данные НЕ собираются и НЕ обрабатываются:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Персональная информация (ФИО, адреса, телефоны)</li>
              <li>Геолокационные данные</li>
              <li>Данные об устройстве (кроме необходимых для функционирования)</li>
              <li>Контакты и календарь</li>
              <li>Содержимое отсканированных документов</li>
              <li>История использования приложения</li>
              <li>Аналитические данные</li>
              <li>Рекламные идентификаторы</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Локальное хранение данных</h2>
            <p className="mb-4">Все создаваемые и обрабатываемые в приложении данные хранятся исключительно:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Локально на устройстве пользователя</li>
              <li>В защищенном хранилище приложения (Android App Sandbox)</li>
              <li>Без доступа других приложений</li>
              <li>Без передачи по сети Интернет</li>
            </ul>
            <p className="mb-6">
              <strong>Контроль данных:</strong> Пользователь имеет полный контроль над своими данными и может удалить все созданные документы через настройки приложения или удаление самого приложения.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Используемые разрешения</h2>
            <p className="mb-4">Приложение запрашивает следующие разрешения исключительно для обеспечения основной функциональности:</p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Разрешение</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Назначение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">CAMERA</td>
                    <td className="border border-gray-300 px-4 py-2">Сканирование документов через камеру</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">READ_EXTERNAL_STORAGE</td>
                    <td className="border border-gray-300 px-4 py-2">Импорт документов из галереи</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">WRITE_EXTERNAL_STORAGE</td>
                    <td className="border border-gray-300 px-4 py-2">Сохранение отсканированных документов</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">INTERNET</td>
                    <td className="border border-gray-300 px-4 py-2">Функция перевода текста (опционально)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">VIBRATE</td>
                    <td className="border border-gray-300 px-4 py-2">Тактильная обратная связь</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Функция перевода текста</h2>
            <p className="mb-4">При использовании функции ИИ-переводчика:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Текст обрабатывается сервисом Google Translate</li>
              <li>Передается только распознанный текст без метаданных</li>
              <li>Не сохраняется история переводов</li>
              <li>Пользователь может отключить интернет для работы без перевода</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Безопасность данных</h2>
            <p className="mb-4">Для обеспечения безопасности применяются:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Локальное шифрование данных приложения</li>
              <li>Изолированное хранилище Android Sandbox</li>
              <li>Отсутствие внешних соединений (кроме перевода)</li>
              <li>Регулярные обновления безопасности</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Права пользователей</h2>
            <p className="mb-4">Пользователи имеют право:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Полного контроля над своими документами</li>
              <li>Удаления всех данных через настройки приложения</li>
              <li>Использования приложения без подключения к интернету</li>
              <li>Отзыва разрешений в настройках Android</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Соответствие российскому законодательству</h2>
            <p className="mb-4">Приложение полностью соответствует требованиям российского законодательства:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Не осуществляет трансграничную передачу данных</li>
              <li>Не требует согласия на обработку персональных данных (так как не собирает их)</li>
              <li>Не подпадает под требования локализации данных (данные не покидают устройство)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Изменения политики</h2>
            <p className="mb-6">
              Любые изменения данной политики будут опубликованы на этой странице с указанием даты последнего обновления. Существенные изменения будут дополнительно уведомлены через обновление приложения.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Контактная информация</h2>
            <p className="mb-4">По вопросам конфиденциальности и безопасности данных обращайтесь:</p>
            <ul className="list-none pl-0 mb-6">
              <li><strong>Поддержка:</strong> spiro.boris@yandex.ru</li>
              <li><strong>Разработчик:</strong> Spiro.Boris</li>
              <li><strong>Юридический адрес:</strong> Российская Федерация</li>
            </ul>

            <p className="mb-4">
              <strong>Дата последнего обновления:</strong> 25 июня 2025 г.
            </p>

            <div className="border-t pt-6 mt-8">
              <p className="text-center text-gray-600">
                © 2025 ScanMe - Сканер Документов. Разработчик: Spiro.Boris
              </p>
              <p className="text-center text-gray-600 mt-2">
                Приложение разработано с соблюдением российского законодательства
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanMePrivacy;
