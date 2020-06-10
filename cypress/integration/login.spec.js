it('Login to Drupal interface', () => {
	cy.visit('https://dev-demo-devops1.pantheonsite.io/')
	cy.get('input[name=name]').type("admin")
	cy.get('input[name=pass]').type("admin")
	cy.get('form').submit()	
	cy.wait(2500)
	
	cy.get('#toolbar-link-admin-content').click()
	cy.wait(2000)
	cy.contains('Add content').click()
	cy.wait(3500)
	cy.contains('Article').click()

	cy.get('input[name="title"]').type("This is testing for cypress tool")
	cy.get('#edit-body-und-0-value').type("This is the testing tool writing on behalf of me and this is purely a kind of a magic that is happening, See how technology has evolved.")
	cy.contains('Save').click()
});
