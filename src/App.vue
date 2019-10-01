<template lang="pug">
  div
    b-form-select(v-model="problem" :options="problems" @change="showResultTable = false")
    b-card(v-if="problem")
      #mocha
      Markdown(:source="problem.source")
      b-table(:items="problem.tests" :fields="fields" v-if="showResultTable")
      b-button(variant="success" @click="run()" v-if="!showResultTable") Запустить
      b-button(variant="warning" v-else @click="showResultTable = false") Скрыть
      hr
      MonacoEditor.editor(v-model="problem.code" language="javascript")
</template>

<script>
import MonacoEditor from 'vue-monaco'
import Markdown from '@/components/Markdown'

export default {
  name: 'app',

  components: {
    MonacoEditor,
    Markdown
  },

  data() {
    const data = {
      problem: null,
      problems,
      showResultTable: false,
      fields: [{
          key: 'testCode',
          label: 'Тестовый код'
        },
        {
          key: 'expect',
          label: 'Ожидаемый ответ'
        },
        {
          key: 'result',
          label: 'Ответ вашей программы'
        },
        {
          key: 'time',
          label: 'Время (мс)'
        },
        {
          key: 'comment',
          label: 'Комментарий'
        }
      ]
    }

    return data
  },

  methods: {
    run() {
      this.showResultTable = true

      for (const test of this.problem.tests) {
        test.result = undefined
        test.success = null
        test.comment = ''
        test.time = 0

        try {
          let startMomemnt = Date.now()

          test.result = eval(`;(function () { ;${this.problem.code}; return (${test.testCode}) })();`)
          test.success = test.result === test.expect
          test.comment = test.success ? 'Правильно' : 'Не правильно'
          test._rowVariant = test.success ? 'success' : 'danger'

          test.result = String(test.result)
          test.time = Date.now() - startMomemnt
        } catch (err) {
          test.success = false
          test.comment = err.message
          test._rowVariant = 'danger'
        }
      }
    }
  }
}

const problems = [{
    text: 'getSum',
    value: {
      source: `Напишите функцию \`getSum()\` возвращающую сумму всех своих аргументов. Примеры:
\`\`\`javascript
getSum(1, 2) === 3
getSum(5, -5) === 0
\`\`\``,
      showResultTable: false,
      tests: [{
          testCode: 'getSum(5)',
          expect: 5,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getSum(-5, 3)',
          expect: -2,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getSum(1, 100)',
          expect: 101,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getSum(-3, -55)',
          expect: -58,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getSum(1, 2, 3, 4, 5)',
          expect: 15,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getSum(0, 1, 2, 3, 4, 5)',
          expect: 15,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        }
      ],
      code: `function getSum () {
  return
}`
    }
  },

  {
    text: 'getMaxMinSum',
    value: {
      source: `Напишите функцию \`getMaxMinSum()\` возвращающую сумму минимального и максимального аргумента функции. Примеры:
\`\`\`javascript
getMaxMinSum(1, 2, 3) === 4 // 1 + 3
getMaxMinSum(5, -5) === 0 // 5 + (-5)
\`\`\``,
      showResultTable: false,
      tests: [{
          testCode: 'getMaxMinSum(5)',
          expect: 5,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getMaxMinSum(-5, 3)',
          expect: -2,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getMaxMinSum(1, 100)',
          expect: 101,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getMaxMinSum(-3, -55)',
          expect: -58,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getMaxMinSum(1, 2, 3, 4, 5)',
          expect: 6,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        },
        {
          testCode: 'getMaxMinSum(0, 1, 2, 3, 4, 5)',
          expect: 5,
          result: undefined,
          success: null,
          comment: '',
          time: 0
        }
      ],
      code: `function getMaxMinSum () {
  return
}`
    }
  }
]

</script>

<style>
.editor {
  min-height: 300px;
  height: 100%;
}
</style>