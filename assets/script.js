var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var topic;
for(let i= 0; i < topics.length; i++){
    topic = topics[i];


    if (topic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (topic === 'Git') {
    console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}