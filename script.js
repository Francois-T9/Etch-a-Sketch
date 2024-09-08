
const container=document.querySelector("#container");
const button=document.getElementById("btn");

// const grid_item=document.createElement("div");
// grid_item.className="grid";
// const grid_text=document.createTextNode('my grid');

// grid_item.appendChild(grid_text);
// container.appendChild(grid_item);

function createGridItem(numGrid) {

    for(let i=1;i<=numGrid;i++) {
        // console.log(i);
        let grid_item=document.createElement("div");
        container.appendChild(grid_item);
    }

}

createGridItem(256);

button.addEventListener('click', () => { 
   
    squaresPerSide=prompt('How many squares per side do you want ?');
    createGridItem(squaresPerSide**2);
    while(squaresPerSide>=100) {
        squaresPerSide=prompt('Try a value above 100');
        // createGridItem(256);
        
    }
    console.log(squaresPerSide);
    
});