
export const Catalog = (harvestedFood) =>
{
    let catalogElement = document.getElementsByClassName("container")

    debugger
    const HTML = ""
    for(const item of harvestedFood)
    {
        catalogElement.innerHTML += `<section class="plant">${item.type}</section>`
    }
}