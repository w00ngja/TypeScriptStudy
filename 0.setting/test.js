const logger = (function () {
  let logCount = 0;
  function log(message) {
    console.log(message);
    logCount++;
  }
  function getLogCount() {
    return logCount;
  }
  return {
    log,
    getLogCount,
  };
})();

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

const teddy1 = Cat('nana', 8);
console.log(teddy1.name);

function RockBand(members) {
  const that = this;
  this.members = members;
  this.perform = function () {
    setTimeout(function () {
      that.members.forEach(function (member) {
        member.perform();
      }, 1000);
    });
  };
}

var theOralCigarettes = new RockBand([
  {
    name: 'takuya',
    perform: function () {
      console.log('Sing: aewew');
    },
  },
]);
