'use strict';


const createItemsEleFromJson = (text) => {
  let cats = new Map(JSON.parse(text))
  let itemsEle = createItemsEle(cats)
  app.appendChild(itemsEle)
}

let app = document.querySelector('#app');

function createEleFromHTML(htmlString) {
    let div = document.createElement('div')
    div.innerHTML = htmlString.trim()
    return div.firstChild
}

function createItemsEle(cats) {
    let itemsEle = createEleFromHTML('<div class="items"></div>')
    for (let [id, name] of cats.entries()) {
        let htmlString = `<div class="item">
        <input type="checkbox" name="cats" value="${id}">
        <label for="${id}">${name}</label>
      </div>`

        itemsEle.append(createEleFromHTML(htmlString))
    }
    return itemsEle
}

const url = chrome.runtime.getURL('data/cats.json')

fetch(url)
    .then((response) => response.text())
    .then((text) => createItemsEleFromJson(text));

// let cats = new Map().set('id', 'name')
// let itemsEle = createItemsEle(cats)
// app.appendChild(itemsEle)