class SearchResultsPage {

    getResults() {
        return cy.get("ol.ui-search-layout");
    }

    validateResults() {
        this.getResults().should("be.visible");
    }

}

module.exports = SearchResultsPage;