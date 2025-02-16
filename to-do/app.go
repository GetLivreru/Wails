package main

import (
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp создает новый экземпляр приложения
func NewApp() *App {
	return &App{}
}

// startup вызывается при запуске приложения
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// domReady вызывается, когда DOM загружен
func (a *App) domReady(_ context.Context) {
	// Код, который должен выполниться при загрузке фронта
}

// beforeClose вызывается перед закрытием окна
func (a *App) beforeClose(ctx context.Context) bool {
	return false // Позволяем закрыть приложение
}

// shutdown вызывается при завершении работы приложения
func (a *App) shutdown(ctx context.Context) {
	// Очистка ресурсов перед выходом
}
