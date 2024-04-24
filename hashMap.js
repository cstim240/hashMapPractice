//again using ES6 modules for our factory function

// Assignment goals: create a HashMap class or factory function
// this hashmap's collision resolution strategy is closed addressing
// we will use separate chaining to handle collisions

//hashmap factory function
export function hashMap(){
    const INITIAL_CAPACITY = 16;
    return {
        capacity: INITIAL_CAPACITY, //max number of key-value pairs that can be stored in hashmap
        hashMap: new Array(INITIAL_CAPACITY), //array to store key-value pairs sized to INITIAL_CAPACITY
        size: 0, //number of key-value pairs stored in hashmap

        hashFunction(key){
            let hashCode = 0;

            const primeNumber = 31;
            for (let i = 0; i < key.length; i++){
                hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }

            return hashCode % this.capacity;
        },

        //takes two args, first is key, second is value
        //if key already exists, then old val is overwritten or 'updated'
        set(key, value){
            const indexingKey = this.hashFunction(key);

            if (indexingKey < 0 || indexingKey >= this.capacity){
                throw new Error('Trying to access index out of bounds');
            }

            //if there's no entry at the index, create a new entry
            if (!this.hashMap[indexingKey]){
                this.hashMap[indexingKey] = [];
            }

            //check if key is already in hashmap
            let keyFound = false;


            //iterate through the array at the index
            for (let i = 0; i < this.hashMap[indexingKey].length; i++){
                const entry = this.hashMap[indexingKey][i];
                if (entry[0] === key){
                    entry[1] = value;
                    this.size++;
                    keyFound = true;
                    break;
                }
            }

            //if key is not in hashmap, add it
            if (!keyFound){
                this.hashMap[indexingKey].push([key, value]);
            }

            //growing hashmap functionality on hold for now

        },

        //takes a key as arg, if given key is in hashmap
        // it removes the entry with that key and return true.
        // else false if key is not in hashmap
        get(key){
            const indexingKey = this.hashFunction(key);

            if (indexingKey < 0 || indexingKey >= this.capacity){
                throw new Error('Trying to access index out of bounds');
            }

            if (!this.hashMap[indexingKey]){
                return false;
            } 

            for (let i = 0; i < this.hashMap[indexingKey].length; i++){
                const entry = this.hashMap[indexingKey][i];
                if (entry[0] === key) {
                    this.remove(key);
                    this.size--;
                    return entry[1];
                }
            }

            return false;
        },

        //takes a key as arg, returns true if key is in hashmap
        has(key){
            const indexingKey = this.hashFunction(key);
            if (indexingKey < 0 || indexingKey >= this.capacity){
                throw new Error('Trying to access index out of bounds');
            }

            if (!this.hashMap[indexingKey]){
                return false;
            }

            for (let i = 0; i < this.hashMap[indexingKey].length; i++){
                const entry = this.hashMap[indexingKey][i];
                if (entry[0] === key){
                    return true;
                }
            }

            return false;
        },

        //takes a key as arg, removes the entry with that key
        // if key is in hashmap, returns true, else false
        remove(key){
            const indexingKey = this.hashFunction(key);
            if (indexingKey < 0 || indexingKey >= this.capacity){
                throw new Error('Trying to access index out of bounds');
            }

            if (!hashMap[indexingKey]){
                return false;
            }

            for (let i = 0; i < hashMap[indexingKey].length; i++){
                const entry = hashMap[indexingKey][i];
                if (entry[0] === key){
                    hashMap[indexingKey].splice(i, 1); 
                    this.size--;
                    //splice method removes the key-value pair at index i from the array
                    return true;
                }
            }
        
        },

        //returns the number of stored keys in the hashmap
        length(){
            return this.size;
        }, 

        //removes all entries in the hashmap
        clear(){
            this.hashMap = new Array(INITIAL_CAPACITY);
            this.size = 0;
            this.capacity = INITIAL_CAPACITY;
        },

        //returns an array of all keys in the hashmap
        values(){
            if (this.size === 0){
                return [];
            } else {
                let values = [];
                for (let i = 0; i < this.capacity; i++){
                    if (this.hashMap[i]){
                        for (let j = 0; j < this.hashMap[i].length; j++)
                            values.push(this.hashMap[i][j][1]);
                    }
                }
                return values;
            }
        }, 

        //returns an array that contains each key, value pairs.
        // Example: [[firstKey, firstValue], [secondKey, secondValue], ...]
        entries(){
            if (this.size === 0){
                return [];
            } else {
                let entries = [];
                for (let i = 0; i < this.capacity; i++){
                    if (this.hashMap[i]){
                        for (let j = 0; j < this.hashMap[i].length; j++)
                            entries.push(this.hashMap[i][j]); // this pushes not just the key-value pairs, but the entire array at the index
                    }
                }
            }
        }


    }
}