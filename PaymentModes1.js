/*
 * File: app/store/PaymentModes1.js
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

Ext.define('Cobuy.store.PaymentModes1', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'PaymentModes',
            data: [
                {
                    payment_mode: 'Bank_transfer'
                },
                {
                    payment_mode: 'Online'
                },
                {
                    payment_mode: 'Cheque'
                },
                {
                    payment_mode: 'Credit_debit_card'
                },
                {
                    payment_mode: 'Cash'
                }
            ],
            fields: [
                {
                    name: 'payment_mode'
                }
            ]
        }, cfg)]);
    }
});