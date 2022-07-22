// Write your code here!
main.remove();

const newHeader = document.createElement('h1');
    //document.getElementById('victory').textContent = `'${Your-Name}' is the champion`;
    //let text = document.createTextNode(`'${Your-Name}' is the champion`);
newHeader.id = 'victory';

//let text = document.createTextNode(`'${Your-Name}' is the champion`);
newHeader.textContent = 'Philip is the champion';
console.log(newHeader);
document.body.appendChild(newHeader);