const playerName = 'Anki23'
const allOrangeJuiceByClass = document.getElementsByClassName("message-post");
let result = "";
var myMap = {};
myMap['brick'] = 0;
myMap['lumber'] = 0;
myMap['wool'] = 0;
myMap['grain'] = 0;
myMap['ore'] = 0;
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  if (allOrangeJuiceByClass[i].textContent.includes(playerName) && (allOrangeJuiceByClass[i].textContent.includes("got") || allOrangeJuiceByClass[i].textContent.includes("received") || allOrangeJuiceByClass[i].textContent.includes("bought") || allOrangeJuiceByClass[i].textContent.includes("built a") || allOrangeJuiceByClass[i].textContent.includes("stole"))) {
  let addOrRemove = ''
  if(allOrangeJuiceByClass[i].textContent.includes("built a"))
  	addOrRemove = 'R'
  else if(allOrangeJuiceByClass[i].textContent.includes("got") || allOrangeJuiceByClass[i].textContent.includes("received") )
    addOrRemove = 'A'
  else if(allOrangeJuiceByClass[i].textContent.includes("stole"))
  	addOrRemove = 'S'
  else if(allOrangeJuiceByClass[i].textContent.includes("bought"))
    addOrRemove = 'D'
  //console.log(allOrangeJuiceByClass[i].textContent)
    var spans = allOrangeJuiceByClass[i].querySelectorAll('span')
    for (let k = 0; k < spans.length; k++) {
      result += spans[k].innerHTML
      let targetSpan = spans[k]
      var images = targetSpan.getElementsByTagName('img');

      // Print the image sources and alt text
      for (var s = 0; s < images.length; s++) {
      console.log(images[s].alt)
        //console.log("Image Source:", images[s].src);
        if(addOrRemove==='D' && images[s].alt.includes('development card')) {
        	myMap['wool']--
          myMap['grain']--
          myMap['ore']--
          }
       if(addOrRemove==='R' && images[s].alt.includes('road')) {
          myMap['brick']--
          myMap['lumber']--
         }
       if(addOrRemove==='R' && images[s].alt.includes('settlement')) {
          myMap['brick']--
          myMap['lumber']--
          myMap['wool']--
          myMap['grain']--
         }
        if(addOrRemove==='R' && images[s].alt.includes('city')) {
          myMap['ore']--
          myMap['ore']--
          myMap['ore']--
          myMap['grain']--
          myMap['grain']--
         }
         if(addOrRemove==='A' || addOrRemove==='S') {
         	myMap[images[s].alt]++
         }
         console.log("-----------")
         for (var key in myMap) {
  if (myMap.hasOwnProperty(key)) {
    console.log(key + ' : ' + myMap[key]);
  }
}
console.log("-----------")
      }
    }
    addOrRemove = ''
   }
    //result += `\n  ${allOrangeJuiceByClass[i].textContent}`;
}

//console.log(result)
