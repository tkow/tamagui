/// <reference types="react" />
export declare const createSheetContext: <ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType | undefined) => readonly [{
    (props: ContextValueType & {
        scope: import("@tamagui/create-context").Scope<ContextValueType>;
        children: import("react").ReactNode;
    }): JSX.Element;
    displayName: string;
}, (consumerName: string, scope: import("@tamagui/create-context").Scope<ContextValueType | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<ContextValueType> | undefined;
} | undefined) => ContextValueType], createSheetScope: import("@tamagui/create-context").CreateScope;
export declare const SheetProvider: {
    (props: {
        screenSize: number;
        maxSnapPoint: number;
        removeScrollEnabled: boolean | undefined;
        scrollBridge: import("./types").ScrollBridge;
        modal: boolean;
        open: boolean;
        setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        hidden: boolean;
        contentRef: import("react").RefObject<import("@tamagui/web/types").TamaguiElement>;
        frameSize: number;
        setFrameSize: import("react").Dispatch<import("react").SetStateAction<number>>;
        dismissOnOverlayPress: boolean;
        dismissOnSnapToBottom: boolean;
        onOverlayComponent: ((comp: any) => void) | undefined;
        scope: import("@tamagui/create-context").Scope<any>;
        position: number;
        snapPoints: number[];
        setPosition: (next: number) => void;
        setPositionImmediate: import("react").Dispatch<import("react").SetStateAction<number>>;
        onlyShowFrame: boolean;
    } & {
        scope: import("@tamagui/create-context").Scope<{
            screenSize: number;
            maxSnapPoint: number;
            removeScrollEnabled: boolean | undefined;
            scrollBridge: import("./types").ScrollBridge;
            modal: boolean;
            open: boolean;
            setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
            hidden: boolean;
            contentRef: import("react").RefObject<import("@tamagui/web/types").TamaguiElement>;
            frameSize: number;
            setFrameSize: import("react").Dispatch<import("react").SetStateAction<number>>;
            dismissOnOverlayPress: boolean;
            dismissOnSnapToBottom: boolean;
            onOverlayComponent: ((comp: any) => void) | undefined;
            scope: import("@tamagui/create-context").Scope<any>;
            position: number;
            snapPoints: number[];
            setPosition: (next: number) => void;
            setPositionImmediate: import("react").Dispatch<import("react").SetStateAction<number>>;
            onlyShowFrame: boolean;
        }>;
        children: import("react").ReactNode;
    }): JSX.Element;
    displayName: string;
}, useSheetContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<{
    screenSize: number;
    maxSnapPoint: number;
    removeScrollEnabled: boolean | undefined;
    scrollBridge: import("./types").ScrollBridge;
    modal: boolean;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    hidden: boolean;
    contentRef: import("react").RefObject<import("@tamagui/web/types").TamaguiElement>;
    frameSize: number;
    setFrameSize: import("react").Dispatch<import("react").SetStateAction<number>>;
    dismissOnOverlayPress: boolean;
    dismissOnSnapToBottom: boolean;
    onOverlayComponent: ((comp: any) => void) | undefined;
    scope: import("@tamagui/create-context").Scope<any>;
    position: number;
    snapPoints: number[];
    setPosition: (next: number) => void;
    setPositionImmediate: import("react").Dispatch<import("react").SetStateAction<number>>;
    onlyShowFrame: boolean;
} | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<{
        screenSize: number;
        maxSnapPoint: number;
        removeScrollEnabled: boolean | undefined;
        scrollBridge: import("./types").ScrollBridge;
        modal: boolean;
        open: boolean;
        setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        hidden: boolean;
        contentRef: import("react").RefObject<import("@tamagui/web/types").TamaguiElement>;
        frameSize: number;
        setFrameSize: import("react").Dispatch<import("react").SetStateAction<number>>;
        dismissOnOverlayPress: boolean;
        dismissOnSnapToBottom: boolean;
        onOverlayComponent: ((comp: any) => void) | undefined;
        scope: import("@tamagui/create-context").Scope<any>;
        position: number;
        snapPoints: number[];
        setPosition: (next: number) => void;
        setPositionImmediate: import("react").Dispatch<import("react").SetStateAction<number>>;
        onlyShowFrame: boolean;
    }> | undefined;
} | undefined) => {
    screenSize: number;
    maxSnapPoint: number;
    removeScrollEnabled: boolean | undefined;
    scrollBridge: import("./types").ScrollBridge;
    modal: boolean;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    hidden: boolean;
    contentRef: import("react").RefObject<import("@tamagui/web/types").TamaguiElement>;
    frameSize: number;
    setFrameSize: import("react").Dispatch<import("react").SetStateAction<number>>;
    dismissOnOverlayPress: boolean;
    dismissOnSnapToBottom: boolean;
    onOverlayComponent: ((comp: any) => void) | undefined;
    scope: import("@tamagui/create-context").Scope<any>;
    position: number;
    snapPoints: number[];
    setPosition: (next: number) => void;
    setPositionImmediate: import("react").Dispatch<import("react").SetStateAction<number>>;
    onlyShowFrame: boolean;
};
//# sourceMappingURL=SheetContext.d.ts.map