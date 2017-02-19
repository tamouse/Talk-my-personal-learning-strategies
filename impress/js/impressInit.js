
/*
   Last, but not least.

   To make all described above really work, you need to include impress.js in the page.
   I strongly encourage to minify it first.

   In here I just include full source of the script to make it more readable.

   You also need to call a `impress().init()` function to initialize impress.js presentation.
   And you should do it in the end of your document. Not only because it's a good practice, but also
   because it should be done when the whole document is ready.
   Of course you can wrap it in any kind of "DOM ready" event, but I was too lazy to do so ;)

   The `impress()` function also gives you access to the API that controls the presentation.

   Just store the result of the call:

   var api = impress();

   and you will get three functions you can call:

   `api.init()` - initializes the presentation,
   `api.next()` - moves to next step of the presentation,
   `api.prev()` - moves to previous step of the presentation,
   `api.goto( idx | id | element, [duration] )` - moves the presentation to the step given by its index number
   id or the DOM element; second parameter can be used to define duration of the transition in ms,
   but it's optional - if not provided default transition duration for the presentation will be used.

   You can also simply call `impress()` again to get the API, so `impress().next()` is also allowed.
   Don't worry, it wont initialize the presentation again.

   For some example uses of this API check the last part of the source of impress.js where the API
   is used in event handlers.

 */

var api = impress();

api.init();

api.localKeyPressHandler = function(e) {
  console.log("key: ",e.key, "keyCode: ", e.keyCode);
  switch (e.key) {
    case "o":
    case "O":
    case "End":
      api.goto(overview);
      e.preventDefault();
      break;

    case "n":
    case "N":
      api.next();
      e.preventDefault();
      break;

    case "p":
    case "P":
      api.prev();
      e.preventDefault();
      break;

    case "Home":
      api.goto(title);
      e.preventDefault();
      break;
  }
}

$(function() {
  $('body').on('keydown', api.localKeyPressHandler);
})
