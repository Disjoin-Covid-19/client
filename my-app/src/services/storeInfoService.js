const apiBaseUrl = "http://localhost:4000";
const fetchOptions = {
    mode: 'cors',
    headers: [
        ['Content-Type', 'application/json' ]
    ]
};

function getStoreInfo(storeId) {
    return fetch(`${apiBaseUrl}/storeInfo/${storeId}`, fetchOptions)
        .then(response => response.json())
        .then(data => data)
}

export default getStoreInfo;