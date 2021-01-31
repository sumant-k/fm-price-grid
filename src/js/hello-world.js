import design from "../mobileDesign.jpg"
export function helloWorld(){
    console.log("Hello World")
}
export const addImage = () =>{
    const img = document.createElement("img");
    img.alt="img";
    img.width=1000;
    img.src=design;
    const body = document.querySelector("body");
    body.appendChild(img)
}
