function getBiliCats() {
    let cats = new Map()
    let categories = document.querySelectorAll('#app > .bili-wrapper > .report-wrap-module')
    for (let cat of categories) {
        let id = cat.id
        let name = ""
        if (cat.querySelector('.name')) {
            name = cat.querySelector('.name').textContent
        } else {
            if (id === 'chief_recommend') {
                name = '推荐区'
            } else {
                name = '未知区域'
            }
        }
        console.log(`${id}: ${name}`)
        cats.set(id, name)
    }
    return cats
}

export default getBiliCats;