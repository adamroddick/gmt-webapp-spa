console.log('JavaScript is working.')

var resourceDiv = document.querySelector('div#resourceDiv')

function renderResources() {
    
    setInterval(function() {
        
        for (i in jsonArray.resources) {
            resource = jsonArray.resources[i]
            render(resourceCardTemplate(resource),'div#' + resource.div)
        }

    }, 100);

    
}

function renderCompanyCard(company) {
    render(companyCardTemplate(company),'div#' + company.div)
}

function renderResourceCard(resources) {
    for (i in jsonArray.resources) {
        resource = jsonArray.resources[i]
        render(resourceCardTemplate(resource),'div#' + resource.div)
    }
}
renderCompanyCard(jsonArray.company);
renderResourceCard(jsonArray.resources);
//renderResources();