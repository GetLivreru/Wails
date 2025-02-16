# Wails To-Do App

## 📌 Описание
Этот проект — кросс-платформенное **desktop-приложение** для управления списком задач (To-Do List), разработанное с использованием **Wails (Go + JavaScript)**.

### 🎯 **Основные функции:**
✅ Добавление задач
✅ Отображение списка задач
✅ Отметка задач как выполненных
✅ Удаление задач
✅ Сохранение списка между сессиями (локальное хранилище)

## 🚀 Запуск проекта

### 1️⃣ Установка зависимостей
Убедитесь, что у вас установлены **Go**, **Node.js**, **Wails CLI**:
```sh
# Установка Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### 2️⃣ Клонирование репозитория
```sh
git clone https://github.com/GetLivreru/Wails.git
cd Wails
```

### 3️⃣ Установка зависимостей для фронтенда
```sh
cd frontend
npm install
cd ..
```

### 4️⃣ Запуск в режиме разработки
```sh
wails dev
```

### 5️⃣ Сборка проекта
```sh
wails build
```
Исполняемый файл появится в `build/bin/`

## 🛠 Технологии
- **Backend:** Go + Wails
- **Frontend:** JavaScript (Vanilla JS, CSS, HTML)
- **Сохранение данных:** JSON-файл

## 📸 Скриншоты
_![image](https://github.com/user-attachments/assets/aab47d10-baed-4e90-a8ef-d82e192c9d90)
_


