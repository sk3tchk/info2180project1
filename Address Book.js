var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){
    var contactsLength = contacts.length;
    for(x=0;x < contacts.length; x+=1){
        if(contacts[x].lastName===lastName) {
            printPerson(contacts[x]);
        }
    }
};

function add(firstName, lastName, email, phoneNumber) {
    var newContact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };

    contacts[contacts.length] = newContact;
}
add("David","Martillier","sk3tchk@gmail.com","(876)498-1886");

list();


