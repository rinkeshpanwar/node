export declare class CallUser {
    userNameProps: any;
    isCallUser: boolean;
    isLoading: boolean;
    isError: boolean;
    isCallConnected: boolean;
    assignIT: boolean;
    assignvIT: boolean;
    callerRef: any;
    peer: any;
    streamObject: any;
    myVideo: any;
    callerVideo: any;
    remoteStreamObject: any;
    callUser(): void;
    getUserMedia(): Promise<void>;
    componentWillLoad(): void;
    componentDidRender(): void;
    render(): any;
}
