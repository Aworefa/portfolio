document.getElementById("doas").addEventListener("click", () => {
    let label1 = document.querySelector("#label1");
    let label2 = document.querySelector("#label2");
    let label3 = document.querySelector("#label3");
    let days = parseInt(document.querySelector("#dd").value);
    let month = parseInt(document.querySelector("#mm").value);
    let year = parseInt(document.querySelector("#yyyy").value);
    var thedate = new Date();
  
    var birthday = new Date(`${month} ${days},${year}`);
    let disday = parseInt(thedate.getDate());
    let disyear = parseInt(thedate.getFullYear());
    let dismonth = parseInt(thedate.getMonth() + 1);
  
    let recentdate = new Date(`${dismonth} ${disday},${disyear}`);
  
    if (days >= 30 && month == 2) {
      document.querySelector("#validday").style.color = "red";
      document.querySelector("#label1").style.color = "red";
    }
    if (days > 31) {
      document.querySelector("#validday").style.color = "red";
      document.querySelector("#label1").style.color = "red";
      $.querySelector("#agedays").innerHTML = "--";
    }
    if (month > 12) {
      document.querySelector("#validmonth").style.color = "red";
      document.querySelector("#label2").style.color = "red";
      $.querySelector("#agemonths").innerHTML = "--";
    }
    if (year > disyear) {
      document.querySelector("#validyear").style.color = "red";
      document.querySelector("#label3").style.color = "red";
      $.querySelector("#ageyears").innerHTML = "--";
    } else if (month > dismonth && days < disday) {
      document.querySelector(".agedays").innerHTML = disday - days;
      document.querySelector(".ageyears").innerHTML = disyear - year - 1;
      document.querySelector(".agemonths").innerHTML = dismonth - month + 12;
    } else if (days > disday && month >= dismonth) {
      document.querySelector(".agedays").innerHTML = disday - days + 31;
      document.querySelector(".ageyears").innerHTML = disyear - year - 1;
      document.querySelector(".agemonths").innerHTML = dismonth - month + 11;
    } else if (disday < days && month < dismonth) {
      document.querySelector(".agedays").innerHTML = disday - days + 31;
      document.querySelector(".ageyears").innerHTML = disyear - year;
      document.querySelector(".agemonths").innerHTML = dismonth - month - 1;
    } else {
      document.querySelector(".ageyears").innerHTML = disyear - year;
      document.querySelector(".agemonths").innerHTML = dismonth - month;
      document.querySelector(".agedays").innerHTML = disday - days;
    }
  });
  
  document.querySelector("#clear").addEventListener("click", () => {
    // document.querySelector('#clear').classList.add("fa-spin");
    location.reload();
  });
  