// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-file-rating-semantic-ui.js.
import { name as packageName } from "meteor/perfectsofttunisia:autoform-file-rating-semantic-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-file-rating-semantic-ui - example', function (test) {
  test.equal(packageName, "autoform-file-rating-semantic-ui");
});
