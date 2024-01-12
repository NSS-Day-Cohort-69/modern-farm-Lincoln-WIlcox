
export const harvestPlants = (plants) =>
{

    //define empty array returnPlants
    const returnPlants = []

    //iterate plants with plant
    for(const plant of plants)
    {
        //use old school for loop looping plant.output times unless plant.type is corn, then do it plant.output/2 times
        let loopTimes = plant.output
        if(plant.type === "Corn") loopTimes /= 2
        for(let i = 0; i < loopTimes; i++)
        {
            //in for loop, push plant to returnPlants
            returnPlants.push(plant)
        }
    }

    //return returnPlants
    return returnPlants
    
}