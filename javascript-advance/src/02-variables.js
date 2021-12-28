function render(id, elem) {
  document.getElementById(id).innerHTML = String(elem);
}

var var_example = "hello i'm var";
let let_example = "hello i'm let";
const const_example = "hello i'm const , i'm not changable";

render("var", `<p>${var_example}</p>`);
render("let", `<p>${let_example}</p>`);
render("const", `<p>${const_example}</p>`);

// we can re declare variables with var keyword
var var_example = "this is redeclared";
render("var", `<p>${var_example}</p>`);

// we cannot re declare let | const variables
// both will throw errors
let let_example = "let declared again";
// also, const variables are const and are not changable
const const_example = "this is re declared";
render("let", `<p>${let_example}</p>`);
render("const", `<p>${const_example}</p>`);
