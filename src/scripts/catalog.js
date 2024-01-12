
export const Catalog = (harvestedFood) =>
{
    let catalogElement = document.querySelector(".container")

    debugger
    const HTML = ""
    for(const item of harvestedFood)
    {
        catalogElement.innerHTML += `<section class="plant">${item.type}</section>`
    }
}