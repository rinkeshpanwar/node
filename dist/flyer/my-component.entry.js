import { r as registerInstance, h } from './index-ffa88d01.js';
import { f as format } from './utils-11fcde98.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '0d481e58fc31ee585bc7ad60794afa8a7c29064b' }, h("home-page", { key: 'f580be7806b55d0f5aa1806c6a563146bdb00ec7' }));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };

//# sourceMappingURL=my-component.entry.js.map