# Ius Auto — сайт автосервиса

Сайт кузовного автосервиса **Ius auto S.R.L** (Кишинёв, str. Petricani 202): кузовной ремонт, рихтовка, покраска.

- Три языка: русский, română, English
- Статус «Открыто / Закрыто» по времени Кишинёва
- Блок «До / После» с ползунком (реальные работы, номера скрыты)
- Отзывы из Google, встроенная карта, адаптивная вёрстка под телефон

## Запуск
Сайт статический — откройте `index.html` или опубликуйте папку на любом статическом хостинге
— опубликован на https://ius-auto.github.io/

Контакты меняются в `config.js`.

Для Cloudflare Workers: `npm run build` собирает `site-worker.mjs` со всеми файлами.

Иллюстративные фото покраски — Pexels.

## Безопасность
- Content-Security-Policy: скрипты, стили и шрифты загружаются только с самого сайта; разрешён лишь iframe Google Maps (в песочнице `sandbox`).
- Шрифты Manrope и Unbounded хранятся локально в `fonts/` (лицензия SIL OFL), без запросов к Google Fonts.
- Нет форм, баз данных и паролей; переводы вставляются только с разрешёнными тегами `<br>`/`<em>`.
- Внешние ссылки открываются с `rel="noopener noreferrer"`; из фото удалены EXIF-метаданные (GPS и т. п.), номера машин размыты.
- Для Cloudflare Worker дополнительно отдаются заголовки HSTS, X-Frame-Options, Permissions-Policy и др. (см. `worker.js`).

## Поиск в Google
`robots.txt`, `sitemap.xml`, canonical, Open Graph и разметка schema.org `AutoBodyShop` уже есть.
При переходе на свой домен замените `https://ius-auto.github.io/` в `index.html`, `robots.txt` и `sitemap.xml`.
