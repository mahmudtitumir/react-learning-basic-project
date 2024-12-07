const root = document.querySelector('#root');

function customRender(element, output) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }
    output.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com/',
        target: '_blank',
    },
    children: 'Click Google',
};

customRender(reactElement, root);
