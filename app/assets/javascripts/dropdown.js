$(document).ready(function(){
  $( "#dropdown-btn" ).click(function() {
    $(".dropdown-content").toggle();
  });

  //makes menu disappear when you click somewhere else on the page:
  $(document).click(function() {
    if ($(".dropdown-content").is( ":visible" )) {
      if ($(event.target).is('#dropdown *')) {
        return;
      }
      else {
        $(".dropdown-content").toggle();
      }
    }
  });
});

$(document).ready(function(){
  $( "#language-picker-btn" ).click(function() {
    $(".icon-sort-down-black").toggleClass("rotated");
    $(".language-picker-content").toggle();
  });

  //makes menu disappear when you click somewhere else on the page:
  $(document).click(function() {
    if ($(".language-picker-content").is( ":visible" )) {
      if ($(event.target).is('#language-picker *')) {
        return;
      }
      else {
        $(".language-picker-content").toggle();
      }
    }
  });
});
