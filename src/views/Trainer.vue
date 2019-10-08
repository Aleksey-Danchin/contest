<template lang="pug">
  div.h100
    b-badge(v-for="{ name } of problems" variant="primary" :to="`/${name}`") {{ name }}
    .box
      b-card.h100(v-if="problem")
        Markdown(:source="problem.description")
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
  components: {
    MonacoEditor,
    Markdown
  },

  data() {
    const data = {
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

  computed: {
    problems () {
      return this.$store.state.problems || []
    },

    problem () {
      const taskname = this.$route.params.taskname

      if (!taskname) {
        return null
      }

      let problem = null

      for (const item of this.$store.state.problems) {
        if (item.name === taskname) {
          problem = JSON.parse(JSON.stringify(item))
          break
        }
      }

      if (problem) {
        for (const test of problem.tests) {
          Object.assign(test, {
            result: undefined,
            success: null,
            comment: '',
            time: 0
          })
        }
      }

      return problem
    }
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
          test.success = JSON.stringify(test.result) === JSON.stringify(test.expect)
          test.comment = test.success ? 'Правильно' : 'Не правильно'
          test._rowVariant = test.success ? 'success' : 'danger'

          test.result = JSON.stringify(test.result)
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

</script>

<style>
html, body {
  height: 100%
}

.h100 {
  height: 100%;
}

.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.editor {
  height: 60%;
}
</style>