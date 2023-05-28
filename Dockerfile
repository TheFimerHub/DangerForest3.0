# Используем базовый образ с поддержкой Node.js и NPM
FROM node:14-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущей директории внутрь контейнера
COPY . .

# Запускаем команду для запуска веб-сервера
CMD ["npm", "start"]
