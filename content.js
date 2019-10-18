// window.addEventListener('DOMContentLoaded',function (){
//     console.log('DOM Loaded');

//     var link=document.getElementsByClassName('link')[0];

// if (!link.hasAttribute('href') ){
//     link.setAttribute('href','http://google.com');
// }

// link.setAttribute('title','Insitute');

// var link=document.getE('link')[0];

// if (!link.hasAttribute('href') ){
//     link.setAttribute('href','http://test.lk');
// }

// link.setAttribute('title','Insitute');

// var newTitle = document.createElement('h2');
// var rootEle = document.createElement('root');
// ;
// var textNode = document.createTextNode('New Title');

// newTitle.append('textNode');
// console.log(newTitle);

//     var langlist = function (){
//         var languages = ["html", "css", "python", "react", "redux","vue"],UL;

//         if(languages.length) {

//             UL = document.createElement('ul');

//             function createItem(value){
//                 var LI,TextNode;

//                 LI = document.createElement('li');
//                 TextNode = document.createTextNode(value);
//                 LI.append(TextNode);
//                 UL.append(LI)
//             }

//             languages.forEach (function ( value){
//                 createItem(value);
//             });

//             RootElement = document.getElementById('root');
//             RootElement.append(UL);
//         }

//     }();

// });

const languages = [
  {
    language: "HTML",
    Discription:
      "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. ... Tags such as <img /> and <input /> directly introduce content into the page.",
    Versions: "HTML 2, HTML 3, HTML 4, HTML 5",
    History:
      "In 1980, physicist Tim Berners-Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents. In 1989, Berners-Lee wrote a memo proposing an Internet-based hypertext system.",
    References: "W3C"
  },
  {
    language: "Java",
    Discription: "Java is a set of computer software and specifications developed by James Gosling at Sun Microsystems, which was later acquired by the Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment",
    Versions:"J2SE 1.3, J2SE 1.4",
    History: "The Java platform and language began as an internal project at Sun Microsystems in December 1990, providing an alternative to the C++/C programming languages.",
    References: "W3C"
  },
  {
    language: "CSS",
    Discription: "CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.",
    Versions: "CSS5",
    History: "CSS was first proposed by Håkon Wium Lie on October 10, 1994.[21] At the time, Lie was working with Tim Berners-Lee at CERN.[22] Several other style sheet languages for the web were proposed around the same time,",
    References: "W3C"
  },
  {
    language: "React",
    Discription: "The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via a serialisation, asynchronous and batched Bridge.",
    Versions: "React Native",
    History: "In 2012 Mark Zuckerberg commented,The biggest mistake we made as a company was betting too much on HTML as opposed to native.",
    References: "W3C"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  var ul = document.createElement("ul");
  document.getElementById("root").appendChild(ul);

  languages.forEach(function(languages) {
    var li = document.createElement("li");

    button = "target_button";
    ul.id  = "target_ul";
   
    ul.appendChild(li).id = "target_li";
    li.innerHTML += languages.language;
    var button = document.createElement("button");
    button.innerHTML += "View More";
    ul.appendChild(button).onclick = function() {
      alert(
        languages.Discription +
          "\n" +
          "\n" +
          languages.Versions +
          "\n" +
          "\n" +
          languages.History +
          "\n" +
          "\n" +
          languages.References
      );
    };
  });
});

