const argument = process.argv;
const color = argument[2];

if (color === 'red'){
    console.log ('Are you angry? Red is a hot color!');
}
else if (color){
    console.log (`you have entered ${color}`);
}