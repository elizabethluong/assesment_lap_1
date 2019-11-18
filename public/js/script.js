$(document).ready(() => {
  let form = document.getElementById("form");
  $("form").submit(event => {
    event.preventDefault();
    $("h1").toggle();
    axios.post("").then(response => {
      quote = response.data;
      $("#text").css({
        "text-align": "center",
        "min-height": "150px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      });

      $("#text").html(quote);
    });
  });
});
