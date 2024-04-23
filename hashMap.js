//again using ES6 modules for our factory function

// Assignment goals: create a HashMap class or factory function

//hashmap factory function
export function hashMap(){
    const INITIAL_CAPACITY = 16;
    return {
        hashMap: [INITIAL_CAPACITY], //array to store key-value pairs sized to INITIAL_CAPACITY

        hashFunction(key){
            let hashCode = 0;

            const primeNumber = 31;
            for (let i = 0; i < key.length; i++){
                hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }

            return hashCode % hashMap.length;
        },

        //takes two args, first is key, second is value
        //if key already exists, then old val is overwritten or 'updated'
        set(key, value){

        },

        //takes a key as arg, if given key is in hashmap
        // it removes the entry with that key and return true.
        // else false if key is not in hashmap
        get(key){

        },

        //takes a key as arg, returns true if key is in hashmap
        has(key){

        },

        //takes a key as arg, removes the entry with that key
        // if key is in hashmap, returns true, else false
        remove(key){

        },

        //returns the number of stored keys in the hashmap
        length(){

        }, 

        //removes all entries in the hashmap
        clear(){

        },

        //returns an array of all keys in the hashmap
        values(){

        }, 

        //returns an array that contains each key, value pairs.
        // Example: [[firstKey, firstValue], [secondKey, secondValue], ...]
        entries(){

        }


    }
}