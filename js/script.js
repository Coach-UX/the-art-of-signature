var canvas = document.getElementById('canvas');

// install plugin
Matter.use(
  'matter-attractors'
);

// variables
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events,
    Render = Matter.Render,
    Mouse = Matter.Mouse,
    Vertices = Matter.Vertices,
    height = window.innerHeight,
    width = window.innerWidth;

// create engine
var engine = Engine.create();

// create renderer
var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
        wireframes: false,
        showAngleIndicator: false,
        background: 'transparent',
        height: height,
        width: width
    }
});
Render.run(render);

// create world
var world = engine.world;
world.gravity.x = 0;
world.gravity.y = 0.01;
world.bodies = [];

// create a body with an attractor
var attractiveBody = Bodies.circle(width / 2, height / 2, 70, {
  render: {
    fillStyle: '#718FC6'
  },
  isStatic: true,

  plugin: {
    attractors: [
      function(bodyA, bodyB) {
        return {
          x: (bodyA.position.x - bodyB.position.x) * 1e-6,
          y: (bodyA.position.y - bodyB.position.y) * 1e-6,
        };
      }
    ]
  }
});
World.add(world, attractiveBody);

// randomize starting starting X & Y positions
let randomX = Common.random(width/4, width),
    randomX_2 = Common.random(0, width/4),
    randomY = Common.random(height/2, height),
    randomY_2 = Common.random(0, height/2);

var cherries = Matter.Vertices.fromPath ("4616.49958526581 609.684050608427 4619.65532685112 636.876036286832 4627.80145466159 637.423529595965 4645.18746614452 737.832629594167 4711.09878910472 760.249400817275 4831.15918443114 750.334929974798 4847.32461898023 761.062677083418 4917.29874686916 759.234885359117 4928.44061271734 732.202166284446 4892.440685258 695.644100414888 4940.94500971941 696.028062655242 4914.76831827827 657.739767715172 4871.72654454247 639.246781725074 4873.48468053349 612.939857989851 4780.44091094007 582.435026208142 4800.16024368376 563.586957259394 4757.37118998422 524.31778751407 4753.80120076558 555.377183287636");

var gianni = Matter.Vertices.fromPath ("3520.81554213682 323.395874406731 3442.3970955006 388.66797479265 3369.65305603496 472.109667120872 3298.58336338825 365.446426910188 3306.02527726962 446.43530025065 3302.58342373992 489.970096247987 3253.18817443525 509.784009810877 3231.56400248388 535.487398407415 3235.1788399973 594.952941196426 3259.88583535791 624.20238390644 3264.07187343458 666.095825195312 3278.86254130547 695.923169619999 3328.81592902036 735.550996745779 3421.60643971981 751.039337629448 3472.53656965259 709.039422260224 3454.67614052548 538.528137937326 3565.74633964563 469.602035813623 3497.76336713179 480.766121666287 3467.7923931657 494.714272734878 3457.46683257659 463.458521762434 3473.09470806281 443.923677404655 3569.76864839665 375.83079256605 3468.44677927987 423.770405559655 3456.64816116516 409.204478264517");

var baby = Matter.Vertices.fromPath ("1517.65164252622 1087.50933199844 1473.27963891466 1112.06742205021 1452.90758694167 1114.85811410224 1432.16344269494 1111.78835284694 1406.11698355148 1117.36973695034 1372.62867893778 1109.18370693525 1343.60548160491 1079.78841733151 1318.30320700736 1061.92798820554 1306.27860988477 1038.94764704043 1284.81490239115 997.928117168222 1284.81490239092 992.718825339481 1303.88423227358 997.351449446392 1317.00088404768 1006.30019332011 1337.62024119008 975.60013447497 1361.8380030009 977.463042123282 1373.744955752 970.393288926599 1405.37792564397 971.95777204712 1419.70347817228 955.678735081658 1439.41750932419 949.928213882165 1439.3778571316 933.074129466774 1447.74993328453 924.004380300286 1458.63363228371 920.743013897467 1471.05221191133 924.562518709463 1480.74986678937 934.050871682805 1481.84288784326 946.097359036721 1478.3777785467 951.353162399801 1498.12367837267 967.993549828239 1526.30278787898 960.8119128776 1537.18648687845 963.881674133335 1559.88924220645 955.957804280477 1588.40081266356 991.469360629587 1583.37756697334 1031.09718775559 1570.30402354273 1046.5412067241 1546.73273163025 1034.16945541244 1518.68002292236 1044.70181150767 1508.54050846995 1043.95762696116 1495.05216355687 1057.91108721732");

var flower = Matter.Vertices.fromPath ("216.171038279227 659.830219092293 285.008108873305 725.690551498519 362.403301757457 731.2327508067 443.718421646645 689.596673800444 457.708279642755 658.736316661942 429.665982367047 577.53236832915 381.752099978496 528.853738826805 287.984847061157 535.17930747599 212.450115544412 605.876839437476 204.636177801301 629.232750806699");

var newyork = Matter.Vertices.fromPath ("2336.23238400237 731.749466490288 2316.60097759101 669.982149092359 2336.23238400237 623.470614907172 2399.86016276771 605.238093506578 2537.37727250772 598.109413232176 2602.64458285469 633.969806086026 2743.35545275986 587.156482652305 2820.77668084735 630.30108226683 2854.37087482536 565.703289449169 2882.46384147321 576.586988448501 2919.69814435195 615.954552276913 2862.17894361265 736.667273555268 2796.51052759191 750.595874100934 2742.62474627543 697.157641270062 2613.23798724467 726.756743285509 2595.19051757864 687.206770721821 2491.85330676062 699.016745266668 2415.48803825392 681.517009570285 2400.23225504118 710.912299175325");

var vase = Matter.Vertices.fromPath ("999.983412379068 -24.6819904098938 1059.70422227302 -20.9363277064731 1118.86689375165 -130.728288357461 1044.57354727065 -198.222503343417 1052.68547740227 -297.728849156229 1026.21591764739 -294.820980958642 1005.76812339805 -432.681168282621 972.634630257906 -476.215964278468 1024.54150240657 -520.936327704894 897.768123394895 -503.006607965775 925.751003801566 -424.309092125693 969.843938207345 -463.936919253454 1005.76812340154 -355.099929261727 967.053246159918 -381.890572950659 1002.21596600815 -287.565181624675 1002.73837830391 -197.711179914237 935.23935678855 -130.170149938993 958.681170020514 -71.565616866710");

var pretzel = Matter.Vertices.fromPath ("825.072663347035 475.589092632239 883.611553836671 484.946850555989 912.913820373339 455.36551481421 955.611408755341 445.039954225098 1023.98336400757 468.481767454434 1058.15043706354 491.585387061989 1102.40181064379 452.853891968211 1169.09935066535 446.156231045543 1215.13670354251 480.666927335094 1251.42476617313 471.551528710655 1267.05264165936 475.458497582211 1246.44519625327 573.159364890942 1214.48862730245 625.540697004482 1166.30865861424 679.737155723556 1183.22707145945 715.453804729324 1155.32052870634 721.188781738281 1125.7657436997 706.789705160068 1095.70414972113 717.969636823779 1046.61673016968 722.126632315921 970.960215036454 707.591186523438 927.239372902378 716.388244661482 913.970810456593 696.365726827603 931.320084288158 676.809578767963 884.076669178524 631.923298581181 818.163766008798 496.481711033914");


// main bodies
var bodies = function () {
  return [
    Bodies.fromVertices(randomX, randomY, baby, {
      density: .000008,
      frictionAir: 0.0006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/baby.png',
          xScale: .5, yScale: .5
        }}}),
    Bodies.fromVertices(randomX*2, randomY, cherries, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cherries.png',
          xScale: .7,yScale:.7
        }}}),
    Bodies.fromVertices(Common.random(width/2, width), Common.random(0, height), gianni, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.0003,
      friction: 0.0001,
      render: {
        sprite: {
          texture: ('img/gianni.png'),
          xScale: .8,yScale: .8
      }}}),
    Bodies.fromVertices(randomX, randomY+200, flower, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/flower.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.fromVertices(randomX, randomY_2, newyork, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/newyork.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.circle(randomX, randomY_2, 120, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cactus.png',
          xScale: 1, yScale: 1
      }}}),
    Bodies.fromVertices(randomX_2, randomY_2, vase, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/vase.png',
          xScale: 1, yScale: 1
      }}}),
   Bodies.fromVertices(randomX_2, randomY, pretzel, {
      density: .000008,
      frictionAir: 0.0006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/pretzel.png',
          xScale: .6, yScale: .6
      }}})
  ]
};
World.add(world, bodies());


// add mouse control
var mouse = Mouse.create(render.canvas);

// allow page scrolling while on the canvas
mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

// smoothly move the attractor body towards the mouse
Events.on(engine, 'afterUpdate', function() {
    if (!mouse.position.x) {
      return;
    }
  Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.25,
      y: (mouse.position.y - attractiveBody.position.y) * 0.25
  });
});

// add mouse constraint
var mouseConstraint = MouseConstraint.create(engine, { 
  mouse: mouse,
  constraint: {
      render: {
          visible: false
      }
  }
 });
World.add(world, mouseConstraint);

// add more objects on mouse click
Events.on(mouseConstraint, "mouseup", function(event) {
  World.add(world, bodies());
});

// run the engine
Engine.run(engine);









// ARCHIVED SNIPPETS
// alt scrolling fix
      // var mouse = Matter.Mouse.create(canvas,  {
      //     enabledEvents: {
      //       mousewheel: false,
      //     }
      //   }
      // );
 // add boundaries to prevent objects from going outside of the canvas
      // var offset = 10,
      //   options = {
      //       isStatic: true
      //   };
      // World.add(world, [
      //     Bodies.rectangle(width/2, -offset, width + 2 * offset, 20, options),
      //     Bodies.rectangle(width/2, height + offset, width + 2 * offset, 20, options),
      //     Bodies.rectangle(width + offset, height/2, 20, height + 2 * offset, options),
      //     Bodies.rectangle(-offset, height/2, 20, height + 2 * offset, options)
      // ]);

 // gyroscope
      // var gyroscope = function(event) {
      //     var orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
      //         gravity = engine.world.gravity;
      //
      //     if (orientation === 0) {
      //         gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
      //         gravity.y = Common.clamp(event.beta, -90, 90) / 90;
      //     }
      //     else {
      //
      //     }
      // };
      // window.addEventListener('devicemotion', gyroscope);
 // color pallette
      // cream: #F3E0D2
      // tan: #CCA379
      // orange: #F08E41
      // blue: #6492C9
      // magenta: #E4747A
      // purple: #C28C9F
