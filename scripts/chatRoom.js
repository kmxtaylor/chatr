//window.onload makes the initial things happen only after the page is loaded
var postsAvailable = 3;
var postNum = 0;
var post1Filled = false; //you can only make one post for now, maybe look into classes to add more posts?

window.onload = function () {
  //setting the post boxes and likes/dislikes as hidden
  document.getElementById("postBox" + postNum).style.display = "none";
  document.getElementById("like" + postNum).style.display = "none";
  document.getElementById("dislike" + postNum).style.display = "none";
}

function post() {
  for (var postNum = 0; postNum < postsAvailable; postNum++) {
    //if the post box with this post number isn't displayed, give it the text and display it

    if (document.getElementById("postBox" + postNum).style.display == "none") {
      if (postNum == 0) {
        document.getElementById("noPosts").style.display = "none";
      }
      var postTextEntered = document.getElementById("enteredPost").value;
      document.getElementById("textSpace" + postNum).innerHTML = postTextEntered;
      document.getElementById("postBox" + postNum).style.display = "block";
      console.log("posted post #", postNum)
      break;
    }
    else {
      console.log("postBox style display not 'none', it is ", document.getElementById("postBox" + postNum).style.display.value)
    }
  }

  // var postTextEntered = document.getElementById("enteredPost").value;
  // if(post1Filled == false) {
  //   document.getElementById("textSpace0").innerHTML = postTextEntered;
  //   post1Filled = true;
  //   document.getElementById("noPosts").style.display = "none";
  //   document.getElementById("postBox0").style.display = "block";
  // }
  // // else {//need to add more else ifs and variables for more posts
  // //   document.getElementById("textSpace2").innerHTML = postTextEntered;
  // //   document.getElementById("postBox0").style.visibility = "visible";
  // //   document.getElementById("postBox2").style.visibility = "visible";
  // //  }
}

function sendComments(postNum) {
  // create a new div element, gives it a class name, make it contents the comment, then adds this as a child under the commentList element
  var oneComment = document.createElement("div");
  oneComment.className = 'commentMessage';
  oneComment.innerHTML = document.getElementById("commentBox" + postNum).value;
  document.getElementById("commentList" + postNum).appendChild(oneComment);
}

function thumbsUp(postNum) {
  // shows thumbs up & hides thumbs down
  document.getElementById("like" + postNum).style.display = "block";
  document.getElementById("dislike" + postNum).style.display = "none";
}

function thumbsDown(postNum) {
  // shows thumbs down & hides thumbs up
  document.getElementById("like" + postNum).style.display = "none";
  document.getElementById("dislike" + postNum).style.display = "block";
}

//it seems like the forums might each need to be separate pages with mostly duplicated code
//and clicking a topic would send user to that page
function forumTopicClicked(topic) {
  var message = "Sorry, but there is no " + topic + " Forum yet, only the General Forum.";
  alert(message);
}

function brokenPostButtonClicked(button) {
  var message = "Sorry, but there is not yet the ability to post " + button + ", only plain text.";
  alert(message);
}