$( document ).ready(function() {
   const settings = {
     async: true,
     crossDomain: true,
     url: "https://type.fit/api/quotes",
     method: "GET",
   };

   $.ajax(settings).done(function (response) {
      const quotes_lists = JSON.parse(response);

      // ========== Random Number Generator ==========
      function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let q_number = getRandomNumberBetween(0, 1643); 
      const author_name = quotes_lists[q_number]["author"];
      const quotes_content = quotes_lists[q_number]["text"];
      // ========== Random Number Generator ==========
     
      let text_box = document.querySelector('.text');
      let author_box = document.querySelector(".author");
      // console.log(text_box);
      text_box.innerHTML = quotes_content;
      author_box.innerHTML = author_name;
    //  let objectLength = Object.keys(data).length; //1643
   });
    






});