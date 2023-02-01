// chrome.webNavigation.onCommitted.addListener(function(details) {
//     console.log("User changed page");
// }, {url: [{urlMatches : '<all_urls>'}]});
console.log("script.js starting.");
// console.log(document.documentElement.innerHTML);



// var myEle = document.getElementById("myElement");
// var loadedPage = document.getElementsByClassName("css-1fpi6xa");s

// function waitForElm(selector) {
//     return new Promise(resolve => {
//         if (document.querySelector(selector)) {
//             return resolve(document.querySelector(selector));
//         }

//         const observer = new MutationObserver(mutations => {
//             if (document.querySelectorAll(selector)) {
//                 resolve(document.querySelector(selector));
//                 observer.disconnect();
//             }
//         });

//         observer.observe(document.body, {
//             childList: true,
//             subtree: true
//         });
//     });
// }

function waitForElm(selector) {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(interval);
          clearTimeout(timeout);
          resolve(element);
        }
      }, 100);
      
      const timeout = setTimeout(() => {
          clearInterval(interval);
          reject(new Error('Timeout: Element not found after 2 minutes'));
      }, 120000);
    });
  }


function getProfessor(){
    console.log('Function called.');
    waitForElm('.css-fgox3d-fieldsCss').then((elm) => {
        console.log('Professor element found');
        let ulElements = document.getElementsByClassName('css-fgox3d-fieldsCss');

        console.log(ulElements.length);
        for (let i = 0; i < ulElements.length; i++) {
            if (ulElements[i].tagName === "UL") {
                var spanElement = ulElements[i].getElementsByTagName("span")[1];
                var profName = spanElement.innerText;
                console.log(profName);
                editProfessor(spanElement, profName, i);
            }
        }
    });
        
    
}

//creates html code fragment from a string
// function create(htmlStr, element) {
//     var frag = document.createDocumentFragment(),
//         temp = document.createElement(element);
//     temp.innerHTML = htmlStr;
//     while (temp.firstChild) {
//         frag.appendChild(temp.firstChild);
//     }
//     return frag;
// }

//function to add <script> and <style> to <head>
function editHead() {
    // var fragment = create('<link rel=\"stylesheet\" href=\"styles.css\" />', 'link');
    // var fragment2 = create('<script type=\"text/javascript\" src=\"app.js\"></script>', 'script');
    var style = document.createElement('style');
    style.setAttribute('id', 'id420');
    document.head.insertBefore(style, document.head.childNodes[0]);
    style.innerHTML = '.button {font-size: 1em;color: blue;text-decoration: none;cursor: pointer;transition: all 0.3s ease-out;}.button:hover {color: #06D85F;}.overlay {position: fixed;top: 0;bottom: 0;left: 0;right: 0;background: rgba(0, 0, 0, 0.7);transition: opacity 500ms;visibility: hidden;opacity: 0;}.overlay:target {visibility: visible;opacity: 1;}.popup {margin: 70px auto;padding: 20px;background: #fff;border-radius: 5px;width: 30%;position: relative;transition: all 5s ease-in-out;}.popup h2 {margin-top: 0;color: #333;font-family: Tahoma, Arial, sans-serif;}.popup .close {position: absolute;top: 20px;right: 30px;transition: all 200ms;font-size: 30px;font-weight: bold;text-decoration: none;color: #333;} .popup .close:hover {color: #06D85F;} .popup .content {max-height: 30%;overflow: auto;} @media screen and (max-width: 700px){.box{width: 70%;}.popup{width: 70%;}}';
}

//function to insert html at each professor name
async function editProfessor(spanElement, prof, popupNum) {
    // let array = [5, 1]
    let response = await fetch('http://localhost:3000/'+prof)
    let array = await response.json();

    // let array = myfunction(prof);
    var qualityRating = array[1];
    var difficultyRating = array[0];
    var link = 'https://www.ratemyprofessors.com/';
    console.log(prof);
    spanElement.innerHTML = '<a id=\"id69\" class=\"button\" href=\"#popup' + popupNum + '\">' + prof + '</a><div id=\"popup' + popupNum + '\" class=\"overlay\"><div class=\"popup\"><h2>' + prof + '</h2><a class=\"close\" href=\"#\">&times;</a><div class=\"content\"><p>Quality Rating: ' + qualityRating + '<br>Difficulty Rating: ' + difficultyRating + '</p><br><a href=' + link + '></a></div></div></div>';
}



// const ratings = require('@mtucourses/rate-my-professors').default;

// async function myfunction (name){

//  const schools = await ratings.searchSchool('Texas A&M University');


//   const teachers = await ratings.searchTeacher(name, 'U2Nob29sLTEwMDM=');

//   console.log(teachers);

//   console.log(teachers[0]["id"]);

//   const teacher = await ratings.getTeacher(teachers[0]["id"]);

//   console.log(teacher);
//   let peep = [teacher["avgDifficulty"], teacher["avgRating"]];
//   return peep;
// }


var checkHeader = document.getElementById('id420');
var checkProfessors = document.getElementById("id69");
if (!checkProfessors) {
    getProfessor();
}
if (!checkHeader) {
    editHead();
}



// if (document.readyState === 'complete') {
//     while(loadedPage.length == 0){
//         console.log("waiting for page to load");
//         await new Promise(r => setTimeout(r, 2000));
//         loadedPage = document.getElementsByClassName("css-1fpi6xa");
//     }
// }

// console.log("Page hasn't loaded");


// window.onload = function() {
//     console.log("This is a popup! 3");
//     let instructor = document.querySelector('ul.css-fgox3d-fieldsCss span:last-child').innerText;
//     console.log(instructor); // "Davis, Timothy A"  
    // let ulElements = document.getElementsByClassName('css-fgox3d-fieldsCss');

    // console.log(ulElements.length);
    // for (let i = 0; i < ulElements.length; i++) {
        
    //     if (ulElements[i].tagName === "UL") {
    //         console.log(ulElements[i]);
    //     }
    // }
// }