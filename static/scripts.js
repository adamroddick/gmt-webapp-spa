console.log('JavaScript is working.')

var resourceDiv = document.querySelector('div#resourceDiv')

function renderResources() {
    
    setInterval(function() {
        
        for (i in jsonArray.resources) {
            resource = jsonArray.resources[i]
            render(resourceCardTemplate(resource),'div#' + resource.div)
        }

    }, 1000);
}

renderResources();
/*
window.addEventListener('render', function (event) {
    console.log(event)
})
*/