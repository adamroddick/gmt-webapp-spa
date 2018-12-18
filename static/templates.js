function resourceCardTemplate(resource) {
    var template = 
        '<h4 class="card-title">Resource: ' + resource.name + '</h4>' +
        '<p class="card-text">' + 
            '<ul>' +
            '<li>Stockpile: ' + resource.counter + '</li>' +
            '<li>Workers: ' + resource.workers + '</li>' +
            '<li>Production /s: ' + resource.workers * resource.multiplier + '</li>' +
            '</ul>' +
        '</p>' +
        '<button id="' + resource.name + '" class="btn-sm card-link createWorker">' + resource.name + ' Worker</button>';
    
    return template;
    }

    function companyCardTemplate(company) {
        var template = '<div class="card">' +
        '<div class="card-body">' +
            '<h4 class="card-title">' + company.name + '</h4>' +
            '<p class="card-text">' + 
                '<ul>' +
                '<li>Captain: ' + company.leader + '</li>' +
                '<li>Days: ' + company.days + '</li>' +
                '<li>Perk: ' + company.perk + '</li>' +
                '</ul>' +
            '</p>' +
        '</div>' +
        '</div>';
        
        return template;
        }