const person = {
    name: 'Mahdi',
    age: 20,
    degrees: {
        class: "eight",
        position: 23
    },
    hoby: ["Football", "handball"],
    role: [2, "Authore"],
};
for (let hob of person.hoby) {
    console.log(hob.match.toString());
}
person.role = [12, "Admin"];
console.log(person.role);
//# sourceMappingURL=array%20and%20objects.js.map