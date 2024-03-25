// function that builds a new game world
export const generateLanes = count => {
    let lanes = []
    for(let i = 0; i < count; i++){
        lanes.push(nextLane(lanes))
    }
    return lanes
}

// function that adds a new lane to the existing game world
export const nextLane = lanes => {
    let prev_lane = lanes[lanes.length - 1]

    if(!prev_lane) return 'grass'

    let paths = ['grass', 'road', 'track', 'water'] // index 0 is 'grass', 1 is 'road', 2 is 'track' and 3 is 'water'
    let probabilities = []
    switch (prev_lane) {
        case 'grass':
            probabilities = [0.4, 0.4, 0.1, 0.1]
            break;
        case 'road':
            probabilities = [0.3, 0.55, 0.15, 0]
            break;
        case 'track':
            probabilities = [0.4, 0.4, 0.2, 0]
            break;
        case 'water':
            probabilities = [0.5, 0, 0, 0.5]
            break;
        default:
            break;
    }

    let prob_sum = probabilities[0]
    const rand = Math.random()
    for(let i = 0; i < probabilities.length; i++){
        if(rand < prob_sum){
            return paths[i]
        } else {
            prob_sum += probabilities[i]
        }
    }
}