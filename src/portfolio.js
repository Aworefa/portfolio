var firstsection = document.getElementById("firstsection");
var secondsection = document.getElementById("secondsection");
var thirdsection = document.getElementById("thirdsection");
var fourthsection = document.getElementById("fourthsection");
document.querySelector("#but1").addEventListener("click", () => {
  firstsection.classList.remove("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.add("firsttag");
});
document.querySelector("#but2").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.remove("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.add("firsttag");
});
document.querySelector("#but3").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.remove("firsttag");
  fourthsection.classList.add("firsttag");
});
document.querySelector("#but4").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.remove("firsttag");
});
document.querySelector("#firstnext").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.remove("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.add("firsttag");
});
document.querySelector("#secondnext").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.remove("firsttag");
  fourthsection.classList.add("firsttag");
});
document.querySelector("#thirdnext").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.remove("firsttag");
});
document.querySelector("#firstback").addEventListener("click", () => {
  firstsection.classList.remove("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.add("firsttag");
});

document.querySelector("#secondback").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.remove("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.add("firsttag");
});
document.querySelector("#thirdback").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.add("firsttag");
  thirdsection.classList.remove("firsttag");
  fourthsection.classList.add("firsttag");
});
let $ = document;
const btn = $.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (btn.className == "toggle-btn") {
    $.querySelector(".month").style.color = "indigo";
    $.querySelector(".year").style.color = "black";
    var priceofyear = Number($.querySelector(".od").innerHTML);
    $.querySelector(".od").innerHTML = priceofyear / 12;
    var priceof1year = Number($.querySelector(".od1").innerHTML);
    $.querySelector(".od1").innerHTML = priceof1year / 12;
    var priceof2year = Number($.querySelector(".od2").innerHTML);
    $.querySelector(".od2").innerHTML = priceof2year / 12;
    // $.querySelector('.price').innerHTML = priceofyear
    $.querySelector("#abbv").innerHTML = "/mo";
    $.querySelector("#abbv1").innerHTML = "/mo";
    $.querySelector("#abbv2").innerHTML = "/mo";
    var priceofback = Number($.querySelector("#gogo").innerHTML);
    $.querySelector("#gogo").innerHTML = priceofback / 12;
    var priceof1back = Number($.querySelector("#gogo1").innerHTML);
    $.querySelector("#gogo1").innerHTML = priceof1back / 12;
    var priceof2back = Number($.querySelector("#gogo2").innerHTML);
    $.querySelector("#gogo2").innerHTML = priceof2back / 12;
    // $.querySelector('.price').innerHTML = priceofyear
    $.querySelector("#abb").innerHTML = "/mo";
    $.querySelector("#abb1").innerHTML = "/mo";
    $.querySelector("#abb2").innerHTML = "/mo";
  }
  if (btn.className == "toggle-btn active") {
    $.querySelector(".year").style.color = "indigo";
    $.querySelector(".month").style.color = "black";
    var priceofyear = Number($.querySelector(".od").innerHTML);
    $.querySelector(".od").innerHTML = priceofyear * 12;
    var priceof1year = Number($.querySelector(".od1").innerHTML);
    $.querySelector(".od1").innerHTML = priceof1year * 12;
    var priceof2year = Number($.querySelector(".od2").innerHTML);
    $.querySelector(".od2").innerHTML = priceof2year * 12;
    // $.querySelector('.price').innerHTML = priceofyear
    $.querySelector("#abbv").innerHTML = "/year";
    $.querySelector("#abbv1").innerHTML = "/year";
    $.querySelector("#abbv2").innerHTML = "/year";
    var priceofback = Number($.querySelector("#gogo").innerHTML);
    $.querySelector("#gogo").innerHTML = priceofback * 12;
    var priceof1back = Number($.querySelector("#gogo1").innerHTML);
    $.querySelector("#gogo1").innerHTML = priceof1back * 12;
    var priceof2back = Number($.querySelector("#gogo2").innerHTML);
    $.querySelector("#gogo2").innerHTML = priceof2back * 12;
    // $.querySelector('.price').innerHTML = priceofyear
    $.querySelector("#abb").innerHTML = "/year";
    $.querySelector("#abb1").innerHTML = "/year";
    $.querySelector("#abb2").innerHTML = "/year";
  }
});
$.querySelector("#pricingbtn1").addEventListener("click", () => {
  $.querySelector("#result").innerHTML = $.querySelector("#arcade").innerHTML;
  $.querySelector("#rprice").innerHTML = Number(
    $.querySelector(".od").innerHTML
  );
});
$.querySelector("#pricingbtn2").addEventListener("click", () => {
  $.querySelector("#result").innerHTML = $.querySelector("#advance").innerHTML;
  $.querySelector("#rprice").innerHTML = Number(
    $.querySelector(".od1").innerHTML
  );
});
$.querySelector("#pricingbtn3").addEventListener("click", () => {
  $.querySelector("#result").innerHTML = $.querySelector("#pro").innerHTML;
  $.querySelector("#rprice").innerHTML = Number(
    $.querySelector(".od2").innerHTML
  );
});
$.querySelector("#change").addEventListener("click", () => {
  firstsection.classList.add("firsttag");
  secondsection.classList.remove("firsttag");
  thirdsection.classList.add("firsttag");
  fourthsection.classList.add("firsttag");
});

$.querySelector("#online").addEventListener("click", () => {
  if ($.querySelector("#online").checked === true) {
    $.querySelector("#result1").innerHTML =
      $.querySelector("#textonline").innerHTML;
    $.querySelector("#rprice1").innerHTML = Number(
      $.querySelector("#gogo").innerHTML
    );
  }
});
$.querySelector("#large").addEventListener("click", () => {
  if ($.querySelector("#large").checked === true) {
    $.querySelector("#result2").innerHTML =
      $.querySelector("#textonline1").innerHTML;
    $.querySelector("#rprice2").innerHTML = Number(
      $.querySelector("#gogo1").innerHTML
    );
  }
});
$.querySelector("#Customizable").addEventListener("click", () => {
  if ($.querySelector("#Customizable").checked === true) {
    $.querySelector("#result3").innerHTML =
      $.querySelector("#textonline2").innerHTML;
    $.querySelector("#rprice3").innerHTML = Number(
      $.querySelector("#gogo2").innerHTML
    );
  }
});
$.querySelector("#result4").addEventListener("click", () => {
  if (btn.className == "toggle-btn") {
    $.querySelector("#total").innerHTML = Number($.querySelector("#rprice3").innerHTML) + Number($.querySelector("#rprice2").innerHTML) + Number($.querySelector("#rprice1").innerHTML) + Number($.querySelector("#rprice").innerHTML) + "/mo";
  }if (btn.className == "toggle-btn active") {
    $.querySelector("#total").innerHTML =
      Number($.querySelector("#rprice3").innerHTML) +
      Number($.querySelector("#rprice2").innerHTML) +
      Number($.querySelector("#rprice1").innerHTML) +
      Number($.querySelector("#rprice").innerHTML) +
      "/year";
  }
});
