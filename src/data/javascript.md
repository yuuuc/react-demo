1. let 声明的范围是块作用域，而 var 声明的范围是函数作用域 ， const 声明块作用域，区别于let 是赋值后地址值不可再发生改变
 
```
var : 

 if (true) {
  var name = 'Matt';
  console.log(name); // Matt
 }
 console.log(name); // Matt
```

``` 
let :

 if(true){
     let age = 26;
     console.log(26);
 }
 console.log(age); // ReferenceError: age没有定义
```
2. 基本数据类型 Undefined、Null、Boolean、Number、String、Symbol(符号)，基本类型检查使用 typeof 
   1. Undefined 当 let 或 var 初始化了但未赋值就为 undefined
   2. Null 表示一个空的对象
   3. Boolean true 或 false ; Number 类型的 0，NaN 是false ; Undefined N/A(不存在) 是true ， undefined 为 false
   4. Number 类型 0开头为8进制 ，0x开头16进制；最小值得 Number.MIN_VALUE , 最大值为Number.MAX_VALUE ; 任何无法表示的正数为 Infinity(无穷)， 任何无法表示的负数为 ： -Infinity(负无穷大) ，要确定一个数是不是有限大小使用 isFinite() 函数
   5. String.raw 例子 
    ``` 
     console.log(`\u00A9\`) // ©
     console.log(String.raw`\u00A9\`) // \u00A9 
    ```
   6. Symbol 常用内置符号
        * Symbol.iterator 给自定义对象添加该方法，可以使用 for-of 进行对象的迭代
        ```
        class Person {
			constructor() {
				this.obj = {
					apple: "apple",
					orange: "orange",
					banana: "banana",
				};
			}

			*[Symbol.iterator]() {
				for (const key in this.obj) {
					yield this.obj[key];
				}
			}
		}

		let person = new Person();
		for (let val of person) {
			console.log(val);
		}
        ```
        * Symbol.asyncIterator :返回AsyncIterator对象,由for-await-of使用，这个符号表示实现异步迭代器
        ```
        class Animal {
			constructor() {
				this.obj = { dog: "dog", cat: "cat", pig: "pig" };
			}

			async *[Symbol.asyncIterator]() {
				for (const key in this.obj) {
					yield new Promise((resolve, rejected) => resolve(this.obj[key]));
				}
			}
		}

		async function test() {
			let animal = new Animal();
			for await (const val of animal) {
				console.log(val);
			}
		}

		test();
        ```
        * Symbol.hasInstance 重写该方法会影响 instanceof
        ```
        class Bar {} 
        let b = new Bar(); 
        console.log(Bar[Symbol.hasInstance](b)); // true

        class Bar {} 
        class Baz extends Bar { 
            static [Symbol.hasInstance]() { 
                return false; 
            } 
        } 
        let b = new Baz(); 
        console.log(Bar[Symbol.hasInstance](b)); // true 
        console.log(b instanceof Bar); // true 
        console.log(Baz[Symbol.hasInstance](b)); // false 
        console.log(b instanceof Baz); // false
        ``` 
        * Symbol.isConcatSpreadable :数组对象默认情况下会被打平到已有的数组，false 或假值会导致整个对象被追加到数组末尾。类数组对象默认情况下会被追加到数组末尾，true 或真值会导致这个类数组对象被打平到数组实例。其他不是类数组对象的对象在 Symbol.isConcatSpreadable 被设置为 true 的情况下将被忽略。
        ```
        let initial = ['foo']; 
        let array = ['bar']; 
        console.log(array[Symbol.isConcatSpreadable]); // undefined 
        console.log(initial.concat(array)); // ['foo', 'bar'] 
        array[Symbol.isConcatSpreadable] = false; 
        console.log(initial.concat(array)); // ['foo', Array(1)]

        let arrayLikeObject = { length: 1, 0: 'baz' }; 
        console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined 
        console.log(initial.concat(arrayLikeObject)); // ['foo', {...}] 
        arrayLikeObject[Symbol.isConcatSpreadable] = true; 
        console.log(initial.concat(arrayLikeObject)); // ['foo', 'baz'] 如果 'baz'的 key 不为 0 时 则会出现 ['foo', empty] (undefined)

        let otherObject = new Set().add('qux'); 
        console.log(otherObject[Symbol.isConcatSpreadable]); // undefined 
        console.log(initial.concat(otherObject)); // ['foo', Set(1)] 
        otherObject[Symbol.isConcatSpreadable] = true; 
        console.log(initial.concat(otherObject)); // ['foo'] 
        ```
        * Symbol.match(返回匹配结果) Symbol.replace(替换所有匹配结果) Symbol.search（返回找到匹配字符串的索引) Symbol.split(通过给定字符串返回数组) 正则表达式的4种方法
        ```
        class FooReplacer { 
            static [Symbol.replace](target, replacement) { 
                return target.split('foo').join(replacement); 
            } 
        } 
        console.log('barfoobaz'.replace(FooReplacer, 'qux')); 
        // "barquxbaz" 

        class StringReplacer { 
            constructor(str) { 
                this.str = str; 
            } 
            [Symbol.replace](target, replacement) { 
                return target.split(this.str).join(replacement); 
            } 
        } 
        console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux')); 
        // "barquxbaz"
        ```
        * Symbol.species 相当于定义对象的 getter 方法
        ```
        class Bar extends Array {} 
        class Baz extends Array { 
            static get [Symbol.species]() { 
                return Array; 
            }      
        } 
        let bar = new Bar(); 
        console.log(bar instanceof Array); // true 
        console.log(bar instanceof Bar); // true 
        bar = bar.concat('bar'); 
        console.log(bar instanceof Array); // true 
        console.log(bar instanceof Bar); // true 
        let baz = new Baz(); 
        console.log(baz instanceof Array); // true 
        console.log(baz instanceof Baz); // true 
        baz = baz.concat('baz'); 
        console.log(baz instanceof Array); // true 
        console.log(baz instanceof Baz); // false
        ```
        * Symbol.toPrimitive 
        ```
        class Foo {}
		let foo = new Foo();
		console.log(3 + foo); // "3[object Object]"
		console.log(3 - foo); // NaN 
		console.log(String(foo)); // "[object Object]" 

		class Bar {
			constructor() {
				//hint 有 string、number 或 default
				this[Symbol.toPrimitive] = function (hint) {
					switch (hint) {
						case "number":
							return 3;
						case "string":
							return "string bar";
						case "default":
						default:
							return "default bar";
					}
				};
			}
		}
		let bar = new Bar();
		console.log(3 + bar); // "3default bar"
		console.log(3 - bar); // 0 
		console.log(String(bar)); // "string bar" 
        ```
        * Symbol.toStringTag 设置对象标识符 可以检查对象的名
        ```
        class Yu {
			constructor() {
				this[Symbol.toStringTag] = "Yu";
			}
		}

		let yu = new Yu();
		console.log(yu.toString());
		console.log(yu[Symbol.toStringTag]);
        ```
        * Symbol.unscopables : es根据 ECMAScript 规范，这个符号作为一个属性表示“一个对象，该对象所有的以及继承的属性，都会从关联对象的 with 环境绑定中排除”。设置这个符号并让其映射对应属性的键值为 true，就可以阻止该属性出现在 with 环境绑定中
        ``` 
        let o = { foo: 'bar' }; 
        with (o) { 
            console.log(foo); // bar 
        }    
        o[Symbol.unscopables] = { 
            foo: true 
        }; 
        with (o) { 
            console.log(foo); // ReferenceError 
        }
        ```
3. 复杂数据类型 Object，复杂类型检查对象名称 instanceof  
   1. constructor : 构造函数
   2. hasOwnProperty(propertyName): 判断当前对象中是否存在传入的key值
   3. isPrototypeOf(object): 用于判断当前对象是否为另一个对象的原型
   4. propertyEnumerable(propertyName): 用于判定给定的属性是否可用
   5. toLocaleString() :  反映对象所在本地化执行环境
   6. toString() : 返回对象的字符串表示
   7. valueOf() : 返回对象对应字符串、数值或布尔值表示
   tips : BOM 和 DOM 对象，都是由宿主环境定义和提供的宿主对象。而宿主对象不受ECMA-262的约束，所以他们可能会也可能不会继承Object
   
