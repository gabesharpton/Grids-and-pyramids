
function createPyramid (rows) {
for(let i = 0; i < rows; i++){
let row = document.createElement('div');

row.id = i;


document.body.appendChild(row);

for(let j = 0; j <= i; j++){
    let tri = document.createElement('div');
    tri.className = 'triangle';

    let rowNum = document.getElementById(i);
    rowNum.appendChild(tri);
}
}
}
createPyramid(16);