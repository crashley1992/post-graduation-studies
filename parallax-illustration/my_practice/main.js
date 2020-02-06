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
            drawCanvas();
        }
    }
    layer.image.src = layer.src;
});

const drawCanvas = () => {
//clear whatever is in the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

//loop through each layer and draw it to the canvas
layer_list.forEach((layer, index) => {
        context.drawImage(layer.image, layer.position.x, layer.position.y)
    })
}