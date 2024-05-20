const aesjs = require("aes-js");

function base64ToBuffer(data) {
    let bufferObj = Buffer.from(data, "base64");
    return bufferObj;
}

let encryptedData = "902jRcKHKL6MfRcGGqYzDCWbHJr9VnMBA90bmQF03LHlZJvOSNCF5tNOliRByCFgm9jvWuzbV9dviMiRmL3t3BOocD1zjHCKaa9V4SbLwYKtYU9eDOi46Uq98P8m7wBh3JGz44ZDlKAfjKi8Yjj7eRSzel0ZLbsbrK8ckJH7RwBoP1FnL55c9qqvuVivAskozzTYd+ifEaE1sSoNGFcTRUa2TtdZWS3jKUTnfW/KKnTpGi/ortMFEJoJJhelq1sFeQFYbK4AB+bQoiydniPC60fJvyiOmjM5Oop7jhn9goRM7lbtjvhFs6vYSU6F8KLVHhLB/xQQ+2TLdhI5mrYfB/tOjlxv9KARchUeuhzlvkcHFlmlH/g6Jp9YmfplnKJtwHGOKaTPEA42xR3Em7cpuzW62s4RnO/XXWSY4znA2YsUOQt0jOBnhHHW4NoHCnGxKTIBJu+mYHx1KnNAUJMdRSlCTnEnuz0wPZ7oXFe1ZTX30wOZTr8E/7bXE+b1pgvD2Uh4l/1WSpcS1Z2JMkIYrlap3RxG4LJY+2QtnYs9QKVCQWl/aAD60qDR7UybxOXos0OiCsRtZ02v+tNRHOiKeFpZ2lLmsQnpkTZIEuqzX4o6Z54asWxP4tkvfaOb6spVIT0xiiPzGeEzYa43dKJGyD0AMeLMXZqBSIMtlGC9O8q/44nQxOvdy25YyC2ID+eF9+xo15silkTAryFLIjamkeSyR+2823n4FoO58T1wnNtIBz84291nfMa+kBYXo2QPnj0aQi9T+K2Ef/4VHGlo6t7w9zK9pTYPQXjeGxvJS2n0F/u8jm1CGlWZpQkp9fCCJAu1HqjZnQKR7gRfyd4BfnmBzSWZi4Cx6FxZI89sLz6TQGA6mcfxDFQU8EYpZx9F789OheauzH/VFWik38E+f52D3y1g7hMEWS46YN7S02R5f+wjyd9+lY0X5mI4yie5yzXSXViZCJFlMtNA/Q0mswIp+uozqmAL9ax0ap/B2ad0FTM9fPdOhF4IPrWWoofpph5n7hB3lIjoLKsMkAB1gkQ3rNSbVJQERraWlXFqENAmaLR0PyfTzZmwdm7xpRgBN1DcutT9NRAIQkEMA8O4jlQEvHgkYUWfnHjBvTbJOK5LBHbYOeNXytjtE09hVYBEQ7sSaGeP9gRega3m9IFbQDZ31KbyGmVCXQ7Gu0IpXVWKrp14UlobIKsM/DKxVZ65BvNVMLEVeonUo1mT8P5APwIsF3CRxUhj5uvRYzWLIaKsM6zmuecUTsTvQ+lobgk2cRQgrNx/S+78L715qpyBeWzrWkPG0atPoC/9R6xT2ou6rfp4mUX1BRu3mFaiS8KmA2aALOM7x9h2+J+rdqzrtTYOIoD/rGi0/lPDId8UOLfrbI8pTLb2p2Ftl9BEMW6J3JMaafx4gr2sQ/sjYUyRj1PkepgTRQjutO6LIBTfwMSksi0cADt3UIb1WX6HbY82D2M3JXczV9RnpjClLNux7DAOPdI//GXtVDqcfGORgRi1GGTj5Faj03qGCC+MQiOVxMK4JQHzbp2KUavXT8jITRvS2RBnRaL9r+2UoG9lVjo7DvmySzPvJ9fo3dHWTOPRa6ex/+wjqYocwkyTeXeIMXDN46qoBzBhdE7BnkQKR27KtRsG4rnAet9i9QxihhDBVm8cZRaW/Z/IJQYPUnsnkO0d/DcPl0/E2DXoZH89FJvItu4Hsv5WIPCgL4h0MVY2gJ1mQj9JUnvPiD0TNiLeT+crLJyoWFac1gvND/a+8hiIDkzPhu9CmB93AKezTVcmhGPpvFHhGbqFYl1aL3AtqeCOj6zTVnCv7WnZo+2YhPIsRfUTXDuM8otnFi263Pm9bLjsQ02FNlrp1BTBWf6mTPtDjcuSlHRXMVqRx8hVqkFM8hlY2vGTRBwOQuRIsa58j3";


let keyStorage = [
    "ova5w2fuej87hv6b",
    "jbic95s45p7e6s30",
    "7mmm6gfd5hs36b2d",
    "35vcks7m7mxscikn",
    "b1dq078uo8f4xqka",
    "sgdns6bry78ymnwa",
    "qpm1pdzm9en7wjtv",
    "b6tfohtkzycdc09a",
    "dvfltftoxfyu8wwz",
    "aq580fnbnbx3vxfn",
]

let ivStorage = [
    "4z2oazqn2m71etzi",
    "b7jlt31dew3lszqb",
    "8agu0jka1837keua",
    "jqv1bmgbm9cwhig7",
    "c90zdpqedmr49v79",
    "da5fuf33ehql15p0",
    "dhw6s5fbkhlgumq9",
    "29r8hzphpsbm746t",
    "7mrg45fcyqcjzeac",
    "7rbe9u3fura9at3t",
]
// const iv = encryptedData.substring(startIndex, endIndex1);
// const key = encryptedData.substring(startIndex2, endIndex2);


const initializationVector = ivStorage[0];
const secretKey = keyStorage[8];


// const byteData = base64ToBuffer(encryptedData.slice(2));
var encryptedBytes = aesjs.utils.hex.toBytes(encryptedData.slice(2));

// console.log(byteData);
var aesCbc = new aesjs.ModeOfOperation.cbc(secretKey, initializationVector);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);
// const decrypted = aesjs.decrypt(secretKey, initializationVector, byteData);


const jsonData = JSON.parse(decryptedBytes.toString());

console.log("Decryption successful:", jsonData);
return jsonData;