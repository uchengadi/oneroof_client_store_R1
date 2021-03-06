/*
 * File: app/store/SusbcriptionWeekOfDelivery.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Cobuy.store.SusbcriptionWeekOfDelivery', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SusbcriptionWeekOfDelivery',
            data: [
                {
                    week_of_delivery: 'Every_first_week'
                },
                {
                    week_of_delivery: 'Every_second_week'
                },
                {
                    week_of_delivery: 'Every_third_week'
                },
                {
                    week_of_delivery: 'Every_forth_week'
                },
                {
                    week_of_delivery: 'Every_last_week'
                },
                {
                    week_of_delivery: 'Any_week'
                }
            ],
            fields: [
                {
                    name: 'week_of_delivery'
                }
            ]
        }, cfg)]);
    }
});