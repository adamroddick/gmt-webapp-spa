window.addEventListener('click', function(event) {
    if (event.target.matches('button.createWorker')) {
        createWorker(event.target.id)
    }
})

var createWorker = function(id) {
    jsonArray.resources.metal.workers +=1
}