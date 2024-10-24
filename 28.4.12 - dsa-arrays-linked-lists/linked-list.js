/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  // Appends a new node with value ***val*** to the tail. Returns undefined.
  push(val) {
    let newVal = new Node(val)
    if (!this.head) {
      this.head = newVal;
      this.tail = this.head;
    }
    else {
      this.tail.next = newVal;
      this.tail = newVal;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newVal = new Node(val);
    if (!this.head === null) {
      this.head = newVal;
      
    }
    else {
      newVal.next = this.head;
      this.head = newVal;
    }

    if(this.length === 0) {
      this.tail=head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {

    return this.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx <0) {
      console.log("Invalid index");
      
    }
    
    return this._get(idx).val;
    
  }

  _get(idx) {
      let now = this.head;
      let count = 0;
      while (now !== null && count != idx) {
        count += 1;
        now = now.next;
      }
      return now;
    }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx<0) {
      throw new Error("Invalid Index SetAt");
    }
    let now = this._get(idx);
    now.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0 ) {
      throw new Error("Invalid Index InsertAt");
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let previous = this._get(idx-1);
    let newVal = new Node(val);

    newVal.next = previous.next;
    previous.next = newVal;

    this.length +=1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || idx < 0 ) {
      throw new Error("Invalid Index RemoveAt");
    }
    // removing first
      if (idx === 0) {
        let val = this.head.val;
        this.head = this.head.next;
        this.length -= 1;

        if (this.length <2) {
          this.tail = this.head;
        }
        return val;
    }
    let previous = this._get(idx - 1);

    // removing tail
      if (idx === this.length - 1) {
        let val = previous.next.val;
        previous.next = null;
        this.tail = previous;
        this.length -= 1;
        return val;
    }
    // removing in middle
      let val = previous.next.val;
      previous.next = previous.next.next;
      this.length -= 1;
      return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total=0;
    let now = this.head;
    while (now) {
      total += now.val;
      now = now.next;
    }
    return total/this.length;
  }
}

module.exports = LinkedList;
