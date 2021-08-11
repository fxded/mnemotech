/*
Пимслер советовал повторять фразу 11 раз. Можно сделать проще и обойтись девятью подходами: прочитать, повторить через 30 минут, потом — на следующее утро, потом — через три дня, неделю, месяц, три месяца, полгода и через год.
Если повторять фразу 10 секунд (два озвучивания по пять секунд), то понадобится полторы минуты в год.
*/
/*
время следующего повторения записывается в юникс формате, 
на больших интервалах время на повторение один день,
возможность ввода списка слов(фраз)
расчет расписания для группы слов(фраз)
напоминание о следующем повторении
ведение статистики по словам(фразам) и их распределению по временным интервалам
прогноз количества и времени слов для повторения на завтра, послезавтра
напомининие оставшихся слов на сегодня и по времени
*/

/**
class MyClass {
  prop = value; // свойство
  constructor(...) { // конструктор
    // ...
  }
  method(...) {} // метод
  get something(...) {} // геттер
  set something(...) {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}
 */

class Test {
    constructor (objectForTest) {
        this.objectForTest = objectForTest;
    }
    test () {
        let property = ['word',
                        'russ',
                        'second5',
                        'second25',
                        'minute2',
                        'minute10',
                        'hour1',
                        'hour5',
                        'day1',
                        'day5',
                        'day25',
                        'month4',
                        'year2'
                        ]
        let flag = false
        if (typeof (this.objectForTest) === 'object') {
            flag = true
        }
        console.log(`Check object ${flag}`);
        flag = false
        if (this.objectForTest.hasOwnProperty('data')) {
            if (this.objectForTest.data.hasOwnProperty('item')
                && this.objectForTest.data.hasOwnProperty('version')) {
                flag = true
                for (let item1 of property) {
                    if (!this.objectForTest.data.item[0].hasOwnProperty(item1)) {
                        console.log(item1)
                        flag = false
                    }
                }
            }
        }
        console.log(`Check property ${flag}`);
        flag = false
        let mockInfo = {
            item: [{
                    word: 'mock',
                    russ: 'издеваться, глумиться, дразнить',
                    second5: 0,
                    second25: 0,
                    minute2: 0,
                    minute10: 0,
                    hour1: 0,
                    hour5: 0,
                    day1: 0,
                    day5: 0,
                    day25: 0,
                    month4: 0,
                    year2: 0
                }],
            version: new Date()
        }
        console.log(this.objectForTest)
        if (this.objectForTest.__proto__.hasOwnProperty('upVersion')) {
            if (this.objectForTest.__proto__.upVersion.call(mockInfo.version) === mockInfo.version) {
                flag = true
            }
        }
        console.log(`Check method increment version ${flag}`);
    }
}

class Schedule {
    constructor (data) {
        this.data = data
    }
    upVersion (date) {
        console.log(this)
        return this
    }
}
var data2 = {
    ver: 0,
    second5: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    second25: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    minute2: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    minute10: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    hour1: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    hour5: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    day1: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    day5: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    day25: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    month4: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ],
    year2: [
        { 
            word:'',
            translate:'',
            voice:'',
            image:'',
            language:''
        }
    ]
}

var dataMnenotechnic = {
    item: [
        {
            word: 'hello world!',
            translate: 'привет мир!',
            nextRepetition: 0,
            language: '',
            image: '',
            voice: '',
        }
    ],
    version:0
}
let test = {
    word: 'redicule',
    russ: 'смешной нелепый',
    second5: 0,
    second25: 0,
    minute2: 0,
    minute10: 0,
    hour1: 0,
    hour5: 0,
    day1: 0,
    day5: 0,
    day25: 0,
    month4: 0,
    year2: 0
}

dataMnenotechnic.item.push(test)
console.log(dataMnenotechnic.item[0].word)
let schedule = new Schedule (dataMnenotechnic)
let test1 = new Test(schedule)
test1.test();