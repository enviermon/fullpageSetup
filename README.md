# angular2-lazy-load-example
Angular 2 lazy load example

## How run run the application

npm install
npm run start

navigate to localhost:8080

fullpage.js 
 function addVerticalNavigation(){

            var test =  $( "home" );
         
            if(test) {
                $( "home" ).append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            } else {
                $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            }
