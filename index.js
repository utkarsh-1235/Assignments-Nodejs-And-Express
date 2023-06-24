// Read File
const fs = require('fs');

fs.readFile('nodejs_architecture.txt',function(err,data){
    if(err){
        console.log("Error in reading file",err);
        return err;
    }
    console.log('Data: ',data.toString());
})

// Append File
fs.appendFile('nodejs_architecture.txt','So I write by myself.','utf8',function(err){
    if(err){
        console.log("Error in apending file");
    }
    else{
        console.log("Successfully appending");
    }
})


// Delete File
fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        console.log("Error in deleting",err);

    }
    else{
        console.log("Successfully Deleting");
    }
})