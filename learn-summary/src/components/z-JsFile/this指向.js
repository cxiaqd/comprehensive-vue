var name = "kkkooo";
function Fun() {
    this.name = "xiaoming",
        this.getName = function () {
            console.log(this);   //Fun
            console.log(">>>>>>this.name===" + this.name); //xiaoming
        },
        this.testTimeout = function () {
            setTimeout(this.getName(), 0);

        }
}
var fun = new Fun();
fun.testTimeout();

// var name = "kkkooo";
// function Fun() {
//     this.name = "xiaoming",
//         this.getName = function () {
//             console.log(this);
//             console.log(">>>>>>this.name===" + this.name);
//         },
//         this.testTimeout = function () {
//             setTimeout(() => {
//                 this.getName();
//                 console.log(this.name);//xiaoming
//             }, 1000);
//         }
// }
// var fun = new Fun();
// fun.testTimeout();