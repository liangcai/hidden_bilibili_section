'use strict';

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
        <input type="checkbox" id="${id}">
        <label for="${id}">${name}</label>
      </div>`

        itemsEle.append(createEleFromHTML(htmlString))
    }
    return itemsEle
}

let cats = new Map().set('id', 'name')
let itemsEle = createItemsEle(cats)
app.appendChild(itemsEle)