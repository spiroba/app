
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TaskBitesPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-8 px-4 md:px-6 max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 mb-6 text-accent hover:text-accent/80 transition-colors">
          <ArrowLeft size={16} />
          <span>Назад на главную</span>
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности TaskBites</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-4">
            Эта Политика конфиденциальности описывает, как мы собираем, используем и раскрываем вашу информацию при использовании нашего приложения TaskBites.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Собираемая информация</h2>
          <p className="mb-4">
            TaskBites - это приложение для управления задачами, которое собирает следующие данные для обеспечения работы сервиса:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Информация о задачах и проектах</li>
            <li className="mb-2">Настройки приложения</li>
            <li className="mb-2">Данные для синхронизации между устройствами (если активировано)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Локальное хранение данных</h2>
          <p className="mb-4">
            Все ваши задачи и настройки хранятся локально на вашем устройстве. При активации синхронизации данные могут храниться в облаке для обеспечения доступа с разных устройств.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Использование данных</h2>
          <p className="mb-4">
            Мы используем собранные данные исключительно для обеспечения работы приложения и улучшения пользовательского опыта. Мы не продаем и не передаем ваши данные третьим лицам.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Безопасность</h2>
          <p className="mb-4">
            Мы принимаем все необходимые меры для защиты ваших данных от несанкционированного доступа, изменения, разглашения или уничтожения.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Изменения в политике конфиденциальности</h2>
          <p className="mb-4">
            Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы сообщим вам о любых изменениях, обновив дату в верхней части этой политики конфиденциальности.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Контакты</h2>
          <p className="mb-4">
            Если у вас есть какие-либо вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами: spiro.boris@yandex.ru
          </p>
          
          <p className="mt-8 text-sm text-muted-foreground">Последнее обновление: 18 апреля 2025 г.</p>
        </div>
      </div>
    </div>
  );
};

export default TaskBitesPrivacy;
