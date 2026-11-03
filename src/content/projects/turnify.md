---
slug: turnify
title: Turnify — Organiza turnos en eventos masivos
summary: "Reduce las esperas físicas y coordina cada atención desde un solo sistema, incluso sin conexión a internet."
technologies:
  - Laravel
  - PHP
  - MySQL
  - Filament
  - Livewire
  - Alpine.js
  - Tailwind CSS
  - Laravel Reverb
  - Laragon
featured: true
order: 2
repositoryUrl: https://github.com/Alex-Jhordan/turnify
cover: ../../assets/projects/project-fallback.svg
coverAlt: "Vista previa por defecto con una ventana de código sobre fondo oscuro."
---

## ¿Por qué construí Turnify?

Los eventos masivos y los centros de atención presencial suelen enfrentarse a una saturación difícil de controlar: largas colas físicas, poca visibilidad del tiempo de espera y fallos de conectividad cuando la demanda sobre el internet aumenta. Turnify nació para resolver ese problema desde una operación local, sin depender de una conexión externa.

Diseñé y desarrollé una plataforma de gestión de colas y control de asistencia capaz de operar al 100 % dentro de una red local aislada. Esta decisión garantiza rapidez, cero latencia y continuidad durante todo el evento. El sistema centraliza la emisión de turnos, la atención de asesores y la información pública para que cada participante pueda avanzar sin depender de procesos manuales o filas físicas.

## Funcionalidades

- **Kiosco táctil de autoservicio:** registra al participante, consulta su identificación, permite seleccionar una categoría y entrega un ticket térmico con protección contra duplicados.
- **Estación de atención para asesores:** permite llamar turnos con un clic, controlar el tiempo de consulta y cambiar el estado de cada atención.
- **Pantalla pública de TV:** transmite los turnos llamados en tiempo real mediante WebSockets y los anuncia por voz con Text-to-Speech.
- **Cola virtual centralizada:** agrupa solicitudes por temática y mantiene el orden de llegada sin fijar inicialmente al participante a un módulo concreto.
- **Asignación dinámica de asesores:** reparte cada turno entre los módulos disponibles según las categorías habilitadas en ese momento.
- **Control del ciclo de atención:** permite llamar, volver a llamar, iniciar, pausar, finalizar o marcar como no presentado a cada participante.
- **Atención con tiempos definidos:** muestra un cronómetro de 30 minutos y alerta visualmente cuando se aproxima el límite.
- **Panel administrativo:** permite configurar módulos, categorías, usuarios y permisos desde una interfaz centralizada.
- **Reportes y métricas:** consulta indicadores operativos y exporta información en formato Excel o PDF.

## Arquitectura y tecnologías

Turnify es un monolito modular construido con Laravel 13, PHP 8.5, MySQL 8.4, Livewire 4, Alpine.js, Tailwind CSS y Filament 5. El proyecto se estructuró con especificaciones técnicas detalladas de requisitos, reglas de negocio, arquitectura y experiencia de usuario antes de desarrollar sus componentes.

La relación dinámica entre categorías y módulos permite asignar turnos al asesor adecuado sin reasignaciones manuales ni movimientos innecesarios dentro de la cola. Laravel Reverb transmite los cambios de estado a las pantallas públicas mediante una LAN aislada, mientras que kioskos, asesores y monitores continúan operando aunque no exista acceso a internet.

La arquitectura incorpora controles de concurrencia mediante bloqueos pesimistas en la base de datos para evitar llamadas dobles. También incluye estados definidos para cada turno, protección contra solicitudes duplicadas, indicadores operativos en tiempo real, registro de actividad administrativa, impresión térmica de respaldo y reconexión automática ante fallos temporales de un equipo.