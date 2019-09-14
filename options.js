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

function saveData(type, value, state) {
    console.log('run saveData')

    if (type === 'checkData') {
        if (state === 'checked') {
            chrome.storage.local.get(['checkData'], function (result) {
                console.log(typeof (result.checkData))
                if (!result.checkData) {
                    chrome.storage.local.set({'checkData': [value]}, () => {
                        console.log('Value currently is ' + result.checkData);
                    })
                } else {
                    chrome.storage.local.set({'checkData': [...new Set([...result.checkData, value])]}, () => {
                        console.log('Value currently is ' + result.checkData);
                    })
                }
            });
        }
    }
}

function constructOptions() {
    const url = chrome.runtime.getURL('data/cats.json')

    fetch(url)
        .then((response) => response.text())
        .then((text) => createItemsEleFromJson(text))
        .then(
            () => {
                let itemsEle = document.querySelectorAll('input[name=cats]')
                console.log(itemsEle)
                for (let itemEle of itemsEle) {
                    itemEle.addEventListener('change', (event) => {
                        console.log(event)
                        if (event.target.checked) {
                            console.log('checked: ' + event.target.value)
                            saveData('checkData', event.target.value, 'checked')
                        } else {
                            console.log('cancel checked: ' + event.target.value)
                        }
                    })
                }
            }
        )
}


constructOptions()