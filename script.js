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
    width = window.innerWidth,
    mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    cursor = 'img/cursor-desktop.svg',
    cursorRadius = 110;

// change cursor image on mobile devices
if(mobileDevice) {
   var cursor = 'img/cursor-mobile.50.svg';
   var cursorRadius = 55;
};

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
var attractiveBody = Bodies.circle(width / 2, height / 2, cursorRadius, {
  render: {
    sprite: {
      texture: cursor
    }
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

// responsive varibles for bodies
if(mobileDevice) { // mobile
  var flower = Matter.Vertices.fromPath ("1409.1273396099 373.839920516008 1436.66216784753 400.184053478497 1467.62024500119 402.40093320177 1500.14629295686  385.746502399268 1505.74223615531 373.402359543867 1494.52531724502 340.92078021075 1475.35976428961 321.449328409812 1437.85286312267 323.979555869486 1407.63897051597 352.258568654081 1404.51339541873 361.600933201769"),
      pretzel = Matter.Vertices.fromPath ("1719.36577905044 339.91607084301 1712.72150827707 325.404472177235 1714.90067176866 315.134725429143 1757.76570167373 304.195212588787 1847.95461988288 302.879229992655 1892.27705853729 314.640188108642 1886.73288366242 346.539313310983 1855.17945887119 412.6229010813 1805.17025731527 412.6229010813 1754.13657021879 409.331581599112"),
      cherries = Matter.Vertices.fromPath ("3605.99475293769 326.852735298424 3607.46864422004 338.46786970514 3618.67389475005 383.608553325244 3648.56439466519 394.607142892408 3708.73391638405 395.002686477626 3742.59949662843 394.118087175353 3753.65341028529 355.774746757459 3721.63804580814 328.317848620063 3669.51255607975 290.83987940039"),
      gianni = Matter.Vertices.fromPath ("3058.68974690362 205.756021692639 2960.99530954164 226.495513147469 2930.33948839741 300.812341402268 2931.96616527846 327.571835657323 2951.28370120377 375.434747915278 2992.47431587817 394.523081544879 3032.15795684497 390.588205752811 3077.67745046212 270.83413041219 3081.79605339895 228.250810532669"),
      baby = Matter.Vertices.fromPath ("2085.52238642716 346.452117980036 2102.9281249498 377.4234528338 2129.02109562769 401.940378262965 2144.92804031903 406.545020147301 2174.74193373173 405.428743326855 2202.36978503774 392.684582960115 2229.46190211207 371.61775808011 2234.834835899 362.731154944851 2238.02238642716 343.475379792186 2222.18369860063 325.89401987018 2174.55588759499 307.661498469592"),
      newyork = Matter.Vertices.fromPath ("2485.5045196158 389.776585972431 2477.99704855955 366.15544307631 2487.86693856445 342.771294970222 2699.03223680409 324.80093320177 2719.23591526393 340.78232339141 2697.66120061729 392.525553658339 2669.26485492557 394.958958410318"),
      vase = Matter.Vertices.fromPath ("3352.46131184313 393.181609654495 3375.23399910321 393.417481637931 3396.60904714784 351.596270585535 3353.15470831038 193.799294688952 3315.17532255894 200.217556906511 3325.59659027567 355.494143551023"),
      cactus = 48,
      density = .000018,
      frictionAir = 0.005,
      restitution = 0.1,
      friction = 0.005,
      cherriesImg = 'img/cherries.50.png',
      gianniImg = 'img/gianni.50.png',
      babyImg = 'img/baby.50.png',
      flowerImg = 'img/flower.50.png',
      newyorkImg = 'img/newyork.50.png',
      cactusImg = 'img/cactus.50.png',
      vaseImg = 'img/vase.50.png',
      pretzelImg = 'img/pretzel.50.png';
}
else { // desktop
  var cherries = Matter.Vertices.fromPath ("4632.90610302337 1606.48993231831 4635.85388558808 1629.72020113174 4658.26438664809 1720.00156837195 4718.04538647838 1741.99874750627 4838.3844299161 1742.78983467671 4906.11559040485 1741.02063607217 4928.22341771857 1664.33395523638 4864.19268876427 1609.42015896159 4759.94170930749 1534.46422052224"),
    gianni = Matter.Vertices.fromPath ("3538.29609095524 1364.29650510674 3342.90721623127 1405.7754880164 3281.59557394281 1554.409144526 3284.84892770491 1607.92813303611 3323.48399955553 1703.65395755202 3405.86522890434 1741.83062481122 3485.23251083794 1733.96087322708 3576.27149807224 1494.45272254584 3584.5087039459 1409.2860827868"),
    baby = Matter.Vertices.fromPath ("1591.96137000232 1645.68869768153 1626.7728470476 1707.63136738906 1678.95878840338 1756.66521824739 1710.77267778605 1765.87450201606 1770.40046461146 1763.64194837517 1825.65616722347 1738.15362764169 1879.84040137213 1696.01997788168 1890.58626894599 1678.24677161116 1896.96137000232 1639.73522130583 1865.28399434925 1604.57250146182 1770.02837233798 1568.10745866064"),
    flower = Matter.Vertices.fromPath ("239.171276367787 1700.46430275347 294.240932843049 1753.15256867845 356.157087150372 1757.586328125 421.209183061721 1724.27746651999 432.401069458609 1699.58918080919 409.967231638043 1634.62602214296 371.636125727202 1595.68311854108 296.622323393331 1600.74357346043 236.194538179935 1657.30159902962 229.943387985446 1675.986328125"),
    newyork = Matter.Vertices.fromPath ("2391.92563637959 1732.33763366632 2376.9106942671 1685.09534787408 2396.6504742769 1638.3270516619 2818.98107075617 1602.386328125 2859.38842767586 1634.34910850428 2816.23899838257 1737.83556903813 2759.44630699913 1742.7023785421"),
    vase = Matter.Vertices.fromPath ("4125.83922083426 1739.14768103045 4171.38459535441 1739.61942499732 4214.13469144367 1655.97700289253 4127.22601376876 1340.38305109936 4051.26724226587 1353.21957553448 4072.10977769933 1663.77274882351"),
    pretzel = Matter.Vertices.fromPath ("859.64815524887 2059.11996149872 846.359613702132 2030.09676416717 850.717940685315 2009.55727067099 936.448000495452 1987.67824499028 1116.82583691376 1985.04627979801 1205.47071422258 2008.56819602999 1194.38236447283 2072.36644643467 1131.27551489037 2204.5336219753 1031.25711177854 2204.5336219753 929.189737585571 2197.95098301092"),
    cactus = 96,
    density = .000008,
    frictionAir = 0.006,
    restitution = 0.3,
    friction = 0.006,
    cherriesImg = 'img/cherries.png',
    gianniImg = 'img/gianni.png',
    babyImg = 'img/baby.png',
    flowerImg = 'img/flower.png',
    newyorkImg = 'img/newyork.png',
    cactusImg = 'img/cactus.png',
    vaseImg = 'img/vase.png',
    pretzelImg = 'img/pretzel.png';
}

// create bodies
var bodies = function () {
  return [
    Bodies.fromVertices(randomX, randomY, cherries, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: cherriesImg
        }}}),
    Bodies.fromVertices(randomX, randomY, gianni, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: gianniImg
        }}}),
    Bodies.fromVertices(randomX, randomY, baby, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: babyImg
        }}}),
    Bodies.fromVertices(randomX, randomY, flower, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: flowerImg
      }}}),
    Bodies.fromVertices(randomX, randomY, newyork, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: newyorkImg
      }}}),
    Bodies.circle(randomX, randomY, cactus, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: cactusImg
      }}}),
    Bodies.fromVertices(randomX, randomY, vase, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
      render: {
        sprite: {
          texture: vaseImg
      }}}),
    Bodies.fromVertices(randomX, randomY, pretzel, {
      density: density,
      frictionAir: frictionAir,
      restitution: restitution,
      friction: friction,
       render: {
         sprite: {
           texture: pretzelImg
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
// change background images on mobile devices
if(mobileDevice) {
   var backgrounds = ["tyler-mobile","pink-mobile","gianni-mobile","blue-mobile","culver-mobile","red-mobile"];
}
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

// resize canvas on browser resize (desktop only)
if(!mobileDevice) {
  window.addEventListener('resize', function () {
      document.querySelector("#canvas > canvas").setAttribute("height", window.innerHeight);
      document.querySelector("#canvas > canvas").setAttribute("width", window.innerWidth);
  });
};


// run the engine
Engine.run(engine);
