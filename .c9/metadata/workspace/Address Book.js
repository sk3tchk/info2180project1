{"filter":false,"title":"Address Book.js","tooltip":"/Address Book.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":11}},"text":"var bob = {"},{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":51,"column":0}},"lines":["    firstName: \"Bob\",","    lastName: \"Jones\",","    phoneNumber: \"(650) 777-7777\",","    email: \"bob.jones@example.com\"","};","","var mary = {","    firstName: \"Mary\",","    lastName: \"Johnson\",","    phoneNumber: \"(650) 888-8888\",","    email: \"mary.johnson@example.com\"","};","","var contacts = [bob, mary];","","function printPerson(person) {","    console.log(person.firstName + \" \" + person.lastName);","}","","function list() {","\tvar contactsLength = contacts.length;","\tfor (var i = 0; i < contactsLength; i++) {","\t\tprintPerson(contacts[i]);","\t}","}","","function search(lastName){","    var contactsLength = contacts.length;","    for(x=0;x < contacts.length; x+=1){","        if(contacts[x].lastName===lastName) {","            printPerson(contacts[x]);","        }","    }","};","","function add(firstName, lastName, email, phoneNumber) {","    var newContact = {","        firstName: firstName,","        lastName: lastName,","        phoneNumber: phoneNumber,","        email: email","    };","","    contacts[contacts.length] = newContact;","}","add(\"David\",\"Martillier\",\"sk3tchk@gmail.com\",\"(876)498-1886\");","","list();","",""]}]}]]},"ace":{"folds":[],"scrolltop":298,"scrollleft":0,"selection":{"start":{"row":51,"column":0},"end":{"row":51,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":17,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1413504494891,"hash":"99f975941ff63b57abe44f7a20b3e46294537d88"}