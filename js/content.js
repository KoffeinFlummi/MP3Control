console.log("test");
console.log($("body").children().length == 1 && $("body").children()[0].nodeName == "VIDEO" && $("source").attr("type") == "audio/mpeg");
if ($("body").children().length == 1 && $("body").children()[0].nodeName == "VIDEO" && $("source").attr("type") == "audio/mpeg") {
  $("video").css("width", "80%");
}