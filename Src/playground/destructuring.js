console.log('destructing');
const book ={
    title : 'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
}

const {name : PublisherName='self Published'} = book.publisher;
console.log(`the book is publihsed by ${PublisherName} ` );

const item =['Coffee','2.30','2.89','2.75'];

const [coffee,,medium]=item;
console.log(`${coffee} cost ${medium}`);