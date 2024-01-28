const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(()=>{console.log("connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let AllChats = [
    {
    from:"Nikii",
    to:"Monu",
    msg:"Lets wondering",
    created_at:new Date(),
    },
    {
        from:"Payal",
        to:"Sonu",
        msg:"Its my birday",
        created_at:new Date(),
        },
        {
            from:"Aman",
            to:"Nihal",
            msg:"Lets meet today!",
            created_at:new Date(),
            },
            {
                from:"Dipesh",
                to:"kunal",
                msg:"I am coming ar u at home?",
                created_at:new Date(),
                },
            ];
        
    

Chat.insertMany(AllChats);

