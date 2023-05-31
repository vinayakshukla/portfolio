
 let width= document.getElementsByClassName("protfolio-website")[0].offsetWidth;
 let circleRadius=width>500?250: (width-100)/2;
const Texts = [

    'HTML', 'CSS', 'ANGULAR',

    'JAVA', 'JAVASCRIPT',

    'PYTHON', 'SASS', 'UNIX', 'PUTTY', 'WINSCP', 'BOOTSTRAP', 'JSON', 'GIT', 'TYPESCRIPT', 'SVN',

    'NEO4J', 'SPRINGBOOT', 'DSA', 'MYSQL', 'JQUERY',];


var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px

    radius: circleRadius,


    // animation speed

    // slow, normal, fast

    maxSpeed: 'fast', initSpeed: 'fast',

    // Rolling direction [0 (top), 90 (left), 135 (right-bottom)] direction: 135, 

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).] keep: true

});

var color = '#40b0bd';


