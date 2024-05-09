### Hexlet tests and linter status:
[![Actions Status](https://github.com/hexlet-code/frontend-project-11/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/hexlet-code/frontend-project-11/actions)  [![Maintainability](https://api.codeclimate.com/v1/badges/ca065380da07e0794c35/maintainability)](https://codeclimate.com/github/hexlet-code/frontend-project-11/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/ca065380da07e0794c35/test_coverage)](https://codeclimate.com/github/hexlet-code/frontend-project-11/test_coverage)

### Описание:
RSS — специализированный формат, предназначенный для описания лент новостей, анонсов статей и других материалов. Это наиболее простой способ для сайтов (обычно, блогов) дать возможность пользователям подписываться на изменения. Для этого используются специальные сервисы, называемые RSS-агрегаторами. Эти сервисы умеют опрашивать RSS-ленты сайтов на наличие новых постов и показывают их в удобном виде, отмечая прочитанное и так далее.

Например, у Хекслета есть канал в Твиттере, куда попадают анонсы всех новых уроков. Твиттер сам «засасывает» всю информацию через RSS-ленту, которую мы ему предоставили. По такому же принципу Slack забирает RSS-ленту с новыми постами в нашем блоге и сообщает об этом в канале #general.

**[Rss Reader](https://frontend-project-11-two-eosin.vercel.app/)** — сервис для агрегации RSS-потоков, с помощью которых удобно читать разнообразные источники, например, блоги. Он позволяет добавлять неограниченное количество RSS-лент, сам их обновляет и добавляет новые записи в общий поток.

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://ru.hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=ru-test-assignments)

### Установка:

-npm ci

-npx run build

-npx run serve

### Проект соответсвует требованиям:

#### Общие требования
  1. Дружественное поведение приложения (вывод ошибок, блокировка кнопок, отображение происходящих процессов)
  2. Организация состояния приложения
  3. Правильно выделенный парсинг данных
  4. Реализация обработчиков
  5. Организация слоя представления
#### Оформление
  1. В файле README.md стоят бейджики Codeclimate и Github Actions
  2. В репозитории нет лишних (временных файлов и директорий). Все что лишнее добавлено в .gitignore
#### Сервисы
  1. Бейджик Github Actions
  2. На Github Actions проверяются стандарты кодирования
#### Код
  -  Используются только стандартные механизмы Bootstrap (без переопределений)
  -  В коде реализовано MVC
  -  Тексты подставляются через i18next
  -  Отсутствуют глобальное состояние и обращение к объекту window
