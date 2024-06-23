import { r as registerInstance, h, a as Host } from './index-6c384454.js';

const homePageCss = ":host{display:block}";

const HomePage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.userName = "";
    }
    setUserName() {
        var _a;
        this.userName = this.userRef.value;
        if (((_a = this.userName) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            localStorage.setItem("userName", this.userName);
        }
    }
    componentWillLoad() {
        console.log("did load rendered");
        const userName = localStorage.getItem("userName");
        if (userName.length > 0) {
            this.userName = userName.toLowerCase();
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '993ac4f0c8833ff83995e16d3337299fa9ba5fa8' }, h("slot", { key: '344bc4505485fa53b2cd28aa7ef4440ac47ddd83' }, ((_b = (_a = this.userName) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.length) > 0 ? h("call-user", { userNameProps: this.userName }) : h("div", null, h("input", { ref: e => this.userRef = e, type: 'text' }), h("button", { onClick: () => this.setUserName() }, "Set Username")))));
    }
};
HomePage.style = homePageCss;

export { HomePage as home_page };

//# sourceMappingURL=home-page.entry.js.map