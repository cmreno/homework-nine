import * as MODEL from "../app/model.js";
function init() {
  $("nav a").click(function (e) {
    //you can use e to represent event

    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "();";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
  });
}

$(document).ready(function () {
  init();
});
