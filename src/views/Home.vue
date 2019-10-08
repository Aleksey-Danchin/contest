<template lang="pug">
    b-container(style="margin-top: 20px")
        b-jumbotron
            template(v-slot:header) Contest (test mode*)
            template(v-slot:lead) Контест тренажер для изучающих <a href="https://google.com/search?q=javascript" target="_blank">JavaScript</a>.
            hr
            p Решай простые и сложные задачи по JavaScript прямо в браузаре. Не нужно заморачиваться с редактором кода, ведь он уже встроен в наш котест сервис. Просто выбери задачу и пиши код. Запуска свой код и смотри как он справится с заранее подготовленными тестами.
            ul Итого:
                li Задачи разного уровня
                li Встроенный редактор кода
                li Готовая система автоматического тестирования
            p Если у тебя возникли предложения по улучшению сервиса, или у тебя есть хорошая идея для новой задачи, то смело пиши <a href="https://vk.com/aleksey_danchin" target="_blank">мне</a>.
            hr
            b-button(variant="primary" href="/start") Начать писать код
            hr
            p * режим тестирования - возможно неожиданное поведение.
</template>