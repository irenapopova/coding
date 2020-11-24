// Other way to do it  🤓
function zodiac1(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    yourZodiac: function() {
      let singNames = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn"
      ];
      let userBDay = parseInt(this.birthDay);
      let month = parseInt(this.birthMonth);
      let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
      let yourZodiacName =
        userBDay > endsAt[month] ? singNames[month] : singNames[month - 1];
      return `Hey ${this.userName}, your zodiac sing is ${yourZodiacName}`;
    }
  };
  return result.yourZodiac();
}
console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way");
