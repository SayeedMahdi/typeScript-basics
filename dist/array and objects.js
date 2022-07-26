var person = {
    name: 'Mahdi',
    age: 20,
    degrees: {
        "class": "eight",
        position: 23
    },
    hoby: ["Football", "handball"],
    role: [2, "Authore"]
};
for (var _i = 0, _a = person.hoby; _i < _a.length; _i++) {
    var hob = _a[_i];
    console.log(hob.match.toString());
}
person.role = [12, "Admin"];
console.log(person.role);
//# sourceMappingURL=array%20and%20objects.js.map