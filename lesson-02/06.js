// code

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let copiedPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));

copiedPassportWithAddress.address.city = "Bobryisk";

console.log("Исходный объект:", passportWithAddress);
console.log("Скопированный объект с измененным city:", copiedPassportWithAddress);


// let passportWithAddress1 = JSON.parse(JSON.stringify(passportWithAddress));
// passportWithAddress1["address"]["city"] = "Bobryisk";
//
// console.log(passportWithAddress.address.city);
// console.log(passportWithAddress1.address.city);