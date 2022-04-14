"use strict";
exports.__esModule = true;
exports.yobtaPreset = void 0;
var addonPlugin_1 = require("./addonPlugin");
var badgePlugin_1 = require("./badgePlugin");
var basePlugin_1 = require("./basePlugin");
var buttonPlugin_1 = require("./buttonPlugin");
var checkboxPlugin_1 = require("./checkboxPlugin");
var colors_1 = require("./colors");
var dividerPlugin_1 = require("./dividerPlugin");
var entypoPlugin_1 = require("./entypoPlugin");
var inkPlugin_1 = require("./inkPlugin");
var inputPlugin_1 = require("./inputPlugin");
var linearProgressPlugin_1 = require("./linearProgressPlugin");
var linkPlugin_1 = require("./linkPlugin");
var listPlugin_1 = require("./listPlugin");
var menuPlugin_1 = require("./menuPlugin");
var bgPlugin_1 = require("./bgPlugin");
var radioButtonPlugin_1 = require("./radioButtonPlugin");
var scrollBoxPlugin_1 = require("./scrollBoxPlugin");
var spinnerPlugin_1 = require("./spinnerPlugin");
var switchPlugin_1 = require("./switchPlugin");
var textAreaPlugin_1 = require("./textAreaPlugin");
exports.yobtaPreset = {
    theme: {
        extend: {
            colors: colors_1.colors,
            animation: {
                'ui-linear-progress': 'ui-linear-progress 2s infinite linear',
                'ui-spinner': 'ui-spinner 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite'
            },
            keyframes: {
                'ui-linear-progress': {
                    '0%': {
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'left -31.25% top 0%'
                    },
                    '50%': {
                        backgroundSize: '800% 100%',
                        backgroundPosition: 'left -49% top 0%'
                    },
                    '100%': {
                        backgroundSize: '400% 100%',
                        backgroundPosition: 'left -102% top 0%'
                    }
                },
                'ui-spinner': {
                    '0%': {
                        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                        transform: 'rotate(0)'
                    },
                    '24%': {
                        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'rotate(900deg)'
                    },
                    '100%': {
                        transform: 'rotate(1800deg)'
                    }
                }
            }
        }
    },
    plugins: [
        addonPlugin_1.addonPlugin,
        badgePlugin_1.badgePlugin,
        basePlugin_1.basePlugin,
        buttonPlugin_1.buttonPlugin,
        checkboxPlugin_1.checkboxPlugin,
        dividerPlugin_1.dividerPlugin,
        entypoPlugin_1.entypoPlugin,
        inkPlugin_1.inkPlugin,
        inputPlugin_1.inputPlugin,
        listPlugin_1.listPlugin,
        linearProgressPlugin_1.linearProgressPlugin,
        linkPlugin_1.linkPlugin,
        menuPlugin_1.menuPlugin,
        bgPlugin_1.paperPlugin,
        radioButtonPlugin_1.radioButtonPlugin,
        scrollBoxPlugin_1.scrollBoxPlugin,
        spinnerPlugin_1.spinnerPlugin,
        switchPlugin_1.switchPlugin,
        textAreaPlugin_1.textAreaPlugin
    ],
    variants: {
        extend: {
            brightness: ['active', 'hover'],
            textColor: ['visited', 'hover', 'active', 'dark']
        }
    }
};
//# sourceMappingURL=index.js.map