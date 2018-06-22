/*
 * File: app/store/NumberOfYears.js
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

Ext.define('Cobuy.store.NumberOfYears', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'NumberOfYears',
            data: [
                {
                    number_of_years: '1'
                },
                {
                    number_of_years: '2'
                },
                {
                    number_of_years: '3'
                },
                {
                    number_of_years: '4'
                },
                {
                    number_of_years: '5'
                },
                {
                    number_of_years: '6'
                },
                {
                    number_of_years: '7'
                },
                {
                    number_of_years: '8'
                },
                {
                    number_of_years: '9'
                },
                {
                    number_of_years: '10'
                }
            ],
            fields: [
                {
                    name: 'number_of_years'
                }
            ]
        }, cfg)]);
    }
});