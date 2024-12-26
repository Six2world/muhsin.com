
/*const saladlist = document.getElementById("saladlist");
const saladlisthover = document.getElementById("saladlist-hover");
const phone = document.getElementById("phonecontent");


saladlisthover.style.display = "none";

// show hover element on mouseover
/*saladlist.addEventListener("mouseover", (event) =>  {
  saladlisthover.style.display = "block";
  phone.innerHTML = ""; // clear any previous content

  //clone the content of saladlist, including its children
  const clonedsalad = saladlist.cloneNode();
  clonedsalad.removeAttribute("id"); // avoid duplicate ids
  phone.appendChild(clonedsalad); // append cloned content to phone
});

// check if the mouse left the saladlist
saladlist.addEventListener("mouseout",(event) => {
  if (!saladlist.contains(event.relatedTarget)){
    saladlisthover.style.display = "none";
    phone.innerHTML = "" ;
  }
 
});*/

const hovertraget = document.getElementById("saladlist");
const hovertraget2 = document.getElementById("saladlist2");
const hovertraget3 = document.getElementById("saladlist3");
const hovercontent = document.getElementById("saladlist-hover");

const hovercontent3 = document.getElementById("saladlist-hover3");
const hovercontent2 = document.getElementById("saladlist-hover2");

hovercontent.style.display = "none";
hovercontent2.style.display = "none";
hovercontent3.style.display = "none";

hovertraget.addEventListener('mouseover', () => {
  hovercontent.style.display = 'block';
 
});

hovertraget.addEventListener('mouseout', () => {
  hovercontent.style.display = 'none'
})

hovertraget2.addEventListener('mouseover', () => {
  hovercontent2.style.display = 'block';
 
});

hovertraget2.addEventListener('mouseout', () => {
  hovercontent2.style.display = 'none'
})

hovertraget3.addEventListener('mouseover', () => {
  hovercontent3.style.display = 'block';
 
});

hovertraget3.addEventListener('mouseout', () => {
  hovercontent3.style.display = 'none'
})