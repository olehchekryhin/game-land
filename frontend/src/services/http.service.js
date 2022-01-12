export async function httpService (method, url, body, headers) {
    const params = {
        method,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            ...headers
        }
    };

    if (body) {
        params.body = JSON.stringify(body)
    }

    return await fetch(`${process.env.REACT_APP_URL}\/${url}`, params).then(response => response.text() || '');
}
