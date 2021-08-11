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
        let property = ['ver',
                        'start',
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
                        'year2']
        let wordProperty = [
            'word',
            'translate',
            'transcription',
            'image',
            'voice',
            'nextRepetition',
            'currentStage'
        ]
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
        // *********  check object ***********
        let flag = false
        if (typeof (this.objectForTest) === 'object') {
            flag = true
        }
        console.log(`Check object ${flag}`);
        flag = false
        // *********  check schedule structure ***********
        if (this.objectForTest.hasOwnProperty('scheduleStructure')) {
            flag = true
            for (let item1 of property) {
                if (!this.objectForTest.scheduleStructure.hasOwnProperty(item1)) {
                    console.log(item1)
                    flag = false
                }
            }
        }
        console.log(`Check property schedule ${flag}`);
        flag = false
        // *********  check data structure ***********
        if (this.objectForTest.hasOwnProperty('data')) {
            if (    this.objectForTest.data.hasOwnProperty('items')
                &&  this.objectForTest.data.hasOwnProperty('version')
                &&  this.objectForTest.data.items[0].hasOwnProperty('words')) {
                flag = true
                for (let item1 of wordProperty) {
                    if (!this.objectForTest.data.items[0].words[0].hasOwnProperty(item1)) {
                        console.log(item1)
                        flag = false
                    }
                }
            }
        }
        console.log(`Check property of word ${flag}`);
        flag = false
        // *********  check object methods  ***********
        console.log(this.objectForTest)
        if (this.objectForTest.__proto__.hasOwnProperty('upVersion')) {
            if (this.objectForTest.__proto__.upVersion.call(this.objectForTest) === Date.now()) {
                console.log(this.objectForTest.data.version, Date.now())
                flag = true
            }
        }
        console.log(`Check method increment version ${flag}`);
        flag = false
        if (this.objectForTest.__proto__.hasOwnProperty('addListOfWords')) {
            //if (this.objectForTest.__proto__.addListOfWords.call(mockInfo.version) === mockInfo.version) {
                flag = true
            //}
        }
        console.log(`Check for addList of words method ${flag}`);
        flag = false
        if (this.objectForTest.__proto__.hasOwnProperty('addWord')) {
            //if (this.objectForTest.__proto__.addWord.call(mockInfo.version) === mockInfo.version) {
                flag = true
            //}
        }
        console.log(`Check for addWord method ${flag}`);
    }
}

class Schedule {
    /**
     * получате список слов для запоминания 
     * составляет расписание
     * добавляет новые слова и списки слов в список для запоминания
     * обновляет время повтора у слов
     * возращает список для сохранения
     */
    scheduleStructure = {
        ver: 0,
        start: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        second5: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        second25: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        minute2: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        minute10: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        hour1: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        hour5: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        day1: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        day5: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        day25: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        month4: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ],
        year2: [
            { 
                word:'',
                translate:'',
                transcription:'',
                voice:'',
                image:'',
                language:''
            }
        ]
    }
    constructor (listsOfWords) {
        this.data = listsOfWords
    }
    upVersion () {
        //console.log(this)
        this.data.version = Date.now()
        return this.data.version
    }
    addWord (wordToAdd) {
        let success;
        // если язык такой уже ест то добаляем слово
        success = this.data.items.filter(item => {
            if (item.language === wordToAdd.language) {
                item.words.push({
                    word: wordToAdd.word,
                    translate: wordToAdd.translate,
                    transcription: wordToAdd.transcription,
                    image: wordToAdd.image,
                    voice: wordToAdd.voice,
                    nextRepetition: wordToAdd.nextRepetition,
                    currentStage: wordToAdd.currentStage
                })
                return item
                //console.log(item.words)
            } 
        })
        // если языка нет то добаляем новый язык и добаляем слово
        if (!success.length) {
            this.data.items.push({
                language: wordToAdd.language,
                words: [{
                    word: wordToAdd.word,
                    translate: wordToAdd.translate,
                    transcription: wordToAdd.transcription,
                    image: wordToAdd.image,
                    voice: wordToAdd.voice,
                    nextRepetition: wordToAdd.nextRepetition,
                    currentStage: wordToAdd.currentStage
                }]
            })
        }
        console.log(success)
        //console.log(word)
        // обновляем версию словарика
        this.upVersion()
    }
    addListOfWords () {

    }
}

var listsOfWords = {
    items: [
        {   language: 'english',
            words: [{
                word: 'hello world!',
                translate: 'привет мир!',
                transcription: '',
                image: '',
                voice: '',
                nextRepetition: 0,
                currentStage: 'start'
            }]
        }
    ],
    version:0
}
let test = {
    word: 'redicule',
    translate: 'смешной нелепый',
    transcription: '',
    language: 'english',
    image: '',
    voice: '',
    nextRepetition: 0,
    currentStage: 'start'
}
let test2 = {
    word: 'le leup',
    translate: 'волк',
    transcription: '',
    language: 'france',
    image: '',
    voice: '',
    nextRepetition: 0,
    currentStage: 'start'
}
let test3 = {
    word: 'heaven',
    translate: 'небо',
    transcription: '',
    language: 'english',
    image: '',
    voice: '',
    nextRepetition: 0,
    currentStage: 'start'
}
let test4 = {
    word: 'chasing',
    translate: 'погоня, преследование',
    transcription: '',
    language: 'english',
    image: '',
    voice: '',
    nextRepetition: 0,
    currentStage: 'start'
}
//console.log(listsOfWords)
let schedule = new Schedule (listsOfWords)
let test1 = new Test(schedule)
test1.test();
schedule.addWord(test)
schedule.addWord(test2)
schedule.addWord(test3)
schedule.addWord(test4)