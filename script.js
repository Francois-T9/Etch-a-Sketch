
const container=document.querySelector("#container");
const setButton=document.getElementById("setBtn");
const resetButton=document.getElementById("resetBtn");



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

createGridItem(50*50);

setButton.addEventListener('click', () => { 
   
   
    squaresPerSide=prompt('How many squares per side do you want ?');
    createGridItem(squaresPerSide**2);
    
    while(squaresPerSide>=100) {
        squaresPerSide=prompt('Try a value above 100');
        createGridItem(squaresPerSide);
        
    }
    // console.log(squaresPerSide);
    
});

resetButton.addEventListener('click', () => { 
    createGridItem(0);

    // Select all child elements of the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});
