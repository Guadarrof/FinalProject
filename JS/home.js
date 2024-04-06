class productInfo{
    constructor(img, altText, name, price, shDescription,lgDescription){
     this.img=img;
     this.altText=altText;
     this.name=name;
     this.price=price;
     this.shDescription=shDescription;
     this.lgDescription=lgDescription;
    } 
    
    set getImg(img){this.img=img;}
    set altText(altText){this.altText=altText;}
    set getName(name){this.name=name;}
    set getPrice(price){this.price=price;}
    set getShDescription(shDescription){this.shDescription=shDescription;}
    set getLgDescription(lgDescription){this.lgDescription=lgDescription;}

    get getImg(){return this.img;}
    get getName(){return this.name;}
    get getPrice(){return this.price;}
    get getShDescription(){return this.shDescription;}
    get getLgDescription(){return this.lgDescription;}
}
   
let product1= new productInfo (
    '../Images/cocina.png',
    'imagen de cocina de madera de juguete',
    'Cocina Artesanal',
    '$200000',
    'Cocina de madera de colores pasteles, incluye utensilios',
    'Este modelo de cocina de madera, tiene unas medidas de 90 x 33 x 95 cm. Incluye: 3 cucharones de metal, una olla y un sartén. Esta cocina producto utiliza 4 pilas AAA (no incluidas).Esta cocina de juguete es perfecta para los pequeños amantes de la cocina. Juego de roles que fomenta la imaginación y la creatividad de los niños, así como el desarrollo de habilidades importantes como sensoriales, afectivas'   
);

let product2= new productInfo (
    '../Images/plato.png',
    'imagen de utensilios de madera',
    'Set de cocina',
    '$2900',
    'Juga a cocinar con este set artesanal',
    'Este juguete de alta calidad, fabricado por New Plast, está diseñado para estimular la imaginación y la creatividad de los más pequeños.'   
);

let product3= new productInfo (
    '../Images/mickey.png',
    'imagen de figura de Mickey',
    'Figura Mickey',
    '$4000',
    'Colecciona los personajes de Disney',
    'Coleccionable de Mickey, figura de madera de 10cm ideal para decorar el cuarto. No te olvides de coleccionar el resto de la coleccion.'   
);

let product4= new productInfo (
    '../Images/pista.png',
    'imagen de pista de tren',
    'Pista de tren',
    '$16000',
    'Pista de madrera con trencito',
    'Tracks es el unico sistema de vías de armado por encastre confeccionado 100% en MADERA, y compatible con TODAS las marcas del mundo del mismo sistema!1 Tren Magnético ** Modelos y colores Surtidos** Confeccionado en Madera MDF, Pintado a mano con pintura y laca no tóxica, todos hermsos y 100% Compatibles!'   
);

let product5= new productInfo (
    '../Images/plant.png',
    'imagen de Planta de mario Bros',
    'Figura Piraña',
    '$4300',
    'Colecciona los personajes de Mario Bros',
    'Coleccionable de Pirana Mario Bros, figura de madera de 10cm ideal para decorar el cuarto. No te olvides de coleccionar el resto de la coleccion de Mario Bros.'   
);

let product6= new productInfo (
    '../Images/tren.png',
    'imagen de tren y estacion',
    'Pista de tren',
    '$23500',
    'Pista con estacion de policia y bomberos',
    'Pista de Trenes de Madera con su tren. Son 48 Piezas y cuenta con 2 edificios, 6 arboles, 10 figuras humanas, 1 ambulancia, 4 señales de transito y 19 rieles. Mejora el desarrollo psicomotor y su capacidad de razonar'   
);


