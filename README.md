# vyshka.kz — сайт-визитка (аренда автовышек, Алматы)

Статический сайт: HTML + CSS + JS, без сборки. Открывается двойным кликом по `index.html`.

## Что нужно заполнить перед запуском

Найдите и замените эти метки (поиск по проекту):

| Метка | Где | Что вставить |
|-------|-----|--------------|
| `PHONE_PLACEHOLDER` | index.html | Номер телефона, формат `tel:+77000000000` |
| `+7 700 000-00-00` | index.html | Тот же номер для отображения |
| `WA_NUMBER_PLACEHOLDER` | script.js | Номер WhatsApp, только цифры: `77000000000` |
| `WHATSAPP_PLACEHOLDER` | index.html | Ссылка `https://wa.me/77000000000` |
| `EMAIL_PLACEHOLDER` + `info@vyshka.kz` | index.html | Почта |
| `INSTAGRAM_PLACEHOLDER` | index.html | Ссылка на Instagram |

**Парк техники:** в секции `fleet` заменить значения характеристик и заглушки «Фото техники» на реальные фото (`assets/`) и цифры.

## Форма заявки
Отправляет имя и телефон в WhatsApp (открывает чат с заполненным текстом). Номер задаётся в `script.js` → `WA_NUMBER`.

## Деплой, домен, индексация и реклама
Полная пошаговая инструкция (GitHub Pages + домен vyshka.kz, Яндекс/Google индексация, Метрика/Analytics, Директ/Google Ads, карты) — в файле **[НАСТРОЙКА.md](НАСТРОЙКА.md)**.

Кратко:
```bash
git init
git add .
git commit -m "vyshka.kz landing"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
Затем в репозитории: **Settings → Pages → Source: main / root**, далее привязка домена и DNS — см. НАСТРОЙКА.md.

## SEO/деплой-файлы в проекте
- `robots.txt`, `sitemap.xml` — для индексации
- `CNAME` — привязка домена vyshka.kz к GitHub Pages
- `404.html` — страница «не найдено»
- `.nojekyll` — отключает обработку Jekyll
- В `index.html` (в `<head>`) уже добавлены SEO-теги, микроразметка LocalBusiness и закомментированные блоки для Яндекс.Метрики, Google Analytics и кодов подтверждения — раскомментируйте и вставьте свои значения.
