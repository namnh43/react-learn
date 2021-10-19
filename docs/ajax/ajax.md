I - AJAX introduction
AJAX is a developer's dream, because you can:
- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

What is AJAX?
- AJAX is Asynchronous Javascript And XML
AJAX is not a programming language
AJAX just use a combination of:
 + A browser build-in XMLHttpRequest object
 + Javascript and HTML DOM

 How AJAX works

 <Browser> -> internet -> <Server> -> internet -> <Browser>
 1. An event occurs in a web page (the page is loaded, a button is clicked)
 2. An XMLHttpRequest object is created by Javascript
 3. The XMLHttpRequest object sends a request to a web server
 4. The server processes the request
 5. The server sends a response back to the web page
 6. The response is read by Javascript
 7. Proper action (like page update) is performed by Javascript

 Modern Browsers (Fetch API): Modern Browser can use Fetch API insted of the XMLHttpRequest Object
 The Fetch API interface allows web browser to make HTTP request to web servers.
 If you use the XMLHttpRequest object, Fetch cand do same in a simpler way.


 II - AJAX - The XMLHttpRequest Object
1. Create an XMLHttpRequest Object
variable = new XMLHttpRequest();
2. Define a callback fucntion
A callback function is a function passed as a paramerter to another function.
In this case, the callback function should contain the code to execute when the response is ready.
xhttp.onload=function(){
    //What to do when response is ready
}
3. Send a request
xhttp.open("GET", "ajax_info.txtt")
xhttp.send();

4. The onload Property
With the XMLHttpRequest object, you can define a callback function to executed when the request received an answer.
The function is defined in the onload property of XMLHttpRequest object
Example:
xhttp.onload = function () {
    document.getElementById("demo").innerHTML=this.responseText;
}
xhttp.open("GET", "ajax_info.txt")
xhttp.send();