var arco;
var fundo;
var arco_Img;
var flecha_Img;
var fundo_Img;
var balaovermelho_Img;
var balaorosa_Img;
var balaoverde_Img;
var balaoazul_Img;
var grupodeflechas;
var grupodebalaovermelho;
var grupodebalaoverde;
var grupodebalaorosa;
var grupodebalaoazul;
var score =0;

function preload(){  
  fundo_Img = loadImage("background0.png");
  flecha_Img = loadImage("arrow0.png");
  arco_Img = loadImage("bow0.png");
  balaovermelho_Img = loadImage("red_balloon0.png");
  balaoverde_Img = loadImage("green_balloon0.png");
  balaorosa_Img = loadImage("pink_balloon0.png");
  balaoazul_Img= loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  // criar o fundo
  fundo = createSprite(0,0,400,400);
  fundo.addImage(fundo_Img);
  fundo.scale = 2.5;
  
  // criando arco para atirar a flecha
  arco= createSprite(380,220,20,50);
  arco.addImage(arco_Img); 
  arco.scale = 1;
  
  score = 0  
  grupodebalavermelho= new Group();
  grupodebalaoverde= new Group();
  grupodebalaoazul= new Group();
  grupodebalaorosa= new Group();
  grupodeflechas= new Group();  
}

function draw() {
 background(0);
 
  // movendo o fundo
  fundo.velocityX = -3;

  if (fundo.x < 0){
    fundo.x = fundo.width/2;
  }
  
  //movendo o arco
  arco.y = World.mouseY;
  
  // soltar a flecha quando a tecla de espaço for pressionada
  if (keyDown("space")) {
    criarFlecha();  
  }
  
  //criando inimigos contínuos
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      balaoAzul();
    } else if (select_balloon == 2) {
      balaoRosa();
    } else if (select_balloon == 3) {
      balaoVerde();
    } else {
      balaoVermelho();
    }
  }
  
  if (grupodeflechas.isTouching(grupodebalaovermelho)) {
    grupodebalavermelho.destroyEach();
    grupodeflechas.destroyEach();
    score=score+1;
  }

  if (grupodeflechas.isTouching(grupodebalaoverde)) {
    grupodebalaoverde.destroyEach();
    grupodeflechas.destroyEach();
    score=score+3;
  }

  if (grupodeflechas.isTouching(grupodebalaoazul)) {
    grupodebalaoazul.destroyEach();
    grupodeflechas.destroyEach();
    score=score+2;
  }

  if (grupodeflechas.isTouching(grupodebalaorosa)) {
    grupodebalaorosa.destroyEach();
    grupodeflechas.destroyEach();
    score=score+1;
  }
  
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}

function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(balaovermelho_Img);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  grupodebalaovermelho.add(vermelho);
}

function balaoAzul() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(balaoazul_Img);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
  grupodebalaoazul.add(azul);
}

function balaoVerde() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(balaoverde_Img);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
  grupodebalaoverde.add(verde);
}

function balaoRosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(balaorosa_Img);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1
  grupodebalaorosa.add(rosa);
}


// Criando flechas para o arco
function criarFlecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(flecha_Img);
  flecha.x = 360;
  flecha.y=bow.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  grupodeflechas.add(flecha);
   
}