const sentence = "hello there from lighthouse labs\n \n";
// let count = 1000;
// let string = " "
const display = function (sentence) {
  let counter = 0; 
  for (const char of sentence) {  
    setTimeout(() => {process.stdout.write(char)}, counter) 
    counter += 100; 
}
}
display(sentence);


// const sentence = "hello there from lighthouse labs\n";
// sentence.forEach((element,i) = {
//   setTimeout(() => {process.stdout.write(i)}, count)
// }
  
//   (const char of sentence) {
//   string.concat(char);
//   setTimeout(() => {process.stdout.write(char)}, count) 
//   //console.log(string);
// }
