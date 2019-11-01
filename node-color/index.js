const argument = process.argv;
const color = argument[2];


if (color === 'blue'){
    console.log ('This is a great color! It is the color of the greatness');
}
else if (color === 'red'){
    console.log ('Are you angry? Red is a hot color!');
}
else if (color === 'Yellow'){
    console.log ('That is the color of the sun!');
}
else if (color === 'green'){
    console.log ('That is also my favorite color!');
}
else if (color === 'orange'){
    console.log ('That is the color of victory!');
}
else if (color === 'red'){
    console.log ('Are you angry? Red is a hot color!');
}
else if (color !== NaN){
    console.log ('This is not a color. Please type your favorite color!');
    return
}