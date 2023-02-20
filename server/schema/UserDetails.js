const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: {type: String, unique: true},
        password: String
    },
    {
        collection: "UserInfo"
    }
);

mongoose.model("UserInfo", userDetailsSchema);