import { createElement } from 'react'

function Text({ renderAs, content, className}) {
    return (
        createElement(renderAs, {className}, content)
    )
}

export default Text