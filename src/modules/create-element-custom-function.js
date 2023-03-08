export default function createElem(elemType, {Class = "", Content = ""}) {
  const temp = document.createElement(elemType);
  temp.className = Class;
  temp.textContent = Content;
  return temp;
}