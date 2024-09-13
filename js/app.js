// Változók, típusok
/* 
var, let -> let a = 23;
let -> block scope
var -> function scope
Állandó: const const a = 10; block scope

Elemi típusok:
- "sztring", 'sztring' `sztring (template) literal ${változó}`
- number: 3, 3.12 parseInt(), Number(),       parseFloat()  ((NaN egy number "érték"))
- boolean
-undefined (érték és egyben típus) -> Nincs definiálva, de majd lesz.
-null -> Vagy null a definiált értéke, vagy semmit adtak értékül a változónak.

Operátorok:
+ (túlterhelt), *, -, / % (modulo, modulus), // = (értékadó), 
inkrementálás: ++ (python: +=1)
dekrementálás: -- (python: -= 1)

Összehasonlító operátorok:
<, >, <=, >=, ==, ===

Logikai operátorok: negálás -> !, and -> &&, or -> ||

A JS gyengén típusos nyelv: ==, 3+"4" -> '34',  3*"4" -> 12
*/
// HTML elemek elérés:
// console.log(document);
const button = document.querySelector("ul li:last-child a");
button.textContent = "Új szöveg";
button.style.backgroundColor = "rgb(200, 20, 20)";
// button.style.display = "none";
console.log(button);

document.querySelector(".card").style.backgroundColor = "#123456";

const floatDiv = document.querySelector(".float-div");
const paragraph = document.createElement("p");
const text = "Ez egy hosszú szöveg";
paragraph.textContent = text;
paragraph.style.fontSize = "1.2rem";
floatDiv.appendChild(paragraph);


/* 
Array (tömb) _ python lista (dinamikus, heterogén)
const t = []; NE : const t = new Array()
Elemek elérése: t[0], t.at(-1)
t.slice(end, start) end nélkül a tömb végéig megy. (szeletelő) ~ [::]
t.splice(start, deletedCount, inserted elements)
const newT =t.splice(start, deletedCount, inserted elements)
i.indexOf(100)-->az elem indexét adja vissza
t.join('_')---> '10_20_30'
t.toString ---'102030'
*/


const pElements = document.querySelectorAll("p")
//pElements.at(-1).style.fontFamily = "Arial";
pElements[pElements.length-1].style.color = "hsl(100, 60%, 70%)";
Array.from(pElements).splice(0, 3);
// Az Array.from() metódus tzömböt készít a nodeList-ből. A NodeList nem tömb!!!
floatDiv.innerHTML = "";
console.log(Array.from(pElements));
for (let element of Array.from(pElements)){
    console.log(element.innerHTML);
    floatDiv.innerHTML += element.innerHTML;    
}
//floatDiv.innerHTML = 