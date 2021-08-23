let mas = [55, 44, 2, 3, 43, 51, 22, 37, 83]
let max = mas[0]
let res = max[0]
for (let index = 1; index < mas.length; index++) {
    if (max < mas[index]) {
        max = mas[index]
    }
}
mas[mas.length-1] = res
console.log(mas.length);
console.log('Massiv eng katta elementi:', max);



//////////Palindrom


function palindrom(p) {
    let pal = p.split('').reverse().join('')
    if (pal.toLowerCase() == p.toLowerCase()) {
        console.log('palindrom');
    } else {
        console.log('palindrom emas');
    }

}
palindrom('Aziza')


let a = 22;
let b = 12;
let c = 3;
while (n) {
    if (a > b) {
        if (a > c) {

        } else if (c > b) {
    
        } else if (b > a) {
            if (b > c) {
            } else if (c > a) {
        
}


///O'sish bo'yicha tartiblash va bir xil element o'chirish

let mas = [55, 44, 2, 3, 43, 51, 22, 37, 83,55]
let i = 0
console.log(mas);
for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas.length; j++) {
        if (mas[i] < mas[j]) {
            let res = mas[i]
            mas[i] = mas[j]
            mas[j] = res
        }
    }
}
console.log(mas);

while (i<mas.length) {
    if (mas[i]%2==0)
    mas.splice(i, 1)
    i++ 
}
console.log(mas)