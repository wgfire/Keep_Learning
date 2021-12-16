var a = [2, 7, 11, 12]

//console.log(a.indexOf(7))

// let obj = new Map([
//     [0,2],
//     [1,1]
// ])
// let mapobj = new Map()
// a.forEach((el, index) => {

//     if (!mapobj.has(index)) {
//         mapobj.set(index, el)
//     }

// })

// console.log(mapobj.get(1))

// var twoSums = function (nums, target) {
//     var result = [];
//     for (let i = 0; i < nums.length; i++) {
//         var end = target - nums[i];
//         var endindex = nums.indexOf(end, i + 1);
//         if (endindex != -1 && result.length === 0) {
//             result.push(i, endindex);
//         }
//     }
//     console.log('结果', result);


//     return result;
// };
// var result = twoSums([7, 2, 11,12], 9);


function ListNode(val) {
    this.val = val;
    this.next = null;
}


let alistnode = new ListNode(null)
let head = alistnode

a.forEach(el => {
    // 链表头 要设置val
    if (head.val === null) {
        head.val = el
        head.next = null
        return
    }
    let node = new ListNode(el)
    head.next = node
    head = node // 
    // 一开始是吧head 保存了 alistnode 然后每层循环去改变head



})

//console.dir(alistnode)
const data = [{
        name: "Kris",
        age: "24"
    },
    {
        name: "Andy",
        age: "25"
    },
    {
        name: "Kitty",
        age: "26"
    },
    {
        name: "Andy",
        age: "25"
    },
    {
        name: "Kitty",
        age: "25"
    },
    {
        name: "Andy",
        age: "26"
    },
    {
        name: "Kitty",
        age: "25"
    }
]



const dataReducer = (prev, cur, idx) => {
    let obj = {}
    const {
        name
    } = cur
    obj[name] = cur // 将name 一样的 替换为后面的对象
    console.log('obj', obj)
    console.log('pre', prev)
    return {
        ...prev,
        ...obj
    }
}
const reducedData = data.reduce(dataReducer, {});
let newData = Object.values(reducedData);
console.log('tag', newData)