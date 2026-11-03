---
slug: lexitype-space
title: LexiType Space — Aprende vocabulario jugando
summary: "Convierte palabras nuevas en un desafío espacial: escribe rápido, destruye obstáculos y aprende su significado mientras juegas."
technologies:
  - Vue 3
  - TypeScript
  - Vite
  - Tailwind CSS
  - Pinia
  - FastAPI
  - Python
  - Pydantic
  - Groq
  - Docker
  - Vitest
  - Playwright
  - Pytest
featured: true
order: 1
repositoryUrl: https://github.com/Alex-Jhordan/lexitype
liveUrl: https://lexitype.vercel.app
cover: ../../assets/projects/project-fallback.svg
coverAlt: "Vista previa por defecto con una ventana de código sobre fondo oscuro."
---

## ¿Por qué construí LexiType Space?

Al explorar temas nuevos solemos encontrarnos con tecnicismos que requieren tiempo para comprender. Aprenderlos en contexto ayuda, pero esta forma de estudio puede resultar lenta o poco entretenida. Quise convertir ese momento en una experiencia más activa y exploré también el desarrollo de videojuegos web en 2D.

LexiType Space es un juego arcade espacial que transforma el vocabulario en una prueba de mecanografía. Al elegir cualquier tema, la aplicación genera cinco palabras con definiciones breves. Durante la partida, estas palabras caen desde el espacio y deben escribirse con precisión antes de alcanzar la nave. Cada acierto fortalece la memoria visual, mientras que el glosario final permite revisar el significado de los términos.

## Funcionalidades

- **Contenido creado para cada tema:** genera cinco palabras y sus definiciones según el interés del jugador.
- **Juego basado en mecanografía:** escribe las palabras para disparar láseres, destruirlas y proteger la nave.
- **Objetivo inteligente:** prioriza la palabra más cercana a la nave cuando varias empiezan con la misma letra.
- **Dificultad progresiva:** la caída de las palabras se acelera cada cinco objetivos destruidos.
- **Métricas de la partida:** registra velocidad de escritura, precisión, destrucciones y palabras perdidas.
- **Glosario de aprendizaje:** muestra al final las palabras con su ortografía correcta y su significado.
- **Audio espacial configurable:** incluye efectos de destrucción, pérdida de vidas y finalización, con opción para silenciar.

## Arquitectura y tecnologías

El frontend es una SPA desarrollada con Vue 3, TypeScript, Pinia, Tailwind CSS y Canvas 2D. Un motor desacoplado del renderizado controla la física independiente del refresco, la selección de objetivos, las colisiones y las métricas. La interfaz mantiene estados definidos para guiar al jugador desde las instrucciones hasta el juego y la pantalla de resultados.

El backend, construido con FastAPI y Python, valida y sanitiza el tema solicitado, conecta la aplicación con Groq y devuelve exactamente cinco palabras con una estructura validada por Pydantic. Docker permite ejecutar ambos servicios de forma local, mientras que las pruebas automatizadas cubren el motor de juego, el estado de Pinia, los contratos HTTP y los recorridos completos del navegador.
