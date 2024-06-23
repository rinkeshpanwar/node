import { r as registerInstance, h, a as Host } from './index-6c4441dc.js';

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
    componentDidLoad() {
        const userName = localStorage.getItem("userName");
        if (userName.length > 0) {
            this.userName = userName.toLowerCase();
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'e5ab3adba2faaed4e841fe361473f2e6a89fd2d1' }, h("slot", { key: 'b06fb8b051c7ba4400bd36c97b8dcdc5b3b7101d' }, ((_b = (_a = this.userName) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.length) > 0 ? h("call-user", { userNameProps: this.userName }) : h("div", null, h("input", { ref: e => this.userRef = e, type: 'text' }), h("button", { onClick: () => this.setUserName() }, "Set Username")))));
    }
};
HomePage.style = homePageCss;

export { HomePage as home_page };

//# sourceMappingURL=home-page.entry.js.map