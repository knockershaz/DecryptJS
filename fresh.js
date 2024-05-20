const aesjs = require("aes-js");

function base64ToBuffer(data) {
    let bufferObj = Buffer.from(data, "base64");
    return bufferObj;
}

let data = "63N5EfJstRrtWq40H10iAX9p1Q17Re7UR625BPZFh3M3ibQczshQthupyGxbOsFFBmY826yZ8PNGlEOpJcpiHfWztv4fbrqELUnOOJXZjYgqrp6DHZqQ7Ar+ZZjcORMCSWL6ncLY3plL0e0z05GTYHLloDK9ZoylqbZJxbnXG6ix+tIa4GcLTrEb7PCToRn0RPhAE0lHIKgi+Xz7/JTUfOSiNikbo5PE5CSZxxq5i5pkWlMieur6qBVllz6WjSyb1LRRG4OE6l2AW9YarUZO5CbuSd2dd6oWDCUxfAeyG+XfbMRQpTvkzm/9Mz3cAhc4zTpDWimI4An3L1lnif1tJcT0LxTZj1HUY8aCnf4HBX/EMOe4Cd05yivgZcpZvA3fEpJFJXzPgzOPBFSGuNTjZe2ozMiS0UknmSgIy+RC+CviWsIPNJT5q2IO56cUYdleoYz33cGu07g5l3aEJeg0u7dM4OtK3zaUAKZ9it6g/VOkeo1SJ5BtjxqSLjNYLofNmV5O+B5r5Bte5c81q7rse3OkSxg2cRQhVG714Xv+uqoyzG3PV76cvxVMlDJtCYK1Kov1vYQHaK1mhAT2H8yQwGC5j5Pj22iPBvS2Zkt8+nDm4goPd1C9M+SZqM+QCY+Zo3n/TyOknu/q+7xTzji+TH4ldGiQY95FkT5SMHoSbaxFlcUTdQISG6YpzQyOXBjCakgXUfOx9kj9+p1SSLJks4DYskG4Rm9k+bIKxah806F+Iq2Ko29zjowScws3UBBT34Fc0DDFPSYBffYKgQzSfSPAbIvhOidyGDkd5FnpJlObPbHMIxNrrP1lRs7xV+xsCzqslr4DuJ+3Q4UNxxq1jYa7LxNV4a9UuoIwOXa3GaSwcR3cRq3K6U1yDwv/T23GfgkNKdSBQnhZcD1A5lHpavDM8ENASR2/FSDV2wPjSB+H1siWJY6SvBMdyLviRuKsJ4c12ajOeQpu0057KBw8xyjxxgLzXaOnYmjkmCwe2xBA3Dcbkzu5RHgTdCjDLsbtBW6WYxvjNhvdI6BOrLxAPOubm7iXCquAgQjoHn/pk3CeKyz/Q5h83Ozuuh2sRdq0CrjVWdbXNxRLB9XMdtynl+sSXAkXsWkFprV2A8yJckALFsz7xNA+yqP7mOsq3S++GNtc5iHlhIjNbNtn5AuYZnuGC2V6fUW2Rq6Lmi04TLko9OND98Hr1GOxOPTTlart7FmGb3AmrowLq5m5v7BYA2QmO5UNsn6fx57HIm+37w7pbcpwZUdL7mTvuxbvSLF+iknxNMz7PRzkD8YyFhJ1C1dGQc2xt2eOW4Cxse4Qvk3KLtOrWIYd71gel0OYwyQ2yNnNPjcvEDiWaENu84T/oyPTPqugBIUYpnpHzvGYJdETn52AYw+XMsgp47owz6b3UvL4WVf6pX7V+eUvWaYD52TSW9VblLPAeNlqgEDEK1OFjx9e3N8hijW0K0yzAenPwZzK9Y/GOiFK45l1LbSfmG1SXk/8sK7wjx0o7bvh/RaO0tqiLPBC5obc7FYZtiQoeVIZpCw/JDt6JtFTs4YKJ1kVnYQAedcV+okEKGQJ2Va7MYePxEsyKA3xwRnylpkd4EQQ4vQ3yyCJXNt2zrQFfOgjGrRux4rSv55Ujw1o3UC00Y/lc8hJkl/b59XLy3xZUjhBDQCgImR7lNxhMKcHoDZY3qLUWA70nqcxY9n+mnMV6FFU/K5wAT9fFK/XjUyGkk4LcLXgfYj80iEtm05aI4lJDxMA5aJ/7syUeeh7VY1c+I7DCVIfejZ9StUuNkbkOJM/Et5egWVeWZsMgAbqag6RfBDuwSENYGfB3ev8TtC6652ADPHY0LgLTI0grBL+TYK3yl/w0dXP82NxyJaLSBYSZyAlE16F8Kmma+PNEzeFSQTwmK1coxHK2GFrpsDj0J";

let encryptedData = "63+cDX60NWsMgiH1552xS2QLYVJNn94UKORah5v2A0fOG7idAtnRJFPGOOCHanb1zhcSQUTYfpGLZWCM1WIezwRmusEM2ngDzbzIkAfeo5MgCOhj1/ZP7HIKWksnXYMf2T4lTWci7uciZTFZ2wz0bLZM9clivxAE9rqTDDjavqCzVAQkcjdrheLZD8EXciOhsThWBJXIx2+tC6g8oFToY8/mYiGeDIF7KaZYZQPVNxpP7OXgXbjejzgEd2+zqwyluH"

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

var parts = ['7', '0', '5', '4', '6', '3', '2', '8', '1'];
var counter = 0;

while (true) {
  switch (parts[counter++]) {
    case "0":
      var base64Data = base64ToBuffer(encryptedData.substring(8988));  // find helper function
      continue;
    case "1":
      decryptedData = JSON.parse(decryptedData);
      console.log("Decryption result:", decryptedData);
      return decryptedData;
    case "2":
      decryptedBytes = aesjs.utils.utf8.toBytes(decryptedBytes);
      continue;
    case "3":
      var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
      decryptedBytes = aesCbc.decrypt(base64Data);                      // base64 data ?
      continue;
    case "4":
      var keyPart = encryptedData.substr(0, 1);
      var ivPart = encryptedData.substr(1, 1);
      var key = keyStorage[keyPart];
      var iv = ivStorage[ivPart];
      continue;
    case "5":
      if (!base64Data) return null;
      continue;
    case "6":
      key = aesjs.utils.utf8.toBytes(key);
      iv = aesjs.utils.utf8.toBytes(iv);                       // little confusing with hex
      continue;
    case "7":
      console.log("Encrypted data:", encryptedData);
      continue;
    case "8":
      var decryptedData = aesjs.utils.utf8.fromBytes(decryptedBytes);
      continue;
  }
  break;
}
