## Упражнения на алгоритмы: Расчет факториала

В этой задаче тебе необходимо написать два решения одной и той же проблемы. Ты будешь писать два метода, которые ведут себя одинаково - они будут принимать те же аргументы и возвращать одинаковые значения. Они будут отличаться только в своих реализациях (т.е. каким образом они делают то, что делают).

Проблема, которую ты будешь решать - это вычисление факториала заданного числа. Ты решишь эту задачу, написав как *итеративное*, так и *рекурсивное* решение.

## Итерационные алгоритмы
 
```javascript
function countdownScript(number) {
  let script = "";

  while(number > 0) {
    script += `${number} ... \n`;
    number -= 1;
  }

  script += "Blast off!";
  return script;
}
```
*Рисунок 1*. Итеративный алгоритм для генерации сценария обратного отсчета с использованием цикла while.

Ты уже знаком(а) с написанием [итеративных алгоритмов](https://en.wikipedia.org/wiki/Iteration#Computing). Каковы признаки того, что мы пишем итеративный алгоритм? Наши методы включают в себя цикл - возможно с `while` или `for`. Мы выполняем какие-то действия определенное количество раз. Например, мы перебираем элементы в массиве.

На Рисунке 1 ты видишь итерационное решение для создания сценария обратного отсчета. Метод строит и возвращает строку. Он делает это, используя цикл while: до тех пор, пока переменная `number` указывает на целое число больше нуля, метод будет продолжать добавлять числа к `script`. Важным фактором в таком методе является понимание того, когда нужно «вырваться» из цикла и убедиться, что мы в конечном итоге нарушили условие. 
Как это выполняется в методе на Рисунке 1?

## Рекурсивные алгоритмы
 
```javascript
function countdownScript(number) {
  if(number < 1) { 
    return "Blast off!"; 
  }
 
  return `${number} ... \n` + countdownScript(number - 1)
}
```
*Рисунок 2*. Рекурсивное решение для создания сценария обратного отсчета.

Написание [рекурсивного метода](http://en.wikipedia.org/wiki/Recursion_%28computer_science%29) - это еще один подход к решению той же задачи, которую мы решаем с помощью итеративных алгоритмов. На Рисунке 2 мы решаем задачу создания сценария обратного отсчета при помощи рекурсии.

Одной из важных особенностей написания рекурсивного метода является *базовый случай*. Это известное решение проблемы. При работе со строкой `script` мы знаем, что когда мы опускаемся ниже единицы - получаем «Blast off». Другими словами, у нас есть наш базовый случай; если число, переданное нашему методу, меньше единицы, мы просто вернем строку `Blast off!`.

Вопрос «Каковы базовые случаи?»  мы должны в первую очередь задавать каждый раз, когда мы хотим рекурсивно подходить к проблеме. Многие рекурсивные алгоритмы имеют только один базовый случай, но также могут иметь и несколько базовых случаев.

В нашем базовом случае мы знаем, как поступить, если число, попавшее в наш метод, равно нулю или отрицательному числу. Но в противном случае нам нужно продолжать дополнять нашу строку `script`. Мы делаем это небольшими шагами. Мы не знаем точно, как будет выглядеть весь `script`, но мы знаем, какой из них выглядит так: `${number} ... \ n`.

Нам просто нужно объединить этот фрагмент с остальной частью сценария обратного отсчета. И, чтобы сгенерировать остальную часть скрипта, мы должны снова обратиться к  нашему методу `countdownScript` - на этот раз получается на одно число меньше, чем у нас ранее. Это наиболее очевидная особенность рекурсивного метода: метод вызывает сам себя.

Метод будет продолжать вызывать себя и разрабатывать небольшие фрагменты сценария(script) до тех пор, пока мы не вызовем наш метод и не получим базовый случай. В этот момент у нас на руках будут все части нашего сценария, и мы сможем их объединить.

## Расчет факториала
 
```
0! = 1
1! = 1
2! = 1 * 2
3! = 1 * 2 * 3
4! = 1 * 2 * 3 * 4
```

*Рисунок 3*. Пример факториальных расчетов

Что такое [факториал](http://en.wikipedia.org/wiki/Factorial)? Для данного числа факториал является произведением всех положительных целых чисел, меньших или равных самому числу. Например, 2! (2 факториал) равен `1*2;` `3!=1*2*3;` `4!=1*2*3*4`. (см. Рисунок 3). Мы будем обозначать факториал числа как `n!`.

Хотя это может показаться очень теоретической информацией, но вычисление факториала имеет применение в реальном мире. Например, вычисление факториала подскажет нам, сколькими разными способами можно организовать набор элементов. Например, если у тебя есть десять книг на книжной полке, то есть несколько разных способов переставить книги. Если у тебя есть набор элементов `n`, тогда есть` n! ` способов их упорядочения.

Возвращаясь к Рисунку 3, ты можешь заметить, что расчет для (3!) разделяется на рассчет `3*2!`  Аналогично с 3! И 4! – каждый  из них включает в себя множители 3, 2, 1. 

```
0! = 1
1! = 1 * 0!
2! = 2 * 1!
3! = 3 * 2!
4! = 4 * 3!
```

*Рисунок 4*. Вычисление чисел факториалом в терминах другого факториала.

Из-за этого мы могли бы сказать, например, что четыре факториал (4!)  равно четыре умножить на три факториал  (`4!=3!*4`).  Или, в более общем плане, факториал любого числа равен этому числу умножить на факториал предыдущего числа. (см. Рисунок 4)

*Примечание:* По соглашению, нулевой факториал равен единице.


### Release 0. Итерационный подсчет факториала

Ты начнешь с написания метода, который вычисляет факториал для заданного числа с использованием итеративной реализации. Метод должен принимать любое неотрицательное целое число в качестве входных данных и вычислять факториал этого числа.

### Release 1. Рекурсивный расчет факториала

Теперь напишь метод расчета факториалоа при помощи рекурсии. Попробуй написать тесты самостоятельно, хотя бы на проверку чего-то одного. Используй jasmine.


### Release 2. Уровень вложенности

Что если ты вызовешь рекурсивный метод для вычисления факториала 5 000? Чтобы выполнить фактический расчет, этот метод будет снова вызван для числа 4 999, 4 998 и так далее вплоть до 1. В зависимости от реализации, твой метод будет вызываться примерно 5 000 раз.

Каждый из этих вызовов метода работает в собственной маленькой части памяти компьютера. И каждый вызов занимает эту память до тех пор, пока метод не начнет новый цикл. Когда мы вызываем `factorialRecursive(5000)`, наш метод не начинает цикл заново до тех пор, пока он предварительно не рассчитает `factorialEecursive(4999)`, который не может быть рассчитан до осуществления вычисления `factorialRecursive(4998)` и т.д. Постепенно мы используем все больше и больше памяти.

Каждый из этих примерно 50 00 вызовов методов занимает небольшую часть памяти, пока мы не «ударим» по базовому случаю и не начнем возвращать значения. `factorialRecrusive(1)` запускает цикл заново, что позволяет возвращать `factorialRecursive(2)`, что в свою очередь позволяет возвращать `factorialRecursive(3)` и т. д. до тех пор, пока все вызовы метода не будут оценены, и память, которую они занимают, не будет освобождена.

Попробуй разные числа в качестве аргумента, чтобы определить наибольшее значение, которое наш рекурсивный метод может принимать в качестве своего ввода. Какую ошибку ты получаешь? Что означает эта ошибка?


## Выводы

Итерация и рекурсия - это разные типы реализаций. Каждый из них может в целом обеспечивать такое же поведение, как и другое. Зачем выбирать один за другим? У тебя могут быть проблемы с производительностью, которые ведут тебя в одном направлении. Ты можешь обнаружить, что одна реализация приводит к более чистому, более сжатому, более читаемому коду.

Со временем, когда ты практикуешь написание кода и становишься более продвинутыми в этом и, соответственно, более уверенно реализуешь методы, то выбор итерации или рекурсии станет для тебя также более естественным процессом. Чуть позже мы рассмотрим некоторые проблемы итеративных или рекурсивных методов.
