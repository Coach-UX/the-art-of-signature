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
let randomX = Common.random(0, width+width/2),
    randomY = Common.random(-height/2,height+height/4);

var cherries = Matter.Vertices.fromPath ("4616.4995855403 1596.41520130901 4619.77489950109 1622.22661110171 4644.67545623444 1722.53924136861 4711.0987893792 1746.98055151786 4844.80883764334 1747.85953726279 4920.06568263084 1745.89376103552 4944.62993520164 1660.68633788464 4873.48468080797 1599.67100869043 4757.65025918933 1516.38663264671");

var gianni = Matter.Vertices.fromPath ("3549.91467065359 1182.29945418352 3332.81592096029 1228.38721297203 3264.69187397312 1393.53572020492 3268.30671148656 1453.00126299393 3311.23456909836 1559.36329023383 3402.76926837481 1601.78180941072 3490.95513718993 1593.0376409839 3592.10956745026 1326.9174735603 3601.26201842099 1232.28787382803");

var baby = Matter.Vertices.fromPath ("1591.96137000232 1645.68869768153 1626.7728470476 1707.63136738906 1678.95878840338 1756.66521824739 1710.77267778605 1765.87450201606 1770.40046461146 1763.64194837517 1825.65616722347 1738.15362764169 1879.84040137213 1696.01997788168 1890.58626894599 1678.24677161116 1896.96137000232 1639.73522130583 1865.28399434925 1604.57250146182 1770.02837233798 1568.10745866064");

var flower = Matter.Vertices.fromPath ("216.171038279227 659.830219092293 285.008108873305 725.690551498519 362.403301757457 731.2327508067 443.718421646645 689.596673800444 457.708279642755 658.736316661942 429.665982367047 577.53236832915 381.752099978496 528.853738826805 287.984847061157 535.17930747599 212.450115544412 605.876839437476 204.636177801301 629.232750806699");

var newyork = Matter.Vertices.fromPath ("2335.36965523162 1770.59295391171 2316.60097759101 1711.54009667141 2341.27570260325 1653.07972640619 2869.18894820234 1608.15382198506 2919.69814435195 1648.10729745916 2865.76135773534 1777.46537312648 2794.77049350604 1783.54888500643");

var vase = Matter.Vertices.fromPath ("4125.00622990578 1788.93672227311 4181.93794805597 1789.5264022317 4235.37556816755 1684.97337460071 4126.73972107391 1290.48093485925 4031.79125669529 1306.52659040315 4057.84442598712 1694.71805701443");

var pretzel = Matter.Vertices.fromPath ("818.030290635556 1608.47947033338 801.419613702133 1572.20047366894 806.867522431111 1546.52610679871 914.030097193782 1519.17732469782 1139.50239271667 1515.88736820749 1250.30848935269 1545.28976349746 1236.44805216551 1625.03757650331 1157.56449018743 1790.2465459291 1032.54148629764 1790.2465459291 904.957268556432 1782.01824722363");


// main bodies
var bodies = function () {
  return [
    Bodies.fromVertices(randomX, randomY, cherries, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cherries.png',
          xScale: .7,yScale:.7
        }}}),
    Bodies.fromVertices(randomX, randomY, gianni, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.0003,
      friction: 0.0001,
      render: {
        sprite: {
          texture: ('img/gianni.png'),
          xScale: .8,yScale: .8
      }}}),
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
    Bodies.fromVertices(randomX, randomY, flower, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/flower.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.fromVertices(randomX, randomY, newyork, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/newyork.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.circle(randomX, randomY, 120, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cactus.png',
          xScale: 1, yScale: 1
      }}}),
    Bodies.fromVertices(randomX, randomY, vase, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/vase.png',
          xScale: 1, yScale: 1
      }}}),
   Bodies.fromVertices(randomX, randomY, pretzel, {
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
