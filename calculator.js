var arr = [];
var num_val;
var result;
function getVal(str_val,operator_val) {
  document.getElementById("input_val").value += str_val;
}

// All clear the value in the input field.
function all_clearVal() {
  document.getElementById("input_val").placeholder = 0;
  document.getElementById("output_val").placeholder = 0;
  document.getElementById("input_val").value = "";
  document.getElementById("output_val").value = "";
}

// CLear the last value in the input field.
function clearVal() {
  let current_val = document.getElementById("input_val").value;
  document.getElementById("input_val").value = current_val.substring(
    0,
    current_val.length - 1
  );
}

// Displaying the answer final value.
function finalVal() {
  num_val = document.getElementById("input_val").value;
  document.getElementById("output_val").value = eval(num_val);
}
