const divJs = document.querySelector('#divJs');
const divReact = document.querySelector('#divReact');

const render = () => {
    divJs.innerHTML = `
        <div class="split">
        JS Template: <input type="text" />
            <p>${ new Date() }</P>
        </div>
    `;

    const divToRender = React.createElement(
        "div",
        {className: "split"},
        "React Template: ",
        React.createElement("input"),
        React.createElement(
            "p",
            null,
            new Date().toString()
        )
    );

    ReactDOM.render(divToRender, divReact);
}


document.addEventListener('DOMContentLoaded', () => {
    
    setInterval(render, 1000);

});