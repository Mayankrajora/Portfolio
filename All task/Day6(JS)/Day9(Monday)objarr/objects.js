let person = {
    name:"Mayank",
    Age:22,
    profession:"Engineer",
    info:function(){
        console.log("Hello,My name is"+" "+this.name+" "+"My age is"+" "+this.Age+" "+"I am a"+" "+this.profession);
    }
};
person.info(); 