// 1.使用发布订阅模式，实现vue得$on和$emit、$off 方法

const eventList = {}

const $on = (eventName, callback) => {
    if (!eventList[eventName]) {
        eventList[eventName] = [];
    }
    eventList[eventName].push(callback)
}

const $emit = (eventName, params) => {
    if (eventList[eventName]) {
        let arr = eventList[eventName];
        arr.map((cb) => {
            cb(params);
        })
    }

}

const $off = (eventName, callback) => {
    if (eventList[eventName]) {
        if (callback) {
            let index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index, 1);
        } else {
            eventList[eventName].length = 0;
        }
    }
}


// 2. 实现instanceOf方法
// instanceof 的原理就是寻找左边的对象的原型链中是否存在右边对象的原型对象

function myInstance(left, right) {
    while (true) {
        if (left.__proto__ === right.prototype) {
            return true;
        } else if (left.__proto__ === null) {
            return false;
        } else {
            left = left.__proto__;
        }
    }
}


// 3. 红绿灯问题， 绿灯3秒， 红灯2秒， 黄灯1秒， 每隔一秒打印一条记录 这样循环， 要求： 可以在控制台可以运行的代码， 并且正确输出
// 绿灯 3 绿灯 2 绿灯 1 红灯 2 红灯 1 黄灯 1 绿灯 3

// setTimeout实现   使用setTimeout是最基本的实现方式， 代码如下， 使用递归来实现循环改变颜色。

function changeColor(color) {
    console.log('traffic-light ', color);
}

function main() {
    changeColor('red');
    setTimeout(() => {
        changeColor('yellow');
        setTimeout(() => {
            changeColor('green');
            setTimeout(main, 2000);
        }, 3000);
    }, 1000);
}

// Promise 实现   使用Promise， 把下一次的颜色改变写在then里面， 最后同样使用递归完成循环。

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

function changeColor(duration, color) {
    return new Promise(resolve => {
        console.log('traffic-light ', color);
        sleep(duration).then(resolve);
    })
}

function main() {
    return new Promise(resolve => {
        changeColor(2000, 'red').then(() => {
            changeColor(1000, 'yellow').then(() => {
                changeColor(3000, 'green').then(() => {
                    main();
                })
            })
        })
    })
}

// async await 实现
// 使用async await就可以避免Promise的一连串.then.then.then，也不再需要递归，使用while就可以实现循环。

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

async function changeColor(color, duration) {
    console.log('traffic-light ', color);
    await sleep(duration);
}

async function main() {
    while (true) {
        await changeColor('red', 2000);
        await changeColor('yellow', 1000);
        await changeColor('green', 3000);
    }
}