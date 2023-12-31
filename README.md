# Сайт с квестом Игра Центра

Тз с макетом https://www.notion.so/techdep/Front-end-42fa7e6c2ee1471195a821e59c01d1c8?pvs=4

Для установки зависимостей:

```bash
npm install
```

Чтобы запуститься в режиме разработки

```bash
npm run start
```

Чтобы собрать проект для деплоя в продакшн

```bash
npm run build
```

# Архитектура

**updated**: облегченный [feature-slice-design](https://habr.com/ru/companies/inDrive/articles/693768/)
Обновил, чтобы избавиться от мешанины кода, относящегося к разным вещам.
И в основном чтобы не убиться, когда будем мержиться с бэком.

<img src="https://raw.githubusercontent.com/sarmong/documentation/master/website/static/img/visual_schema.jpg" alt="схема feature-slice design" width="400"/>

Есть слои:

-   src/shared/: это общий слой, здесь хранятся общие компоненты, утилиты и апи
-   src/features/: это слой фич, здесь все что относится к конкретной фиче (например кабинету участника или авторизации)

В слоях есть сегменты:

-   ui/: здесь лежат компоненты
-   lib/: здесь лежат утилиты, которым не нужно напрямую взаимодействовать со стором effector-а
-   model/: здесь лежат тайпинги, события и стор effector-а
-   api/: здесь должны бы лежать запросы к бэку, но мб положим их в model/

# Чистый код

-   Главное правило – скорость, чистоту и потом можно навести
-   На проекте есть `prettier`, в VSCode он устанавливается через расширение, позволяет сочетанием клавиш почистить код
-   На проекте есть scss и методология BEM, модульный css тоже поддерживается
-   Используются функциональные компоненты с typescript:

```tsx
interface SomeProps {
    prop1: string;
    prop2: number;
    prop3: {
        prop4: string;
        prop5: number;
    };
}

const Component = ({ prop1, prop2, prop3 }: SomeProps) => {
    // ...
    return 'html';
};
```
