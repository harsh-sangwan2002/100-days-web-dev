// 1. First Way
// module.exports = function(first,second){

//     return first+second;
// }

// 2. Second Way
// module.exports.add = function (first, second) {
//     return first + second
// }
// module.exports.sub = function (first, second) {
//     return first - second
// }
// module.exports.mul = function (first, second) {
//     return first * second
// }

// 3. Third Way
// function add(first, second) {
//     return first + second
// }

// function sub(first, second) {
//     return first - second
// }

// function mul(first, second) {
//     return first * second
// }

// module.exports = { add, sub, mul };

// 4. Fourth Way
// const calc = {

//     add: function (first, second) {
//         return first + second
//     },

//     sub: function (first, second) {
//         return first - second
//     },

//     mul: function (first, second) {
//         return first * second
//     },
// }

// module.exports = calc

// 5. Fifth Way

// Both are pointing to the blank object
// module.exports is exported by default whereas we need to explicity mention for exports
console.log(module.exports, exports);
console.log(module.exports === exports);

exports = {

    add: function (first, second) {
        return first + second
    },

    sub: function (first, second) {
        return first - second
    },

    mul: function (first, second) {
        return first * second
    },
}

module.exports = exports;