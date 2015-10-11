import test from "tape"
import fullscreener from "../src/"

test("fullscreener", (t) => {
  console.log(t);
  t.plan(1)
  t.equal(true, fullscreener(), "return true")
})
