
  var canvas = document.getElementById("summer");
  
world// install plugin
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

// create a Matter.js engine
var engine = Engine.create(canvas, {
  render: {
    options: {
      wireframes: false,
      showAngleIndicator: false,
      // background: 'transparent',
      background: '#F3E0D2',
      height: window.innerHeight,
      width: window.innerWidth
    }
  }
});

// create variables for 100% height/width
var height = window.innerHeight;
var width = window.innerWidth;


// create world
var world = engine.world;
world.gravity.x = 0;
world.gravity.y = 0;

var offset = 10,   options = {       isStatic: true   };
 World.add(world, [     Bodies.rectangle(width/2, -offset, width + 2 * offset, 20, options),   
  Bodies.rectangle(width/2, height + offset, width + 2 * offset, 20, options),   
    Bodies.rectangle(width + offset, height/2, 20, height + 2 * offset, options),    
     Bodies.rectangle(-offset, height/2, 20, height + 2 * offset, options) ]);

// prevent objects from going outside of the canvas
var offset = 10,
    options = {
        isStatic: true
    };

// add bodies to world
world.bodies = [];

// add boundaries to each side of the world


//add a mouse-controlled constraint
var mouseConstraint = MouseConstraint.create(engine, {
    constraint: {
      render: {
        visible: false,
      }
    }
});


mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel); mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
World.add(world, mouseConstraint);


// ===================================================



// create a body with an attractor
var attractiveBody = Bodies.circle(width / 2, height / 2, 50, {
  render: {
    // fillStyle: 'transparent'
  },
  isStatic:true,
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


// add some bodies that to be attracted
for (var i = 0; i < 1; i += 1) {
  // let randomScale = Common.random(1);
  
  var body = Bodies.circle(width-400, 500, 200, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1.5,
    friction: 0.01,
    
    render: {
        sprite: {
        texture: Common.shuffle('img/1.png'),
        xScale: .3, yScale: .3
      }}});
  var body2 = Bodies.circle(1000, 200, 150, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1.5,
    friction: 0.01,
    render: {
        sprite: {
        texture: 'img/2.png',
        xScale: .8,yScale: .8
      }}});

  // var body3 = Bodies.circle(200, height-200, 120, {
  //   density: .000008,
  //   frictionAir: 0.06,
  //   restitution: 0.3,
  //   friction: 0.01,
  //   render: {
  //       sprite: {
  //       texture: 'img/3.png',
  //       xScale: 1, yScale: 1
  //     }}});

  var body4 = Bodies.rectangle(200, 200, 400, 250, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1,
    friction: 0.01,
    render: {
        sprite: {
        texture: 'img/4.png',
        xScale: .6, yScale: .6
    }}});
  var body5 = Bodies.rectangle(width, height, 500, 100, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1,
    friction: 0.01,
    render: {
        sprite: {
        texture: 'img/5.png',
        xScale: 1, yScale: 1
    }}});
  var body6 = Bodies.circle( width/4, height-400, 150, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1,
    friction: 0.01,
    render: {
        sprite: {
        texture: 'img/6.png',
        xScale: 1, yScale: 1
    }}});
  var body7 = Bodies.rectangle(width/2, height-200, 600, 100, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1,
    friction: 0.01,
    render: {
        sprite: {
        texture: 'img/7.png',
        xScale: .8, yScale: .8
    }}});
  // var body8 = Bodies.rectangle(width-50, 200, 250, 100, {
  //   density: .000008,
  //   frictionAir: 0.06,
  //   restitution: 1.5,
  //   friction: 0.01,
  //   render: {
  //       sprite: {
  //       texture: 'img/8.png',
  //       xScale: 1.5, yScale: 1.5
  //   }}});
  var body9 = Bodies.rectangle(width/3, height/3, 100, 600, {
    density: .000008,
    frictionAir: 0.06,
    restitution: 1,
    friction: 0.01,
    render: {
        sprite: {
        texture: 'img/9.png',
        xScale: 1, yScale: 1
    }}});
    var body10 =Bodies.circle( width/4, height-400, 150, {
      density: .000008,
      frictionAir: 0.06,
      restitution: 1,
      friction: 0.01,
      render: {
          sprite: {
          texture: 'img/10.png',
          xScale: .7, yScale: .7
      }}});
  
  World.add(world, body);
  World.add(world, body2);
  // World.add(world, body3);
  World.add(world, body4);
  World.add(world, body5);
  World.add(world, body6);
  World.add(world, body7);
  // World.add(world, body8);
  World.add(world, body9);
  World.add(world, body10);
}

// add mouse control
var mouse = Mouse.create(engine.canvas);

Events.on(engine, 'afterUpdate', function() {
    if (!mouse.position.x) {
      return;
    }

    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.15,
        y: (mouse.position.y - attractiveBody.position.y) * 0.15
    });
});




// ===================================================

// create objects
// var pig = Composites.stack(100, 50, 3, 5, 60, 10, function(x, y, column, row) {
//   return Bodies.rectangle(Common.random(0,width), Common.random(300,height), 65, 120, {
//     density: 0.6,
//     friction: Common.random(0.05, .1),
//     // frictionAir: Common.random(0.05, .1),
//     restitution: 0.3,
//       render: {
//         sprite: {
//           texture: 'img/Pig.png',
//           xScale: 1,
//           yScale: 1
//         }
//       }
//     });});
// var sharky = Composites.stack(100, 50, 3, 5, 60, 10, function(x, y, column, row) {
//   return Bodies.rectangle(Common.random(0,width), Common.random(400,height), 65, 120, {
//     density: 0.1,
//     friction: Common.random(0.05, .1),
//     restitution: 0.3,
//       render: {
//         sprite: {
//           texture: 'img/Sharky.png',
//           xScale: 1,
//           yScale: 1
//         }
//       }
//     });});
// var uni = Composites.stack(100, 50, 5, 3, 60, 10, function(x, y, column, row) {
//   return Bodies.rectangle(Common.random(0,width), Common.random(500,height), 60, 120, {
//     density: 0.2,
//     friction: Common.random(0.05, .1),
//     restitution: 0.3,
//       render: {
//         sprite: {
//           texture: 'img/Unicorn.png',
//           xScale: 1,
//           yScale: 1
//         }
//       }
//       });});

// add all of the bodies to the world
  // World.add(world, pig);
  // World.add(world, sharky);
  // World.add(world, uni);

// run the engine
Engine.run(engine);



// color pallette
  // tan: #CCA379
  // orange: #F08E41
  // blue: #6492C9
  // magenta: #E4747A
  // purple: #C28C9F

  var mouse = Matter.Mouse.create(
    canvas,
    {
      enabledEvents: {
        mousewheel: false,
      }
    }
  );
