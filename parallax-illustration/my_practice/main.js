//get referene to Canvas
const canvas = document.getElementById('canvas');

//Get reference to Canvas Context
const context = canvas.getContext('2d');

//Inialize loading variables 
let load_counter = 0;

//Inialize image for layers
const background = new Image();
const shadows = new Image();
const clouds = new Image()
const floaties_1 = new Image();
const floaties_2 = new Image();
const mask = new Image();
const humans = new Image();
const floaties_3 = new Image();

// create list of layer objects
const layer_list = [
    {
        'image': background,
        'src': './images/layer_1_1.png',
        'z_index': -2.25,
        'position': {x: 0, y: 0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': clouds,
        'src': './images/layer_2_1.png',
        'z_index': -2,
        'position': {x: 0, y: 0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': floaties_1,
        'src': './images/layer_3_1.png',
        'z_index': -1.25,
        'position': {x: 0, y: 0},
        'blend': 'overlay', //if you used overlays this can't be null
        'opacity': 1
    },
    {
        'image': floaties_2,
        'src': './images/layer_4_1.png',
        'z_index': -0.5,
        'position': {x: 0, y: 0},
        'blend': 'overlay', //if you used overlays this can't be null
        'opacity': 1
    },
    {
        'image': shadows,
        'src': './images/layer_5_1.png',
        'z_index': -1.25,
        'position': {x: 0, y: 0},
        'blend': 'multiply',
        'opacity': 0.75
    },
    {
        'image': mask,
        'src': './images/layer_6_1.png',
        'z_index': 0,
        'position': {x: 0, y: 0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': humans,
        'src': './images/layer_7_1.png',
        'z_index': 0.8,
        'position': {x: 0, y: 0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': floaties_3,
        'src': './images/layer_8_1.png',
        'z_index': 2,
        'position': {x: 0, y: 0},
        'blend': null,
        'opacity': 0.9
    }
];

layer_list.forEach((layer, index) => {
    layer.image.onload = () => {
        load_counter += 1;
        if (load_counter >= layer_list.length) {
            requestAnimationFrame(drawCanvas);
        }
    }
    layer.image.src = layer.src;
});

const drawCanvas = () => {
//clear whatever is in the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //loop through each layer and draw it to the canvas
    layer_list.forEach((layer, index) => {

        layer.position = getOffset(layer);

        if (layer.blend) {
            context.globalCompositeOperation = layer.blend;
        } else {
            context.globalCompositeOperation = 'normal';
        }

        context.globalAlpha = layer.opacity;

        context.drawImage(layer.image, layer.position.x, layer.position.y)
    })
    requestAnimationFrame(drawCanvas);
}

const getOffset = (layer) => {
    // Calculate the amount you want the layers to move based on touch or mouse input.
	// You can play with the touch_multiplier variable here. Depending on the size of your canvas you may want to turn it up or down.
    const touch_multiplier = 0.3;
    let touch_offset_x = pointer.x * layer.z_index * touch_multiplier;
    let touch_offset_y = pointer.y * layer.z_index * touch_multiplier;

	// var motion_multiplier = 2.5;
	// var motion_offset_x = motion.x * layer.z_index * motion_multiplier;
	// var motion_offset_y = motion.y * layer.z_index * motion_multiplier;

    // Calculate the amount you want the layers to move based on the gyroscope
	// You can play with the motion_multiplier variable here. Depending on the size of your canvas you may want to turn it up or down.
    const offset = {
        x: touch_offset_x,
        y: touch_offset_y
    };
    // Return the calculated offset to whatever requested it.
    return offset;
}

// TOUCH AND MOUSE CONTROLS
let moving = false;

//Inizalize touch and mouse position
const pointer_initial = {
    x: 0,
    y: 0,
};

const pointer = {
    x: 0,
    y: 0
};

const pointerStart = (event) => {
    moving = true;
	// Check if this is a touch event
	if (event.type === 'touchstart') {
		// set initial touch position to the coordinates where you first touched the screen
		pointer_initial.x = event.touches[0].clientX;
		pointer_initial.y = event.touches[0].clientY;
	// Check if this is a mouse click event
	} else if (event.type === 'mousedown') {
		// set initial mouse position to the coordinates where you first clicked
		pointer_initial.x = event.clientX;
		pointer_initial.y = event.clientY;
	}
}
//event listensers for when screen is touch or mouse is moved to direct image

// This one listens for when you start touching the canvas element
canvas.addEventListener('touchstart', pointerStart);
// This one listens for when you start clicking on the canvas (when you press the mouse button down)
canvas.addEventListener('mousedown', pointerStart);

const pointerMove = (event) => {
    	// This is important to prevent scrolling the page instead of moving layers around
    event.preventDefault();
    	// Only run this if touch or mouse click has started
    if (moving === true) {
        let current_x = 0;
        let current_y = 0;
        if (event.type === 'touchmove') {
           	// Current position of touch
			current_x = event.touches[0].clientX;
			current_y = event.touches[0].clientY;
        } else if (event.type === 'mousemove') {
           // Current position of mouse cursor
			current_x = event.clientX;
			current_y = event.clientY;
        }
        // Set pointer position to the difference between current position and initial position
        pointer.x = current_x - pointer_initial.x
        pointer.y = current_y - pointer_initial.y;
    }
}

// This runs whenever your finger moves anywhere in the browser window
window.addEventListener('touchmove', pointerMove);
// This runs whenever your mouse moves anywhere in the browser window
window.addEventListener('mousemove', pointerMove);


canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
});

canvas.addEventListener('mousemove', (event) => {
    event.preventDefault();
});

window.addEventListener('touchend', (event) => {
    endGesture();
});

window.addEventListener('mouseup', (event) => {
    endGesture();
});

const endGesture = () => {
    moving = false;
    pointer.x = 0;
    pointer.y = 0;
}

