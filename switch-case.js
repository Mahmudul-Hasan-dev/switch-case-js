// comparison between if else and switch case
const color = 'b';
if (color == 'blue') {
    console.log('your color is blue');
}
else if (color == 'red') {
    console.log('your color is red')
}
else if (color == 'orange') {
    console.log('your color is orange')
}
else if (color == 'purple') {
    console.log('your color is purple')
}
else if (color == 'yellow') {
    console.log('your color is yellow')
}
else {
    console.log('your color is null');
}

//switch case
switch (color) {
    case 'green':
        console.log('green selected');
        break;
    case 'blue':
        console.log('blue selected');
        break;
    case 'orange':
        console.log('orange selected');
        break;
    case 'black':
        console.log('black selected');
        break;
    case 'white':
        console.log('white selected');
        break;
    case 'purple':
        console.log('purple selected');
        break;
    default:
        console.log('not available');
}