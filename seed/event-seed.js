const db=require('../config/database')
//const db=require('../config/product')
const Event=require('../models/event')

let newEvents = [

    new Event({
        title: 'World cup',
        description: 'all national team playing football in the biggest compitation',
        location: 'Qatar',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'World youth',
        description: ' collecting all youth from different countries ',
        location: 'Cairo',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'Nile river tour',
        description: 'tour in aswan and drive boats in nile river',
        location: 'aswan',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'pyramids of giza',
        description: 'tour in giza pyramids',
        location: 'giza',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Sur',
        date: Date.now(),
        user_id:'1',
        created_at: Date.now()
    }),
    
]

newEvents.forEach( (event)=> {
    event.save( (err)=> {
        if (err) {
            console.log(err)
        }
        else{
            console.log("record was add");
         }
    })
})
// let newEvent=new Event({
//     title: 'pyramids of giza',
//     description: 'tour in giza pyramids',
//     location: 'imbaba',
//     date: Date.now(),
//     created_at: Date.now(),
//     user_id:'2022'
// })

//   newEvents.save( (err)=> {  
//       if(!err) {
//            console.log('record was added')
//       } else {
//           console.log(err)
//       }
//    })