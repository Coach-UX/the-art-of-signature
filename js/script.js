// install plugin
Matter.use(
  'matter-attractors' // PLUGIN_NAME
);

var canvas = document.getElementById('canvas');

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events,
    Render = Matter.Render,
    Mouse = Matter.Mouse;

// create variables for 100% height/width
var height = window.innerHeight;
var width = window.innerWidth;

// create a Matter.js engine
var engine = Engine.create(canvas, {
  render: {
    options: {
      wireframes: false,
      showAngleIndicator: false,
      background: 'transparent',
      height: height,
      width: width
    }
  }
});

// create world
var world = engine.world;
world.gravity.x = 0;
world.gravity.y = 0.01;
world.bodies = [];

// create a body with an attractor
var attractiveBody = Bodies.circle(width / 2, height / 2, 80, {
  render: {
    fillStyle: '#F3E0D2'
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
let randomX = Common.random(width/4, width);
let randomY = Common.random(0, height-height/3);

// main bodies
var bodies = function () {
    return [
    Bodies.polygon(Common.random(width/2, width), Common.random(0, height/2), 3, 200, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.0003,
      friction: 0.0001,
      render: {
        sprite: {
          texture: Common.shuffle('img/gianni.svg'),
          xScale: .8,yScale: .8
      }}}),
    Bodies.circle(randomX, randomY, 120, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cherries.png',
          xScale: .7,yScale:.7
        }}}),
    Bodies.rectangle(randomX, randomY, 220, 150, {
      density: .000008,
      frictionAir: 0.0006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/baby.png',
          xScale: .5, yScale: .5
        }}}),
    Bodies.circle(randomX, height-500, 120, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/flower.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.rectangle(randomX, randomY, 600, 100, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/newyork.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.circle(randomX, randomY, 150, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cactus.png',
          xScale: 1, yScale: 1
      }}}),
    Bodies.rectangle(randomX, randomY, 150, 500, {
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/vase.png',
          xScale: 1, yScale: 1
      }}}),
    Bodies.rectangle(randomY, randomY, 400, 250, {
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

//add a mouse-controlled constraint
var mouseConstraint = MouseConstraint.create(engine, { 
    constraint: { 
      render: { 
        visible: false 
      } 
    }
 });
mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

World.add(world, mouseConstraint);

// add mouse control
var mouse = Mouse.create(engine.canvas);

Events.on(engine, 'afterUpdate', function() {
    if (!mouse.position.x) {
      return;
    }

    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.25,
        y: (mouse.position.y - attractiveBody.position.y) * 0.25
    });
});

// multiply bodies on mouse click
Events.on(mouseConstraint, "mouseup", function(event) {
  World.add(world, bodies());
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
