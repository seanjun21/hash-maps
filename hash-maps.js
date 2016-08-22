var HashMap = function(initialCapacity) {
    this.length = 0; // The hash map length
    this._slots = []; // which will hold all of the data. 
    this._capacity = initialCapacity || 8;
    // will grow in chunks similar to how your array implementation worked.
    this._deleted = 0;
};
HashMap.MAX_LOAD_RATIO = 0.9; // the highest that the ratio between the length and the capacity will be allowed to reach.
HashMap.SIZE_RATIO = 3;

HashMap._hashString = function(string) { // takes a string and hashes it, outputting a number. 
    var hash = 5381;
    for (var i=0; i<string.length; i++) {
        hash = (hash << 5) + hash + string.charCodeAt(i);
        hash = hash & hash;
    }
    return hash >>> 0;
};

// The main difficulty with hash maps is the prospect of collisions. What happens if two keys hash to the same slot in the array? You can't just replace the first value, because then you'd be losing a key/value pair. And making the array arbitrarily large to minimize the risk of collisions means that you will waste large amounts of memory.

// There are generally two solutions to this. The first is that each slot holds a linked list. When you want to add a value, you hash the key, find the slot, then add the pair to the start of the list. This is known as separate chaining

// The alternative is known as open addressing. In open addressing, when you have a collision you add the pair to the nearest empty slot to where it should live. In this assignment you'll be using open addressing to handle collisions.

HashMap.prototype.get = function(key) {
    var index = this._findSlot(key);
    if (this._slots[index] === undefined) {
        throw new Error('Key error');
    }
    return this._slots[index].value;
};

HashMap.prototype.set = function(key, value) {
    var loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) { // first checks whether load radio is greater than the given maximum.
        this._resize(this._capacity * HashMap.SIZE_RATIO);
        // If so it resizes the hash map using the _resize function
    }

    var index = this._findSlot(key); // Next the function finds the appropriate slot
    this._slots[index] = { // adds an object to the array containing the key/value pair,
        key: key,
        value: value,
        deleted: false
    };
    this.length++; // increasing the length. 
};

HashMap.prototype.remove = function(key) {
    var index = this._findSlot(key);
    var slot = this._slots[index];
    if (slot === undefined) {
        throw new Error('Key error');
    }
    slot.deleted = true; // This simply finds the correct slot for the key, and sets the deleted flag to true, 
    this.length--; // decreasing the length 
    this._deleted++; // and increasing the deleted count. 
};

HashMap.prototype._findSlot = function(key) { // The _findSlot is used to find the correct slot for a given key.
    var hash = HashMap._hashString(key);
    var start = hash % this._capacity;
    // to fit within the current capacity. 

    for (var i=start; i<start + this._capacity; i++) { // It then loops through the array,
        var index = i % this._capacity;
        var slot = this._slots[index];
        if (slot === undefined || (slot.key == key && !slot.deleted)) { //  stopping when it finds the slot with a matching key, or an empty slot.
            return index;
        }
    }
    // Unreachable
    // The _slots array will never be full due to our maximum load factor, so the function will always return a slot.
};

// The best and average case performance for the _findSlot function is O(1); assuming the hash function is good and the load ratio is suitable then the chances of collision (and needing to iterate) should be low. In the worst case it's O(n), as you have to linearly search through each slot.

HashMap.prototype._resize = function(size) {
    var oldSlots = this._slots;
    this._capacity = size;
    this._deleted = 0;
    this._slots = [];
    for (var i=0; i<oldSlots.length; i++) {
        var slot = oldSlots[i];
        if (slot !== undefined && !slot.deleted) {
            this.set(slot.key, slot.value);
        }
    }
};


// Because you have to call set once for each item, and each set call is O(1) in the best and average case, and O(n) in the worst case, this is O(n) in the best and average case, and O(n^2) in the worst case.





