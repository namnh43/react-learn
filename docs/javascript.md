I - Event loop
1. Javascript là single thread. Chỉ 1 thread, 1 context, chỉ chạy 1 thứ tại 1 thời điemer
2. Call stack: memory heap, callstack
3. 

I.2 Arrow function
Syntax
a. Basic syntax: 
- One param, with simple expression return is not needed:
param => express
- Multiple params require parentheses. With simple expression return is not needed:
(param1, paramN) => expression
- Multiline statements require body braces and return:
param => {
    let a=1;
    return param+a;
}
- Multi param require parentheses. Multiline statements require body braces and return:
(param1, paramN) => {
    let a=1;
    return param1 + paramN + a;
}

b. Advanced syntax
- to return an object literal expression requires parentheses around expression:
param => ({foo: "a"}); //return the object {foo: "a"}
- rest parameters are supported:
(a, b, ...r) => expression


c. Rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
syntax: function s(a,b, ...theArgs);
example:
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
//Call function
myFun("one", "two", "three", "four", "five", "six")
// console output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]


II. Callback, eventloop, webapi
- Event loop luôn luôn tracking queue và callstack: check item trong callstack và queue để thực hiện.
Nếu queue tồn tại element và callstack trống, thì sẽ pussh item từ queue vào callstack.
- Chương trình luôn thực hiện từ callstack

Javascript callbacks: A callback is a function passed as an argument to another function
Using a callback, you could 
- setTimeout: Chỉ chạy khi nào callstack null mà thôi.
Đừng bao h block eventloop & callstack. Sẽ không thực hiện được cái gì khác

III. JS Async
- Function running in parallel with other function are called asynchronous. A good example is Javascript setTimeout()
- THe function (the function name) is passed to setInterval() as an argument
- Waiting for a file:
>>>>>>>>>>>
function myDisplayer(some) {
    document.getElementById("demo").innerHTML=some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload=function() {
        if (req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("error:" + req.status) 
        }
    }
    req.send();
}
getFile(myDisplayer);

