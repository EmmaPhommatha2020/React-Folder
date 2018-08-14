/*
What are HTTP requests? 
The internet landscape is made up of computers and mobile devices worlwide, communicating with one another.
Any computer can send data and any computer can receive data, but most of our computers 
are specialized to do mostly one or the other. Servers are computers that specialize in 
listening for requests and sending data. You can even create a server on your 
laptop - live-server is a server on your laptop that you can connect to in order to see your current project. 
Clients are computers that specialize in sending requests and receiving data 
to display - most people use their home computers and phones this way. 

When to make HTTP requests

While browsing a website, our computer is making HTTP requests all the time without us 
knowing it. A request is sent to get the HTML and then to get everything attached t
o it - styles, javascript files, images. In your own site, you can make a request to your 
own server - to get product information, user information - or to another server. 
There are hundreds of open APIs (servers with ways for anyone to interact with them) 
that you can use: you can send a request to SWAPI to get Star Wars facts, 
to the Pokemon API, any number of weather APIs, even APIs to convert text to voice or 
translate text into another language. 

The HTTP Verbs

HTTP requests have different labels depending on what they're used for. 
GET requests are for asking for information, POST requests are to add information, 
PUT is to edit information, and DELETE is to remove information. 
We can use information in the URL or in the body (the data we send with the request) 
to give more information about exactly what we want the server to do for us.
*/


/* •••••
CRUD: create, read, update, delete
REST: post, get, put, delete
*/

/* •••••
HTTP = HyperText Transfer Protocol: A standard protocol for data transfer on the web;
HTTP is stateless, doesn't keep track of the state of the app.
*/

/* •••••
REST = Representational State Transfer: a style of building interactions between computer,
use GET, POST, PUT, DELETE to send and request data.
*/

/* •••••
JSON = Javascript Object Notation: one of the most common formats of REST data transfer.
all quotes =  are double quotes on key and value on the object the value are only string.
no tailing commar = no commar at the end of the last value in the object.
*/



// Client-Server Model //
/*
Client-Server Model = one computer specializes in server function, 
and others act as client to that server.

Clint = a computer which requests and displays data from servers.

Server = a computer which listens for requests and sends data.
*/


// api //
/* •••••
api = application program interface.
*/


// Web URL //
/*
Web URL = http://mywebsite.com/about.html

http = the protocol you're using to make the request.

mywebsite = the domain name of the site.

about.html = the file you're attempting to access from the server.

body =  is request and send.

••• get : http:// www.espn.com
get information from espn server.

••• put: http:// www.devmounta.in/api/students/9435/?name='Jenny'
api = end point
students = from the server.
9435 = id (param)
?name='Jenny = qury

*/


// axios //
/* ••••• axios
 axios = promise libary. ime
 promise = return javascript object.
*/


// Script Tags //
/*
<script></script> 
• script tags connect javascript to html; write your code between opening and closing tags.

<script scr="myJSFile.js"></script> 
• adding a src attribute allows you to refer to a javascript file instead of writing it all on the same page.

<script src="www.code.org/script.js"></script>
• to include a remote file, you must include the entire path-otherwise, the browser will as the
same server the html file came from.
*/


