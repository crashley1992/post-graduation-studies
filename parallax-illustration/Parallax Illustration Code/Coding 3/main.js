// Get reference to Canvas
var canvas = document.getElementById('canvas');

// Get reference to Canvas Context
var context = canvas.getContext('2d');

// Initialize loading variables
var load_counter = 0;

// Initialize images for layers
var background = new Image();
var shadows = new Image();
var clouds = new Image();
var floaties_1 = new Image();
var floaties_2 = new Image();
var mask = new Image();
var humans = new Image();
var floaties_3 = new Image();

// Create a list of layer objects
// Each object contains the following:
// image: a reference to the image created above
// src: the path to the actual image in your project
// z_index: how close the object should appear in 3d space (0 is neutral)
// position: a place to keep track of the layer's current position
// blend: what blend mode you'd like the layer to use—default is null
// opacity: how transparent you'd like the layer to appear (0 is completely transparent, 1 is completely opaque)
var layer_list = [
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
		'blend': 'overlay',
		'opacity': 1
	},
	{
		'image': floaties_2,
		'src': './images/layer_4_1.png',
		'z_index': -0.5,
		'position': {x: 0, y: 0},
		'blend': 'overlay',
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


// Go through the list of layer objects and load images from source
layer_list.forEach(function(layer, index) {
	layer.image.onload = function() {
		// Add 1 to the load counter
		load_counter += 1;
		// Checks if all the images are loaded
		if (load_counter >= layer_list.length) {
			// Start the render Loop!
			requestAnimationFrame(drawCanvas);
		}
	}
	layer.image.src = layer.src;
});


// Draw layers in Canvas
function drawCanvas() {		
	// Erase everything currently on the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// Loop through each layer in the list and draw it to the canvas
	layer_list.forEach(function(layer, index) {
		
		// If the layer has a blend mode set, use that blend mode, otherwise use normal
		if (layer.blend) {
			context.globalCompositeOperation = layer.blend;
		} else {
			context.globalCompositeOperation = 'normal';
		}
		
		// Set the opacity of the layer
		context.globalAlpha = layer.opacity;
		
		// Draw the layer into the canvas context
		context.drawImage(layer.image, layer.position.x, layer.position.y);
	});
	
	// Loop this function! requestAnimationFrame is a special built in function that can draw to the canvas at 60 frames per second
	// NOTE: do not call drawCanvas() without using requestAnimationFrame here—things will crash!
	requestAnimationFrame(drawCanvas);
}