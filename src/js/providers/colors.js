/**
 * Copyright 2015, Symantec Corporation
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree
 */
'use strict';

angular.module( 'zeus.utils' )
    .provider( '$zsColor', [ function () {

        var colorIndex = {};

        this.setColor = function ( key, color ) {
            colorIndex[ key ] = color;
            return this;
        };

        this.$get = function () {
            return {
                getColor: function ( key ) {
                    return colorIndex[ key ];
                }
            };
        };
    }
] );
