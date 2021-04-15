
// * Variables

const gridDiv       = document.querySelector('.grid-container');
const btnClear      = document.querySelector('#btn-clear');
const btnChangeSize = document.querySelector('#btn-size');

let size = 16;

// * Functions

/**
 * A function that generates a random rgb color
 * and add it to the grid-element that is being
 * mouseovered.
 */
const getColor = ( e ) => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgba( ${r}, ${g}, ${b} )`;

}

/**
 * A function that clear the grid by
 * removing the elements and adding them
 * again without color
 */
const clearGrid = () => {

    const grids = document.querySelectorAll('.grid-element');
    grids.forEach(element => {
        gridDiv.removeChild( element );
    });

    createGrid( size );

}

/**
 * A function that creates the grid
 * elements with the specified pixel
 * area.
 */
const createGrid = ( pixels ) => {

    gridDiv.style.gridTemplateColumns = `repeat(${ pixels }, 1fr)`;

    for (let i = 0; i < pixels*pixels; i++) {

        gridElement = document.createElement('div');
        gridElement.classList = 'grid-element';
        gridElement.addEventListener( 'mouseover', getColor );

        gridDiv.append( gridElement );

    }

}

/**
 * A function that changes the size of the grid
 * If the user selects an unvalid size (<0 or null)
 * the default size is gonna be 16px 
 */
const changeSize = () => {

    size = prompt('Select new size');
    size = ( size > 0 ) ? size : 16; 

    clearGrid();

}

// * Events

// Clear grid button
btnClear.addEventListener( 'click', clearGrid );

// Change size button
btnChangeSize.addEventListener( 'click', changeSize );

createGrid( size );