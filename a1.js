console.log("Hello World");
var serverVerbs = ["GET", "GET", "GET,", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1", 
    "This course name is WEB700. This assignment was prepeared by Cynthia Chineme", 
    "Cichineme@myseneca.ca cynthia chineme", 
    "Hello, User Logged in", 
    "Main Panel", 
    "Logout Complete. Goodbye"
]

// httpRequest function to simulate a web server
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return '200: ' + serverResponses[i];

    }
}
return '404: Unable to process ' + httpVerb + ' request for '+path;
}
console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT", "/")); 

// Helps function to generate a random integer between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//This function helps to automate testing with random requests
function automateTests() {
    // Arrays for testing
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    // calling function to make a random request
    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    // Calls randomRequest every 1 second
    setInterval(randomRequest, 1000);
}
//Start automated tests
automateTests();

