function Blocks() {
    const main = document.getElementById('main');
    const div = document.createElement('div');
    const param = {
        lines: [
            {
                background: '#00F',
                updateTime: 5000,
                elements: [
                    { background: '#00F', width: 25 },
                    { background: '#00F', width: 25 },
                    { background: '#00F', width: 25 },
                    { background: '#00F', width: 25 }
                ]
            },
            {
                background: '#00F',
                updateTime: 2000,
                elements: [
                    { background: '#00F', width: 25 },
                    { background: '#00F', width: 25 },
                    { background: '#00F', width: 25 }
                ]
            },
            {
                background: '#00F',
                updateTime: 1000,
                elements: [
                    { background: '#00F', width: 25 },
                    { background: '#00F', width: 25 }
                ]
            },
            {
                background: '#00F',
                updateTime: 1000,
                elements: [
                    { background: '#00F', width: 25 }
                ]
            }
        ]
    }
    const appendElement = (item, parent, color) => {
        item.style.background = color;
        parent.append(item);
    }
    param.lines.forEach(function(item1) {
        const element = div.cloneNode(true);
        element.classList.add("element");
        setInterval(() => element.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`, item1.updateTime);
        appendElement(element, main, item1.background)

        item1.elements.forEach(function(item2) {
            const block = div.cloneNode(true);
            block.style.width = `${item2.width}%`;
            appendElement(block, element, item2.background)
        });
    });
}
const blocks = new Blocks;
