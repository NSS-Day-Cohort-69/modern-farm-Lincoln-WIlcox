
const plantsInField = []

export const addPlant = (seed) =>
{
    if(!Array.isArray(seed))
    {
        plantsInField.push(seed)
    } else
    {//is corn
        plantsInField.push(seed[0])
        plantsInField.push(seed[1])
    }
    
}

export const usePlants = () =>
{
    return plantsInField
}