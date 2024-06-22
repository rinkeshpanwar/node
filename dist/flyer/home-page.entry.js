import { r as registerInstance, h, a as Host } from './index-6c384454.js';

const homePageCss = ":host{display:block}";

const HomePage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.userName = "";
    }
    setUserName() {
        this.userName = this.userRef.value;
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'c64ac7f061c620f395f4b26740da603317472513' }, h("slot", { key: '709d32513ec462f8eecca7ae4dc4f49914a99e50' }, ((_b = (_a = this.userName) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.length) > 0 ? h("call-user", { userNameProps: this.userName }) : h("div", null, h("input", { ref: e => this.userRef = e, type: 'text' }), h("button", { onClick: () => this.setUserName() }, "Set Username")))));
    }
};
HomePage.style = homePageCss;

export { HomePage as home_page };

//# sourceMappingURL=home-page.entry.js.map