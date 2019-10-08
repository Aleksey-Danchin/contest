module.exports = {
    problems: [{
            name: 'getSum',
            description: `Напишите функцию \`getSum()\` возвращающую сумму всех своих аргументов. Примеры:
\`\`\`javascript
getSum(1, 2) === 3
getSum(5, -5) === 0
\`\`\``,
            code: `function getSum () {
    return
}`,
            tests: [{
                    testCode: 'getSum(5)',
                    expect: 5,
                },
                {
                    testCode: 'getSum(-5, 3)',
                    expect: -2,
                },
                {
                    testCode: 'getSum(1, 100)',
                    expect: 101,
                },
                {
                    testCode: 'getSum(-3, -55)',
                    expect: -58,
                },
                {
                    testCode: 'getSum(1, 2, 3, 4, 5)',
                    expect: 15,
                },
                {
                    testCode: 'getSum(0, 1, 2, 3, 4, 5)',
                    expect: 15,
                }
            ]
        },

        {
            name: 'getMaxMinSum',
            description: `Напишите функцию \`getMaxMinSum()\` возвращающую сумму минимального и максимального аргумента функции. Примеры:
\`\`\`javascript
getMaxMinSum(1, 2, 3) === 4 // 1 + 3
getMaxMinSum(5, -5) === 0 // 5 + (-5)
\`\`\``,
            code: `function getMaxMinSum () {
    return
}`,
            tests: [{
                    testCode: 'getMaxMinSum(5)',
                    expect: 5,
                },
                {
                    testCode: 'getMaxMinSum(-5, 3)',
                    expect: -2,
                },
                {
                    testCode: 'getMaxMinSum(1, 100)',
                    expect: 101,
                },
                {
                    testCode: 'getMaxMinSum(-3, -55)',
                    expect: -58,
                },
                {
                    testCode: 'getMaxMinSum(1, 2, 3, 4, 5)',
                    expect: 6,
                },
                {
                    testCode: 'getMaxMinSum(0, 1, 2, 3, 4, 5)',
                    expect: 5,
                }
            ]
        },

        {
            name: 'fibonacci',
            description: `Напишите функцию \`fibonacci()\` возвращающую массив из последовательности Фибоначи. Функции передается количество элементов для возвращаемого массива. Примеры:
\`\`\`javascript
fibonacci(1) // [1]
fibonacci(5) // [1, 1, 2, 3, 5]
fibonacci(10) // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
\`\`\``,
            code: `function fibonacci () {
    return
}`,
            tests: [{
                    testCode: 'fibonacci(1)',
                    expect: [1],
                },
                {
                    testCode: 'fibonacci(5)',
                    expect: [1, 1, 2, 3, 5],
                },
                {
                    testCode: 'fibonacci(10)',
                    expect: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
                },
                {
                    testCode: 'fibonacci(50)',
                    expect: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025],
                }
            ]
        },

        {
            name: 'getMaxSubarray',
            description: `Напишите функцию \`getMaxSubarray()\` принимающую целочисленный массив и возвращающую не убывающий подмассив максимальной длины. Примеры:
\`\`\`javascript
getMaxSubarray([0, 1, 2, 3, 4]) // [0, 1, 2, 3, 4]
getMaxSubarray([0, 1, 0, 1, 2, 0, 1]) // [0, 1, 2]
getMaxSubarray([0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 8]) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
\`\`\``,
            code: `function getMaxSubarray () {
    return
}`,
            tests: [{
                    testCode: 'getMaxSubarray([0, 1, 2, 3, 4])',
                    expect: [0, 1, 2, 3, 4],
                },
                {
                    testCode: 'getMaxSubarray([0, 1, 0, 1, 2, 0, 1])',
                    expect: [0, 1, 2],
                },
                {
                    testCode: 'getMaxSubarray([0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 8])',
                    expect: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                },
                {
                    testCode: 'getMaxSubarray([0, 0, 0, 1, 1, 1, 2, 2, 2])',
                    expect: [0, 0, 0, 1, 1, 1, 2, 2, 2],
                },
                {
                    testCode: 'getMaxSubarray([5, 4, 5, 4, 1, 2, 4, 2, 1, 3])',
                    expect: [1, 2, 4],
                }
            ]
        }
    ]
}