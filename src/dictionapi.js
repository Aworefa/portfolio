document.querySelector("#text").addEventListener("change", () => {
  document.querySelector("body").style.fontFamily =
    document.querySelector("#text").value;
});
document.querySelector("#search").addEventListener("click", () => {
  let word = document.querySelector("#nametofind").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var apires = data[0];
      document.querySelector("#word").innerHTML = apires.word;
      var audio = "";
      for (let i = 0; i < apires.phonetics.length; i++) {
        const element = apires.phonetics[i];
        if (element.text !== "" && element.audio !== "") {
          audio = element.audio;
        }
        console.log(element);
      }
      document.querySelector("#audio").src = audio;
      document.querySelector("#over").addEventListener("click", () => {
        console.log(document.querySelector("#audio").src);
        document.querySelector("#see").load();
        document.querySelector("#see").play();
        console.log(2);
      });
      var meaning = apires.meanings;
      for (let i = 0; i < meaning.length; i++) {
        var element33 = meaning[i].synonyms;
        console.log(element33);
        for (let q = 0; q < element33.length; q++) {
          var element234 = element33[q];
          console.log(element234);
        }
        if (element33 == "") {
          document.querySelector("#synonyms").innerHTML = "";
          document.querySelector("#synonyms2").innerHTML = "";
        } else {
          document.querySelector(
            "#synonyms"
          ).innerHTML = `${data[0].meanings[0].synonyms[0]}, ${data[0].meanings[0].synonyms[1]} `;
          document.querySelector(
            "#synonyms2"
          ).innerHTML = `${data[0].meanings[1].synonyms[0]}, ${data[0].meanings[1].synonyms[1]} `;
        }
      }

      console.log(meaning);
      // var othermeaning = ""
      // for (let i = 0; i < meaning.synonyms.length; i++) {
      //   const element1 = meaning.synonyms[i];
      //   console.log(element1);
      // }
      // document.querySelector("#synonyms").innerHTML = meaning
      // phonetics
      // console.log(data[0].phonetics[1].audio);
      // firstpartofspeech

      for (let w = 0; w < document.querySelectorAll(".fada").length; w++) {
        const elementr = document.querySelectorAll(".fada")[w];
        elementr.innerHTML = "Synonyms:";
      }

      console.log(data[0].meanings[0].partOfSpeech);

      document.querySelector("#oral").innerHTML = data[0].phonetics[0].text;
      document.querySelector("#type").innerHTML =
        data[0].meanings[0].partOfSpeech;
      document.querySelector("#li1").innerHTML =
        "&#8226" + data[0].meanings[0].definitions[0].definition;
      document.querySelector("#li2").innerHTML =
        "&#8226" + data[0].meanings[0].definitions[1].definition;
      document.querySelector("#li3").innerHTML =
        "&#8226" + data[0].meanings[0].definitions[2].definition;
      document.querySelector("#li4").innerHTML =
        "&#8226" + data[0].meanings[0].definitions[3].definition;
      document.querySelector("#meaning1").innerHTML = "Meaning";
      document.querySelector("#meaning2").innerHTML = "Meaning";

      document.querySelector("#type2").innerHTML =
        data[0].meanings[1].partOfSpeech;
      document.querySelector("#li5").innerHTML =
        "&#8226" + data[0].meanings[1].definitions[0].definition;
      document.querySelector("#li6").innerHTML =
        "&#8226" + data[0].meanings[1].definitions[1].definition;
      document.querySelector("#li7").innerHTML =
        "&#8226" + data[0].meanings[1].definitions[2].definition;
      document.querySelector("#li8").innerHTML =
        "&#8226" + data[0].meanings[1].definitions[3].definition;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});
 var darkmode = document.querySelector(".toggle-btn")
 darkmode.addEventListener('click', ()=>{
  darkmode.classList.toggle('active')
  if (darkmode.className == 'toggle-btn active') {
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('body').style.color = 'white'
  }else{
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('body').style.color = 'black'
  }

 })
