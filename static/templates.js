function resourceCardTemplate(resource) {
    var template = '<div class="card col-md-6">' +
    '<div class="card-body">' +
        '<h4 class="card-title">Resource: ' + resource.name + '</h4>' +
        '<p class="card-text">' + 
            '<ul>' +
            '<li>Stockpile: ' + resource.counter + '</li>' +
            '<li>Workers: ' + resource.workers + '</li>' +
            '<li>Production /s: ' + resource.workers * resource.multiplier + '</li>' +
            '</ul>' +
        '</p>' +
    '</div>' +
    '</div>';
    
    return template;
    }