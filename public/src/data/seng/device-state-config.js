import { css } from 'lit';
export var DeviceState;
(function (DeviceState) {
    DeviceState[DeviceState["SMALL"] = 0] = "SMALL";
    DeviceState[DeviceState["MEDIUM"] = 1] = "MEDIUM";
    DeviceState[DeviceState["LARGE"] = 2] = "LARGE";
    DeviceState[DeviceState["XLARGE"] = 3] = "XLARGE";
    DeviceState[DeviceState["XXLARGE"] = 4] = "XXLARGE";
    DeviceState[DeviceState["XXXLARGE"] = 5] = "XXXLARGE";
})(DeviceState || (DeviceState = {}));
export const mediaQueries = {
    SMALL: css `(min-width: 480px)`,
    MEDIUM: css `(min-width: 768px)`,
    LARGE: css `(min-width: 1024px)`,
    XLARGE: css `(min-width: 1200px)`,
    XXLARGE: css `(min-width: 1600px)`,
    XXXLARGE: css `(min-width: 1920px)`,
};
//# sourceMappingURL=device-state-config.js.map