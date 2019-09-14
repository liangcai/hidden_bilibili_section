// const styleUrl = chrome.runtime.getURL('data/bilibili_chrome_app_extend_style.css')
//
// fetch(styleUrl)
//     .then((response) => response.text())
//     .then((text) => insertStyle(text));

const insertStyle = (text) => {
    let style = document.createElement('style')
    style.innerHTML = text
    document.head.appendChild(style);
}

const createStyle = () => {
    let styleStringAll = ''
    chrome.storage.local.get(['checkData'], function (result) {
        console.log('checkData: ', result.checkData, typeof(result.checkData))
        for (let category of result.checkData) {
            let styleStringSingle = `#${category} {display: none}\n`
            styleStringAll += styleStringSingle
        }
        console.log('styleStringAll: ', styleStringAll)
        insertStyle(styleStringAll)
    })

}

createStyle()