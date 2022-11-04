// -----------------------------
//     UI MODEL - BACKEND
// -----------------------------

//Function - Product management
//Student name - Ekanayake K.L.W
//Student ID - IT19150758

//Importing the mongoose from the installed package - mongoose@8.0.2
const mongoose = require('mongoose');

//Schema name (local) - ProductSchema
const UIModelSchema = new mongoose.Schema({

    heading: {
        type: String,
        trim: true
    },

    label: {
        type: String,
        trim: true
    },

    textbox: {
        type: String,
        trim: true
    },

    checkbox: {
        type: String,
        trim: true
    },

    button: {
        type: String,
        trim: true
    },

    hyperlink: {
        type: String,
        trim: true
    },

    headingMargin: {
        type: String,
        trim: true
    },

    labelMargin: {
        type: String,
        trim: true
    },

    textboxMargin: {
        type: String,
        trim: true
    },

    checkboxMargin: {
        type: String,
        trim: true
    },

    buttonMargin: {
        type: String,
        trim: true
    },

    hyperlinkMargin: {
        type: String,
        trim: true
    },


    headingAllignment: {
        type: String,
        trim: true
    },

    labelAllignment: {
        type: String,
        trim: true
    },

    textboxAllignment: {
        type: String,
        trim: true
    },

    checkboxAllignment: {
        type: String,
        trim: true
    },

    buttonAllignment: {
        type: String,
        trim: true
    },

    hyperlinkAllignment: {
        type: String,
        trim: true
    },


});

/**
 * Schema name on the database - Products
 * 
 * Exported model to be used on the Product route
 */
const UIModel = mongoose.model("UIGenerator", UIModelSchema);
module.exports = UIModel;