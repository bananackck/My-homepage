'use strict';

// React.createElement(
    //     type,
    //     [props],
    //     [...children]
    // )
const e = React.createElement;

function MyButton() {
    
    const [isClicked, setIsClicked] = React.useState(false);

    return e(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'LIKE!' : 'LIKE ME'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(MyButton), domContainer);