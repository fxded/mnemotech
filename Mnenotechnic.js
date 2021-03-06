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
 * 1.TODO Test проверяет объект слово на свойства и манипуляции со словом
 * а это инициализация, смена перевода, смена(транскипции, картинки, звука, следующего повторения, текущей стадии изучения)
 * получение (перевода и всех остальных свойств)
 * 
 * 2.TODO наследовать от Test класс который проверяет список слов и манипуляции со списком
 * а это добавление нового слова , нового языка, получение слова(по определенным критериям)
 * и списка слов определенного языка
 * 
 * 3.TODO возможно при первом обращении к списку построить индексированное дерево(по какому либо параметру(например по 
 * времени следующего повторения)) для более быстрого доступа
 * 
 * 4.TODO пользователь может выбрать повторение на одном двух и т.д. или всех языках, время показа, количество слов для показа 
 * в данный подход
 * 
 * 5.TODO авторизация jwt(openAO) c почтой с выгрузкой и загрузкой словаря
 * 
 * 6.TODO реализовать на nodejs, socketio, mongodb, dockerio
 * 
 * 7.TODO разместить на heroku.com
 * 
 * 8.TODO помнитьвсе.колок.рус
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
    /**
     * тестирование объeкта слова на наличие необходимых свойств, 
     * методов и результатов работы методов
     */
    constructor (objectForTest) {
        this.objectForTest = objectForTest;
    }
    /**
     * 
     * @param {*} list of property 
     * @param {*} list of methods 
     * @returns boolean
     */
    test (property=[],methods=[]) {
        for (let item of property) {
            if (!this.testPropertiesAvailable(item)) {
                /*console.log(`Check '${
                    item}' property of '${
                    this.objectForTest.constructor.name}' is ${
                    this.testPropertiesAvailable(item)
                }`)*/
                return {    message:    `Check '${
                                            item}' property of '${
                                            this.objectForTest.constructor.name}' is ${
                                            this.testPropertiesAvailable(item)
                                        }`, 
                            result:     false 
                }
            }
        }
        for (let item of methods) {
            if (!this.testMethodsAvailable(item)) {
                /*console.log(`Check '${
                    item}' method of '${
                    this.objectForTest.constructor.name}' is ${
                    this.testMethodsAvailable(item)
                }`)*/
                return {    message:    `Check '${
                                            item}' method of '${
                                            this.objectForTest.constructor.name}' is ${
                                            this.testMethodsAvailable(item)
                                        }`, 
                            result:     false 
                }
}
        }
        //console.log(`Check '${this.objectForTest.constructor.name}' is OK`)
        return {    message: `Check '${this.objectForTest.constructor.name}' is OK`, 
                    result: true }
    }
    testPropertiesAvailable (property) {
        return this.objectForTest.hasOwnProperty(property)
    }
    testMethodsAvailable (method) {
        return this.objectForTest.__proto__.hasOwnProperty(method)
    }
    testMethodsResults (context, method) {
        return this.objectForTest.__proto__[method].call(this.objectForTest,context)
    }
}

class Word {
/**
 * основной класс объекта Слово
 */
    constructor (word) {
        Object.assign(this, word);
    }
}
class TestSchedule {
    /**
     * 
     * @param {*} objectForTest 
     * 
     * тестирование объекта словаря на наличие необходимых свойств, 
     * методов и результатов работы методов
     */
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
        // тестовый список
        let mockListOfWords = {
            items: [{
                language: 'germany',
                words: [{
                    word: 'ein Hund',
                    translate: 'собака',
                    transcription: '',
                    image: '',
                    voice: '',
                    nextRepetition: 0,
                    currentStage: 'start'
                }]
            }, {
                language: 'france',
                words: [{
                    word: 'le lapin rouge',
                    translate: 'красный кролик',
                    transcription: '',
                    image: '',
                    voice: '',
                    nextRepetition: 0,
                    currentStage: 'start'
                }, {
                    word: 'le lapin noir',
                    translate: 'черный кролик',
                    transcription: '',
                    language: 'france',
                    image: '',
                    voice: '',
                    nextRepetition: 0,
                    currentStage: 'start'
                }]
            }],
            version: new Date()
        }
        console.log(this.objectForTest)
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
                for (let item1 in mockListOfWords.items[0].words[0]) {
                    if (!this.objectForTest.data.items[0].words[0].hasOwnProperty(item1)) {
                        console.log('property not found', item1)
                        flag = false
                    }
                }
            }
        }
        console.log(`Check property of word ${flag}`);
        flag = false
        // *********  check object methods  ***********
        // проверяем обновляет ли метод версию словаря
        if (this.objectForTest.__proto__.hasOwnProperty('upVersion')) {
            if (this.objectForTest.__proto__.upVersion.call(this.objectForTest) === Date.now()) {
                //console.log(this.objectForTest.data.version, Date.now())
                flag = true
            }
        }
        console.log(`Check method increment version ${flag}`);
        flag = false
        // проверяем добавляет ли метод новое слово в словарь (метод возвращает добавленное слово)
        if (this.objectForTest.__proto__.hasOwnProperty('addWord')) {
            //console.log('check metods',this.objectForTest.__proto__.addWord.call(this.objectForTest, mockListOfWords.items[1]))
            if (this.objectForTest.__proto__.addWord.call(
                    this.objectForTest,
                    {   ...mockListOfWords.items[0].words[0],
                        language: mockListOfWords.items[0].language
                    }
                ).word === mockListOfWords.items[0].words[0].word) {
                flag = true
            }
        }
        console.log(`Check for addWord method ${flag}`);
        flag = false
        // проверяем работу метода по добавленю списка слов, метод возращает результирующий
        // список с добавленными словами. Для проверки считаем сколько было до добавления слов в 
        // каждом языке, считаем сколько слов в добаляемом списке, складываем и сравниваем с
        // результирующим списком
        let startObj = {},
            endObj = {},
            resultObj = {},
            mockObj = {};
        if (this.objectForTest.__proto__.hasOwnProperty('addListOfWords')) {
            for (let item of this.objectForTest.data.items) {
                startObj[item.language] = item.words.length
            }
            for (let item of mockListOfWords.items) {
                //let temp = !mockObj[item.language]?0:mockObj[item.language]
                //mockObj[item.language] = ++temp
                mockObj[item.language] = item.words.length
            }
            // вычисляем множество уникальных языков исходного объекта и добавляемого списка
            let setOfKeysObjects = [... new Set(Object.keys(startObj).concat(Object.keys(mockObj)))]
            for (let item of setOfKeysObjects) {
                let num1 = !startObj[item]?0:startObj[item],
                    num2 = !mockObj[item]?0:mockObj[item]
                endObj[item] = num1 + num2
                //console.log(item,startObj[item],mockObj[item])
            }
            //let resultObj1 = this.objectForTest.__proto__.addListOfWords.call(this.objectForTest, mockListOfWords)
            //console.log(resultObj1)
            for (let item of this.objectForTest.__proto__.addListOfWords.call(this.objectForTest, mockListOfWords).data.items) {
                resultObj[item.language] = item.words.length
            }
            //console.log(startObj, mockObj, endObj, resultObj)
            //console.log(Object.keys(endObj).length, Object.keys(resultObj).length)
            if (Object.keys(endObj).length === Object.keys(resultObj).length) {
                flag = true
                for (let key of Object.keys(endObj)) {
                    //console.log(resultObj[key],key,endObj[key])
                    if (resultObj[key] != endObj[key]) {
                        flag = false
                    }
                }
            }
        }
        console.log(`Check for addList of words method ${flag}`);
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
        //console.log(wordToAdd)
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
                //console.log(item.words[item.words.length - 1])
                return item.words[item.words.length - 1]
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
            success.push(this.data.items[this.data.items.length - 1])
        }
        //console.log('addword',success)
        // обновляем версию словарика
        this.upVersion()
        return success[0].words[success[0].words.length - 1]
    }
    addListOfWords (listsOfWords) {
        for (let item of listsOfWords.items) {
            //console.log('++++', item.language)
            for (let word of item.words) {
                //console.log('----', {...word, language: item.language})
                this.addWord({...word, language: item.language})
            }
        }
        return this
    }
}
/*
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
let test5 = {
    word: 'le lapin',
    translate: 'кролик',
    transcription: '',
    language: 'france',
    image: '',
    voice: '',
    nextRepetition: 0,
    currentStage: 'start'
}
//console.log(listsOfWords)
let schedule = new Schedule (listsOfWords)
let test1 = new TestSchedule(schedule)
test1.test();
schedule.addWord(test)
schedule.addWord(test2)
schedule.addWord(test3)
schedule.addWord(test4)
schedule.addWord(test5)
let testClass = new Test(listsOfWords)
//testClass.test(['word', 'translate', 'transcription', 'language', 'image', 'voice', 'nextRepetition', 'currentStage'],['test'])
console.log(testClass.test(['items1', 'version']))
console.log(testClass.test())
*/
let word = {
    word: 'le lapin',
    translate: 'кролик',
    transcription: '',
    language: 'france',
    image: '',
    voice: '',
    nextRepetition: 0,
    currentStage: 'start'
}
let objWord = new Word(word)
let testClass = new Test(objWord)
console.log(objWord)
console.log(testClass.test(['word', 'translate', 'transcription', 'language', 'image', 'voice', 'nextRepetition', 'currentStage'],['constructor']))