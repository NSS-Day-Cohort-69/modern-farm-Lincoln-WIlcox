import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./fields.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const plants = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(plants)
Catalog(harvestPlants(usePlants()))