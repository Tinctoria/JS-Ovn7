// Uppgift 1 

class Person {
    constructor(firstname, lastname) {
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
const myPerson=new Person("John", "Doe"); 
console.log(myPerson);

// Uppgift 2

const catURL="https://api.thecatapi.com/v1/images/search"; 

class cat {
    constructor(breeds, id, url, width, height){
        this.breeds=breeds; 
        this.id=id;
        this.url=url; 
        this.width=width;
        this.height=height; 
    }

    showImage(){
        const img=document.createElement("img"); 
        img.setAttribute("src", this.url);
        document.body.appendChild(img);
    }
}

function addCat(data){
    const catData=data[0]; 
    const newCat= new cat(catData.breeds, catData.id, catData.url, catData.width, catData.heigth);
    console.log(newCat);
    newCat.showImage(); 
}


function whenFetchisDone(response){
    response.json().then(addCat); 
} 
    
fetch(catURL).then(whenFetchisDone);
