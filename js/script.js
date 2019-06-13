// install plugin
Matter.use(
  'matter-attractors' // PLUGIN_NAME
);

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
var engine = Engine.create(document.body, {
  render: {
    options: {
      wireframes: false,
      showAngleIndicator: false,
      background: 'transparent',
      // background: '#F3E0D2',
      height: height,
      width: width
    }
  }
});

// create world
var world = engine.world;
world.gravity.x = 0;
world.gravity.y = 0;
world.bodies = [];

// add boundaries to prevent objects from going outside of the canvas
var offset = 10,
  options = {
      isStatic: true
  };
World.add(world, [
    Bodies.rectangle(width/2, -offset, width + 2 * offset, 20, options),
    Bodies.rectangle(width/2, height + offset, width + 2 * offset, 20, options),
    Bodies.rectangle(width + offset, height/2, 20, height + 2 * offset, options),
    Bodies.rectangle(-offset, height/2, 20, height + 2 * offset, options)
]);

// create a body with an attractor
var attractiveBody = Bodies.circle(width / 2, height / 2, 80, {
  render: {
    fillStyle: 'transparent'
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


// add some bodies to be attracted
var bodies = function () {
    return [
      Bodies.circle(width-400, 500, 250, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
    render: {
      sprite: {
        texture: Common.shuffle('img/1.png'),
        xScale: .4,yScale: .4
      }}}),
    Bodies.circle(1000, 200, 150, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/2.png',
          xScale: .8,yScale:.8
        }}}),
    Bodies.circle(200, height-200, 120, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/3.png',
          xScale: .5, yScale: .5
        }}}),
    Bodies.rectangle(200, 200, 400, 250, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/4.png',
          xScale: .6, yScale: .6
      }}}),
    Bodies.circle(width-200, height, 150, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/5.png',
          xScale: 1, yScale: 1
      }}}),
    Bodies.circle( width/4, height-400, 150, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/6.png',
          xScale: 1, yScale: 1
      }}}),
    Bodies.rectangle(width/2, height-200, 600, 100, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/7.png',
          xScale: .8, yScale: .8
      }}}),
    Bodies.rectangle(width/3, height/3, 150, 500, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/9.png',
          xScale: 1, yScale: 1
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


// color pallette
  // tan: #CCA379
  // orange: #F08E41
  // blue: #6492C9
  // magenta: #E4747A
  // purple: #C28C9F
