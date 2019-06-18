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
    height = window.innerHeight,
    width = window.innerWidth;
    Vertices = Matter.Vertices
 

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
    fillStyle: 'transparent'
    // '#718FC6'
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

<<<<<<< Updated upstream
// randomize starting starting X & Y positions
let randomX = Common.random(width/4, width),
    randomY = Common.random(0, height-height/3);




// var vert = Matter.Vertices.fromPath("x1 y1 x2 y2 .....")

// var vert = Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38');
=======
// variable for x,y starting points
var random = Common.random(width/2, height/2);


// vertices for bodies outlines
var cherries = Matter.Vertices.fromPath ("4616.4995855403 620.789260240512 4619.77489950109 646.600670033212 4644.67545623444 746.913300300112 4711.0987893792 771.35461044936 4844.80883764334 772.233596194289 4920.06568263084 770.267819967022 4944.62993520164 685.060396816138 4871.72654481696 650.351991357159 4873.48468080797 624.045067621935 4757.65025918933 540.760691578213");
var gianni = Matter.Vertices.fromPath ("3563.23406131372 323.395874406731 3412.07157521185 472.109667120872 3341.00188256514 365.446426910188 3362.58330283881 442.900423652578 3273.98252166077 535.487398407415 3277.5973591742 594.952941196426 3314.95549183317 685.132493689035 3371.23444819726 735.550996745779 3488.51872737386 747.829956054688 3515.61637890381 698.47278190182 3496.37923205022 532.350049268642 3600.72648648791 470.636846537176 3612.18716757355 375.83079256605");
var baby = Matter.Vertices.fromPath ("1591.96137000232 533.876984518805 1626.7728470476 595.819654226331 1678.95878840338 644.853505084664 1710.77267778605 654.062788853331 1770.40046461146 651.830235212443 1825.65616722347 626.34191447896 1800.54463045967 579.706208401159 1879.84040137213 584.208264718947 1890.58626894599 566.435058448435 1896.96137000232 527.9235081431 1865.28399434925 492.760788299096 1807.05155354939 505.597971734212 1783.88880952517 461.784106531764 1751.23771252717 456.481791634649 1745.84237456168 486.993358060132 1647.98210663605 512.295632656878"); 
var flower = Matter.Vertices.fromPath ("216.171038279227 659.830219092293 285.008108873305 725.690551498519 362.403301757457 731.2327508067 443.718421646645 689.596673800444 457.708279642755 658.736316661942 429.665982367047 577.53236832915 381.752099978496 528.853738826805 287.984847061157 535.17930747599 212.450115544412 605.876839437476 204.636177801301 629.232750806699");
var newyork = Matter.Vertices.fromPath ("2336.23238400237 731.749466490288 2316.60097759101 669.982149092359 2336.23238400237 623.470614907172 2399.86016276771 605.238093506578 2537.37727250772 598.109413232176 2602.64458285469 633.969806086026 2743.35545275986 587.156482652305 2820.77668084735 630.30108226683 2854.37087482536 565.703289449169 2882.46384147321 576.586988448501 2919.69814435195 615.954552276913 2862.17894361265 736.667273555268 2796.51052759191 750.595874100934 2742.62474627543 697.157641270062 2613.23798724467 726.756743285509 2595.19051757864 687.206770721821 2491.85330676062 699.016745266668 2415.48803825392 681.517009570285 2400.23225504118 710.912299175325");
var vase = Matter.Vertices.fromPath ("4118.86570005289 746.938760161759 4180.07002767767 747.830041770669 4239.60479143471 636.202359726218 4161.79114391821 573.322650736086 4173.90544179129 479.906205552565 4105.28914908676 297.059631581602 4148.72125363685 248.575233826865 4018.40460298168 264.203109313088 4046.81949204679 348.587109770631 4087.04695930729 386.156351946649 4126.39571722796 473.784082351542 4122.33150225766 575.762057267573 4049.40810560962 646.828824220176");
var pretzel = Matter.Vertices.fromPath ("818.163766008801 511.737494246656 821.379121096889 495.551480350212 959.239308421786 460.503470237712 1035.70427062223 486.621265786654 1108.18430738303 467.832056020374 1168.7613563293 461.518626872943 1267.05264165936 490.922013594825 1246.44519625327 588.622880903557 1214.48862730245 641.004213017097 1166.30865861424 695.200671736171 1185.47141069854 727.546203613281 1150.1226447178 737.786010742188 1128.91338512935 721.188659667969 1084.63440458505 734.992858335555 1018.02988763186 734.248673788592 969.392578436213 721.188659667969 927.239372902378 731.851760674095 911.524999764829 708.138469596096 931.320084288158 692.273094780578 881.74620150939 642.760512132692 845.960406317672 571.720813519234");
>>>>>>> Stashed changes

// main bodies
var bodies = function () {
  return [
<<<<<<< Updated upstream
    Bodies.circle(randomX, randomY, 120, {
=======
    Bodies.fromVertices(random, random, baby, {
      density: .000008,
      frictionAir: 0.0006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/baby.png',
          xScale: .5, yScale: .5
        }}}),
    Bodies.fromVertices(random, random, cherries, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.006,  
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cherries.png',
          xScale: .7,yScale:.7
        }}}),
<<<<<<< Updated upstream
    Bodies.polygon(Common.random(width/2, width), Common.random(0, height/2), 3, 200, {
=======
    Bodies.fromVertices(random, random, gianni, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.0003,
      friction: 0.0001,
      render: {
        sprite: {
          texture: ('img/gianni.svg'),
          xScale: .8, yScale: .8
      }}}),
<<<<<<< Updated upstream
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
=======
    Bodies.fromVertices(random, random, flower, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/flower.png',
          xScale: .8, yScale: .8
      }}}),
<<<<<<< Updated upstream
    Bodies.rectangle(randomX, randomY, 600, 100, {
=======
    Bodies.fromVertices(random, random, newyork, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/newyork.png',
          xScale: .8, yScale: .8
      }}}),
<<<<<<< Updated upstream
    Bodies.circle(randomX, randomY, 150, {
=======
    Bodies.circle(random, random, 120, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: 'img/cactus.png',
          xScale: 1, yScale: 1
      }}}),
<<<<<<< Updated upstream
    Bodies.rectangle(randomY, randomY, 200, 450, {
=======
    Bodies.fromVertices(random, random, vase, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.006,
      restitution: 0.3,
      friction: 0.01,
      xScale: .5, yScale: .5,
      render: {
        sprite: {
          texture: 'img/vase.png',
          xScale: .7, yScale: .7
      }}}),
<<<<<<< Updated upstream
    Bodies.rectangle(randomY, randomY, 400, 250, {
=======
   Bodies.fromVertices(random, random, pretzel, {
>>>>>>> Stashed changes
      density: .000008,
      frictionAir: 0.0006,
      restitution: 0.3,
      friction: 0.01,
      xScale: .4, yScale: .4,
      render: {
        sprite: {
          texture: 'img/pretzel.png',
          xScale: .4, yScale: .4
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
          visible: false,
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
