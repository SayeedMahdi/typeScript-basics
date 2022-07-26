var Role;
(function (Role) {
    Role[Role["admin"] = 12] = "admin";
    Role["author"] = "au";
    Role["user"] = "some";
})(Role || (Role = {}));
;
var person2 = {
    name: "mahdi",
    age: 34,
    role: Role.author
};
console.log(person2.role);
//# sourceMappingURL=app.js.map