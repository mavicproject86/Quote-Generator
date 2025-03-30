
async function Quote() {
    let url =`https://qapi.vercel.app/api/random`
    let response = await fetch(url);
    let data = await response.json()
    console.log(data)
    let quotename = document.getElementById('quote');
    let authorname = document.getElementById('author');

    quotename.textContent = `${data.quote}`
    authorname.textContent = `⎯⎯ ${data.author}`
}

Quote()