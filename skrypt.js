var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var art1 = document.getElementById('art1');
var art2 = document.getElementById('art2');

function show1() {
  art1.className = "";
  art2.className = "hidden";
}

function show2() {
  art2.className = "";
  art1.className = "hidden";
}


link1.addEventListener('click', show1);
link2.addEventListener('click', show2);

let commentBox = document.getElementById('commentBox');
let sendComment = document.getElementById('sendComment');
let commentName = document.getElementById('commentName');
let commentContent = document.getElementById('commentContent');

let commentsList = [];

function renderComments() {

  while(commentBox.firstChild) {
    commentBox.removeChild(commentBox.firstChild);
  }

  commentsList.forEach(function(comment) {
    let commentWrapper = document.createElement('div');
    commentWrapper.className = 'comment';

    let userInfo = document.createElement('div');
    userInfo.className = 'userInfo';

    let name = document.createElement('span');
    name.className = 'name';

    let date = document.createElement('span');
    date.className = 'date';

    let content = document.createElement('div');
    content.className = 'content';

    let operations = document.createElement('div');
    operations.className = 'operations';

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete';

    name.append(comment.name);
    date.append(comment.date.toDateString());
    content.append(comment.content);

    userInfo.append(name);
    userInfo.append(date);

    deleteButton.append('x');

    operations.append(deleteButton);

    commentWrapper.append(userInfo);
    commentWrapper.append(content);
    commentWrapper.append(operations);

    commentBox.append(commentWrapper);

    deleteButton.addEventListener('click', deleteComment);
  });
}

function deleteComment(event) {
  let comment = event.target.parentElement.parentElement;
  comment.remove();
}

function addComment(event) {
  event.preventDefault();

  if (commentName.value == '' || commentContent.value == '') {
    return;
  }

  let comment = {
    name: commentName.value,
    date: new Date(),
    content: commentContent.value,
  }

  commentsList.push(comment);

  cleanupCommentFields();
  renderComments();
}

function cleanupCommentFields(){
  commentName.value = "";
  commentContent.value = "";
}

sendComment.addEventListener('click', addComment);
