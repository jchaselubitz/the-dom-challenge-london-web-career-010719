//Counter Stuff
let counter = document.body.querySelector('#counter')
let counterInt = parseInt(counter.innerHTML)
let timeRunner 
function pause() {
    document.getElementById("pause").removeEventListener("click", pause)
    clearInterval(timeRunner)
    document.getElementById("pause").innerText = "resume"
    document.getElementById("pause").addEventListener("click", resume)
}
function resume() {
    document.getElementById("pause").removeEventListener("click", resume)
    timeRunner = setInterval(countUp, 1000)
    document.getElementById("pause").innerText = "pause"
    document.getElementById("pause").addEventListener("click", pause)
}
function countUp() {
    counter.innerText = counterInt += 1
    }
function countDown() {
    counter.innerText = counterInt -= 1
    }

//Like Stuff
let likeButton = document.getElementById("<3")
let likeLocation = document.querySelector('.likes')
function like(){
    currentRow = document.querySelector(`.oneLike${counterInt}`)
    if (currentRow) {
        likeNum = likeNum += 1
        currentRow.innerText = `${counterInt} has ${likeNum} likes.`
    } else {
        likeNum = 0
        likeRow = document.createElement("LI")
        likeRow.className = `oneLike${counterInt}`
        likeRow.innerText = `${counterInt} has ${likeNum} likes.`
        likeLocation.append(likeRow)
    }     
}




//COMMENT STUFF

commentArea = document.querySelector("#list")

function addComment(text) {
    const commentEl = document.createElement("li")
    commentEl.className = 'comment'
    commentEl.innerText = text 
    commentArea.appendChild(commentEl)
}
    

const commentInput = document.getElementById('comment-form')
const idNameSetter = commentInput.querySelector('input')
// commentEl = commentInput.elements["id"]
// commentEl.innerHTML = 'new_comment'
idNameSetter.id = 'commentId'
const inputEl = document.querySelector('#commentId')


commentInput.addEventListener('submit', event => {
    event.preventDefault()
    const text = inputEl.value
    addComment(text)
    

})





function init() {
    timeRunner = setInterval(countUp, 1000)
    document.getElementById("pause").addEventListener("click", pause)
    document.getElementById("+").addEventListener("click", countUp)
    document.getElementById("-").addEventListener("click", countDown)
    likeButton.addEventListener("click", like)
}



init()
