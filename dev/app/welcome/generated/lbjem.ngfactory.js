/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./lbjem"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Lbjem_0() {
        return import0.ɵvid(0, [
            import0.ɵted(null, ['\n    ']),
            import0.ɵeld(0, null, null, 1, 'span', [], [
                [
                    0,
                    'aria-label',
                    0
                ],
                [
                    3,
                    'hidden',
                    0
                ]
            ], null, null, null, null),
            import0.ɵted(null, ['This is a dummy component for Lbjem']),
            import0.ɵted(null, ['\n    ']),
            import0.ɵeld(0, null, null, 0, 'div', [], null, [[
                    null,
                    'click'
                ]
            ], function (view, eventName, $event) {
                var allowDefault = true;
                var comp = view.component;
                if (('click' === eventName)) {
                    var pd_0 = (comp.doNothing($event) !== false);
                    allowDefault = (pd_0 && allowDefault);
                }
                return allowDefault;
            }, null, null),
            import0.ɵted(null, ['\n    '])
        ], null, function (check, view) {
            var comp = view.component;
            var currVal_0 = comp.msg;
            var currVal_1 = false;
            check(view, 1, 0, currVal_0, currVal_1);
        });
    }
    exports_1("View_Lbjem_0", View_Lbjem_0);
    function View_Lbjem_Host_0() {
        return import0.ɵvid(0, [
            import0.ɵeld(0, null, null, 1, 'd-lbjem', [], null, null, null, View_Lbjem_0, RenderType_Lbjem),
            import0.ɵdid(24576, null, 0, import1.Lbjem, [], null, null)
        ], null, null);
    }
    var import0, import1, styles_Lbjem, RenderType_Lbjem, RenderType_Lbjem_Host, LbjemNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            styles_Lbjem = [];
            exports_1("RenderType_Lbjem", RenderType_Lbjem = import0.ɵcrt({
                encapsulation: 2,
                styles: styles_Lbjem,
                data: {}
            }));
            RenderType_Lbjem_Host = import0.ɵcrt({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            exports_1("LbjemNgFactory", LbjemNgFactory = import0.ɵccf('d-lbjem', import1.Lbjem, View_Lbjem_Host_0));
        }
    };
});
//# sourceMappingURL=lbjem.ngfactory.js.map