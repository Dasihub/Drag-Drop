const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach(element => {
    element.addEventListener('dragover', dragover)
    element.addEventListener('dragenter', dragenter)
    element.addEventListener('dragleave', dragleave)
    element.addEventListener('drop', drop)
})

function dragstart(e) {
    e.target.classList.add('hold')
    setTimeout(() => {
    e.target.classList.add('hide')
    }, 0);
}

function dragend(e) {
    e.target.className = 'item'
}

function dragover(e) {
    e.preventDefault();
}
function dragenter(e) {
    e.target.classList.add('hover')
    console.log(e);
}
function dragleave(e) {
    e.target.classList.remove('hover')
}
function drop(e) {
    e.target.append(item)
    e.target.classList.remove('hover')
}
