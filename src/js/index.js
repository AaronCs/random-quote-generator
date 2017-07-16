var colorArray = ["#C70039", "#65C0E4", "#4FAA9C", "#4F5DAA", "#AA4F52", "#4F5DAA", "#4FAAA7"];
var random;

var shareQuote = function(quote) {

};

var getQuoteSuccess = function(data) {
  random = Math.floor(Math.random(0, colorArray.length) * colorArray.length);
  $("body, .share, .button-quote").animate({
    backgroundColor: colorArray[random],
  }, 750);
  $(".color").animate({
    color: colorArray[random]
  }, 50);
  $(".content-quote-box").html("\"" + data.quote + "\"");
  $(".content-author-box").html("-" + data.author);
  $(".twitter-share").attr("href", "https://twitter.com/intent/tweet?text=" + data.quote + "\n" + "-" + data.author);
  $(".content-box").slideDown(500);
};

function tweetQuote() {
  $.ajax({
    method: "POST",
    url: "https://api.twitter.com/1.1/statuses/update.json",
    success: function() {

    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Twitter-Authorization", "	mrMgiJxCGAIskK8GrtJEGXLxz")
    }
  });
}

function getQuote() {
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    dataType: 'json',
    success: getQuoteSuccess,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "aIQfh0Bi7vmshqsEW1PmyeUZDgHap1PMVLHjsnaV0iToi45qfe")
    }
  });
};

$(function() {
  $(".button-quote").on("click", function() {
    $(".content-box").slideUp('500', function() {
      getQuote();
    });
  });
});
