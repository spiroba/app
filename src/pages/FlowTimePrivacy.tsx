
import React from "react";
import { Link } from "react-router-dom";

const FlowTimePrivacy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link to="/" className="text-accent hover:text-accent/80 mb-8 inline-block">
        &larr; Назад на главную
      </Link>
      <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности FlowTime</h1>
      
      <div className="prose prose-invert max-w-none">
        <p>
          FlowTime уважает вашу конфиденциальность и стремится защитить ваши персональные данные. 
          Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу 
          информацию при использовании нашего приложения.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Данные, которые мы собираем</h2>
        <ul className="list-disc pl-5">
          <li>Информация о привычках и целях</li>
          <li>Статистика выполнения</li>
          <li>Настройки приложения</li>
          <li>Данные о производительности</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Мы НЕ собираем:</h2>
        <ul className="list-disc pl-5">
          <li>Личную идентифицирующую информацию</li>
          <li>Данные о местоположении</li>
          <li>Контактную информацию</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Использование данных</h2>
        <p>Собранные данные используются исключительно для:</p>
        <ul className="list-disc pl-5">
          <li>Отслеживания прогресса ваших привычек</li>
          <li>Генерации статистики и аналитики</li>
          <li>Улучшения производительности приложения</li>
          <li>Предоставления персонализированных рекомендаций</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Хранение данных</h2>
        <ul className="list-disc pl-5">
          <li>Все данные хранятся локально на вашем устройстве</li>
          <li>Мы не передаем ваши данные третьим лицам</li>
          <li>Вы можете удалить все данные в любое время через настройки приложения</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Безопасность</h2>
        <p>Мы применяем современные методы защиты для обеспечения безопасности ваших данных:</p>
        <ul className="list-disc pl-5">
          <li>Локальное шифрование данных</li>
          <li>Защита от несанкционированного доступа</li>
          <li>Регулярные обновления механизмов безопасности</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Права пользователя</h2>
        <p>У вас есть право:</p>
        <ul className="list-disc pl-5">
          <li>Просматривать свои данные</li>
          <li>Экспортировать данные</li>
          <li>Удалять данные</li>
          <li>Отключать сбор аналитики</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Обновления политики</h2>
        <p>
          Мы оставляем за собой право обновлять политику конфиденциальности. 
          О значительных изменениях мы будем уведомлять вас через приложение.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Контакты</h2>
        <p>
          По вопросам конфиденциальности вы можете связаться с нами:<br />
          <a href="mailto:spiro.boris@yandex.ru" className="text-accent hover:underline">
            spiro.boris@yandex.ru
          </a>
        </p>
      </div>
    </div>
  );
};

export default FlowTimePrivacy;
