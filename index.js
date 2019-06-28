var submitBtn1 = $('.submit-btn1');

submitBtn1.on("click", storeText1);

function storeText1(e) {
  e.preventDefault();
  var inputOne = $('.step1-input').val();
  var container = $('.step-one-container');
  container.append(`<p class="theNotes">${inputOne}</p>`);
  $('.step1-input').val("");
}

var submitBtn2 = $('.submit-btn2');

submitBtn2.on("click", storeText2);

function storeText2(e) {
  e.preventDefault();
  var inputTwo = $('.step2-input').val();
  var container = $('.step-two-container');
  container.append(`<p class="theNotes">${inputTwo}</p>`);
  $('.step2-input').val("");
}
