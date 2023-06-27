const Event = require('events');

//Create an instance of the Event class
const event = new Event();

//Subscribe to the 'subscribe' event
// event.on('subscribe',()=>{
//     console.log('You have subscribed!');
// });

//Simulate a user subscribing by triggering the 'subscribe' event
//event.emit('subscribe');


// Define the event handler
// const eventHandler = () =>{
//     console.log('Event handler called!');
// }

// //Subscribe to the 'customerEvent' event
// event.on('customEvent', eventHandler);

// // Call the 'customEvent'
// event.emit('customEvent'); // Output: "Event handler called!"

// // Remove the event handler for 'customEvent'
// event.off('customEvent', eventHandler);

// // Call the 'customEvent' again
// event.emit('customEvent'); // No output, since the event handler was removed









// Determine the current maximum number of event listeners
const currentMaxListeners = event.getMaxListeners();
console.log('Current maximum number of listeners:', currentMaxListeners);

// Set the maximum number of listeners to 51
event.setMaxListeners(5);

// Verify the new maximum number of listeners
const updatedMaxListeners = event.getMaxListeners();
console.log('Updated maximum number of listeners:', updatedMaxListeners);
