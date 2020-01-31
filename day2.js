// 1.请封装一个数组reduce方法
// reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
// reduce为数组中的每个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值） 当前元素值，当前索引，调用reduce的数组

var reducers = {
    totalInEuros: function(state, item) {
        return state.euros += item.price * 0.897424392;
    },
    totalInYen: function(state, item) {
        return state.yens += item.price * 113.852;
    }
}

var manageReducers = function(reducers) {
    return function(state, item) {
        return Object.keys(reducers).reduce(
            function(nextState, key) {
                reducers[key](state, item);
                return state;
            }, {});
    }
}


// 2.请使用冒泡和快速两种方式实现数组排序

let newArr = [];
let start, end;

function bubbleSort(newArr, arr) {
    //循环(arr.length-1)次
    for (let i = 0; i < arr.length - 1; i++) {
        //比较(arr.length-1-i)次
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function quickSort(newArr, start, end) {
    //如果开始下标>=结束下标,直接结束函数
    if (start >= end) {
        return;
    }
    //小下标
    let low = start;
    //大下标
    let high = end;
    //默认第一个数为关键字
    let key = arr[low];

    while (low < high) {

        while (arr[high] >= key && low < high) { //双保险
            high--;
        }
        let temp1 = arr[low];
        arr[low] = arr[high];
        arr[high] = temp1;

        while (arr[low] <= key && low < high) { //双保险
            low++;
        }
        let temp2 = arr[low];
        arr[low] = arr[high];
        arr[high] = temp2;
    }
    //对小的部分快速排序
    quickSort(arr, start, low - 1);
    //对大的部分快速排序
    quickSort(arr, high + 1, end);

}


// 3.封装Storage对象
// Storage.set('name', 哈哈哈') // 设置 name 字段存储的值为'哈哈哈'。
// Storage.set('age', 2, 30);
// Storage.set('people', ['Oli', 'Aman', 'Dante'],  60)
// Storage.get('name')    // ‘前端一万小时’
// Storage.get('age')     //  如果不超过 30 秒，返回数字类型的 2；如果超过 30 秒，返回 undefined，并且 localStorage 里清除 age 字段。
// Storage.get('people')  // 如果不超过 60 秒，返回数组； 如果超过 60 秒，返回 undefined。

function saveLocalStorage(key, value) {
    localStorage.setItem(key, value);
}


// 4.可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五

const toChineseNum = (num) => {
    const unit = ['', '十', '百', '千']
    const counts = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

    const pre = Math.floor(num / 10000)
    const next = num % 10000

    let getfour = (mynum, flag = false) => {
        if (!mynum) { return '' }
        let i = 0,
            str = '';

        while (flag ? i < 4 : mynum > 0) {
            count = mynum % 10
            mynum = Math.floor(mynum / 10)
            str = (count ? counts[count] + unit[i] : str[0] == '零' ? '' : str.length && i ? '零' : '') + str
            i++
        }
        return str
    }

    return pre ? getfour(pre) + '万' + getfour(next, true) : getfour(num)
}
console.log(toChineseNum(59900670))