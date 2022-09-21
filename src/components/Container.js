import propType from 'prop-types';

function Container({ children }) {
    return (
        <main>{children}</main>
    );
}

Container.prototype = {
    children: propType.node.isRequired
}

export default Container;