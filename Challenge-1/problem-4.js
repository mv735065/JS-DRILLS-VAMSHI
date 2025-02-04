//    Write a function that accesses and 
// logs the name and city of the individual at the index position 3 in the dataset.



function person_at_index(data,index){
    if(!index){
        console.log("Provide index");
        return;
    }
    const person=data[index-1];
    console.log(`Persons name is ${person.name} and city is ${person.city}`);
}

// person_at_index(3);
module.exports=person_at_index;