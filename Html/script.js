
let thirdPart = document.getElementById("thirdPart");
const GetimgData = async ()=>{
    let res = await fetch("https://api.imgflip.com/get_memes")
    let data = await res.json()
    // console.log(data.data.memes)
    showData(data.data.memes)
}
function showData(data){
console.log(data)
data.forEach((e)=>{
  let imgDiv = document.createElement("div")
imgDiv.setAttribute('class','img-div')
  let img = document.createElement("img")
    img.src= e.url

    let text = document.createElement("p")
    text.innerText=e.name
    imgDiv.append(img,text)
    
    thirdPart.append(imgDiv)
})

}
let debounce = document.getElementById("debauncing");
  debounce.style.display = "none";
  let timeid;
  async function data() {
    debounce.innerHTML = null;
    let name = document.getElementById("query").value;
    if (name.trim() == "") {
      debounce.style.display = "none";
    } else {
      debounce.style.display = "flex";
    }
    let res = await fetch(`https://swapi.dev/api/people/?search=${name}`);

    let data = await res.json();
    return dataappend(data.results);
  }
  
  async function main() {
    let name = document.getElementById("query").value;

    let stars = await data(name);
    dataappend(stars.results);
  }

  function dataappend(res) {
    res.forEach((e) => {
      let para = document.createElement("p");
      para.textContent = e.name;
      debounce.append(para);
    });
  }

  function debouncing(func, delay) {
    let name = document.getElementById("query").value;
    if (name.length < 1) {
      return false;
    }
    if (timeid) {
      clearTimeout(timeid);
    }
    timeid = setTimeout(() => {
      func();
    }, delay);
  }
GetimgData();

