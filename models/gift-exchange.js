class GiftExchange{
    constructor(){
    }
    static getRandomInt(max){
        // returns random interger from 0 - max number inclusive
        return Math.floor(Math.random() * max);
    }
    pairs(names){
        if (names.length % 2 == 0){
            const namePairs = [];
            while (names.length !== 0){
                // get first name pair
                const pair1Index = getRandomInt(names.length);
                const pair1 = names[pair1Index];
                names.slice(pair1Index, 1);
                
                // get second name pair
                const pair2Index = getRandomInt(names.length);
                const pair2 = names[pair2Index]; 
                names.slice(pair1Index, 1);

                // update name pairs list
                namePairs.push((pair1, pair2));

            }
            return namePairs;
        }
        throw new Error("Must provide an even number of users for every user to have a pair!")
    }
    traditional(names){
        const giftNames = [];
        
        while (names.length !== 0){
            // get index
            giftNameIndex = getRandomInt(names.length);
            // use index to get gift name
            const giftName = names[giftNamesIndex];
            // remove gift name from pool of names
            names.slice(giftNameIndex, 1);
            // add removed name onto giftNames
            giftNames.push(giftName);
        }
        // construct formatted list of strings
        const giftNamesString = []
        for (let i = 0; i < giftNames.length-1; i++){
            giftNamesString.push(`${giftNames[i]} is giving a gift to ${giftNames[i+1]}`)
        }
        return giftNamesString;
    }
}


module.exports = GiftExchange