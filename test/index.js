import test from "tape"
import $ from "jquery"
import fullscreener from "../src/"

test("fullscreener", (t) => {
  let windowHeight = $(window).height();
  let el = $("<div id='test' data-fullscreener></div>");
  $("body").html(el);
  el = $('#test');
  fullscreener.refresh();
  t.equal(el.height(), windowHeight, "Elements with data-fullscreener is same as Window height");
  t.end()
})
