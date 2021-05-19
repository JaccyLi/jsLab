let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (prop in menu) {
    alert(`typeof ${prop} is ${typeof(menu[prop])}`); 
    if (typeof menu[prop] == 'number') {
      menu[prop] *= 2;
      alert(`modified : ${menu[prop]}`)
    }
  }
  alert(menu.width)
  alert(menu.height)
  alert(menu.title)
}
multiplyNumeric(menu);