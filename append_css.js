// // Get HTML head element
// let head = document.getElementsByTagName('HEAD')[0];
//
// // Create new link Element
// let link = document.createElement('link');
//
// // set the attributes for link element
// link.rel = 'stylesheet';
//
// link.type = 'text/css';
//
// link.href = 'trycl_app_style.css';
//
// // Append link element to HTML head
// head.appendChild(link);
//
const url = chrome.runtime.getURL('data/bilibili_chrome_app_extend_style.css')

fetch(url)
    .then((response) => response.text())
    .then((text) => insertStyle(text));

const insertStyle = (text) => {
    let style = document.createElement('style')
    style.innerHTML = text
    document.head.appendChild(style);
}