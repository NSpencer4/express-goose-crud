const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let herosSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

herosSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },
    get: function(query, cb) {
        this.find(query, cb);
    },
    getByName: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query,
            {$set: updateData},{new: true}, cb);
    },
    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
};

module.exports = herosSchema;