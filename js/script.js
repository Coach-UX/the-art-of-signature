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

var cherries = Matter.Vertices.fromPath ("4632.90610302337 1606.48993231831 4635.85388558808 1629.72020113174 4658.26438664809 1720.00156837195 4718.04538647838 1741.99874750627 4838.3844299161 1742.78983467671 4906.11559040485 1741.02063607217 4928.22341771857 1664.33395523638 4864.19268876427 1609.42015896159 4759.94170930749 1534.46422052224");

var gianni = Matter.Vertices.fromPath ("3538.29609095524 1364.29650510674 3342.90721623127 1405.7754880164 3281.59557394281 1554.409144526 3284.84892770491 1607.92813303611 3323.48399955553 1703.65395755202 3405.86522890434 1741.83062481122 3485.23251083794 1733.96087322708 3576.27149807224 1494.45272254584 3584.5087039459 1409.2860827868");

var baby = Matter.Vertices.fromPath ("1591.96137000232 1645.68869768153 1626.7728470476 1707.63136738906 1678.95878840338 1756.66521824739 1710.77267778605 1765.87450201606 1770.40046461146 1763.64194837517 1825.65616722347 1738.15362764169 1879.84040137213 1696.01997788168 1890.58626894599 1678.24677161116 1896.96137000232 1639.73522130583 1865.28399434925 1604.57250146182 1770.02837233798 1568.10745866064");

var flower = Matter.Vertices.fromPath ("239.171276367787 1700.46430275347 294.240932843049 1753.15256867845 356.157087150372 1757.586328125 421.209183061721 1724.27746651999 432.401069458609 1699.58918080919 409.967231638043 1634.62602214296 371.636125727202 1595.68311854108 296.622323393331 1600.74357346043 236.194538179935 1657.30159902962 229.943387985446 1675.986328125");

var newyork = Matter.Vertices.fromPath ("2391.92563637959 1732.33763366632 2376.9106942671 1685.09534787408 2396.6504742769 1638.3270516619 2818.98107075617 1602.386328125 2859.38842767586 1634.34910850428 2816.23899838257 1737.83556903813 2759.44630699913 1742.7023785421");

var vase = Matter.Vertices.fromPath ("4125.83922083426 1739.14768103045 4171.38459535441 1739.61942499732 4214.13469144367 1655.97700289253 4127.22601376876 1340.38305109936 4051.26724226587 1353.21957553448 4072.10977769933 1663.77274882351");

var pretzel = Matter.Vertices.fromPath ("859.64815524887 2059.11996149872 846.359613702132 2030.09676416717 850.717940685315 2009.55727067099 936.448000495452 1987.67824499028 1116.82583691376 1985.04627979801 1205.47071422258 2008.56819602999 1194.38236447283 2072.36644643467 1131.27551489037 2204.5336219753 1031.25711177854 2204.5336219753 929.189737585571 2197.95098301092");


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
          texture: 'img/cherries.png'
        }}}),
    Bodies.fromVertices(randomX, randomY, gianni, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.0003,
      friction: 0.0001,
      render: {
        sprite: {
          texture: ('img/gianni.png')
        }}}),
    Bodies.fromVertices(randomX, randomY, baby, {
      density: .000008,
      frictionAir: 0.0006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/baby.png'
        }}}),
    Bodies.fromVertices(randomX, randomY, flower, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/flower.png'
      }}}),
    Bodies.fromVertices(randomX, randomY, newyork, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/newyork.png'
      }}}),
    Bodies.circle(randomX, randomY, 96, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cactus.png'
      }}}),
    Bodies.fromVertices(randomX, randomY, vase, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/vase.png'
      }}}),
    Bodies.fromVertices(randomX, randomY, pretzel, {
       density: .000008,
       frictionAir: 0.0006,
       restitution: 0.3,
       friction: 0.01,
       render: {
         sprite: {
           texture: 'img/pretzel.png'
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

// add more bodies and cycle through background images on every mouse click
var backgrounds = ["tyler","pink","gianni","blue","culver","red"];
var i = 0;

  // get next item in backgrounds array
  function nextItem() {
      i = i + 1;
      i = i % backgrounds.length;
      return backgrounds[i];
  };

Events.on(mouseConstraint, "mouseup", function(event) {
  World.add(world, bodies());
  document.getElementById('canvas').className = 'section ' + nextItem();
});

// run the engine
Engine.run(engine);









// ARCHIVED SNIPPETS
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
