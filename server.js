const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started");
})