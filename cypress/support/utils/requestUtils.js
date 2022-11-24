export const requestGET = (token) => {
	cy.request({
        url: '/bank',
        method: 'GET',
        headers: {
            Authentication: `Bearer ${token}`,
        }
    })
}
export const requestGETWithQueryParameter = (token, key, value) => {
	cy.request({
        url: `/bank?${key}=${value}`,
        method: 'GET',
        headers: {
            Authentication: `Bearer ${token}`,
        }
    })
}

export const requestPUT = (token, bank) => {
    cy.request({
        url: `/bank/${bank.id}`,
        method: 'PUT',
        headers: {
            Authentication: `Bearer ${token}`,
        },
        body: {
            estadoAtuacao: bank.actingState,
            juros: bank.tax
        }
    })
} 

export const requestPOST = (token, bank) => {
    cy.request({
        url: `/bank`,
        method: 'POST',
        headers: {
            Authentication: `Bearer ${token}`,
        },
        body: {
            banco: bank.name,
            estadoAtuacao: bank.actingState,
            juros: bank.tax
        }
    })
}