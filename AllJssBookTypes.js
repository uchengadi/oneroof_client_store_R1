/*
 * File: app/store/AllJssBookTypes.js
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

Ext.define('Cobuy.store.AllJssBookTypes', {
    extend: 'Ext.data.Store',

    requires: [
        'Cobuy.model.Products',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'Cobuy.model.Products',
            storeId: 'AllJssBookTypes',
            pageSize: 10,
            proxy: {
                type: 'rest',
                url: '/cobuy/index.php?r=Product/ListAllJssBookProductsType',
                reader: {
                    type: 'json',
                    messageProperty: 'msg',
                    root: 'product',
                    totalProperty: 'results'
                },
                writer: {
                    type: 'json',
                    allowSingle: false,
                    encode: true
                }
            }
        }, cfg)]);
    }
});