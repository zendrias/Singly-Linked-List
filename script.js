class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.count = 0
  }

  unshift(data) {
    this.head = new Node(data, this.head)
    this.count++
  }

  shift() {
    const initialHead = this.head
    this.head = this.head.next
    this.count--
    return initialHead
  }

  push(data) {
    // If There Is Nothing In The Linked List, It Will Be Assigned As The Head
    if (!this.head) return this.unshift(data)
    let node = new Node(data)
    let current = this.head
    // Traverse The Linked List Until {current.next} is null
    while (current.next) {
      current = current.next
    }
    current.next = node
    this.count++
  }

  clear() {
    this.head = null
    this.count = 0
  }

  pop() {
    if (!this.head) throw new Error("The Linked List is empty")
    if (this.count === 1) return this.clear()
    let current = this.head
    let previous;
    while (current.next) {
      previous = current
      current = current.next
    }
    previous.next = null
    this.count--
    return current
  }

  logData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  insertAt(index, data) {
    if (index === undefined || index > this.count || index < 0) throw new Error('Invalid Insertion Index')
    const node = new Node(data)
    let count = 0;
    let current = this.head
    let previous;
    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    previous.next = node
    node.next = current
    this.count++
  }

  removeAt(index) {
    if (!this.head || index > this.count || index < 0) throw new Error("Invalid index")
    if (index === 0) return this.shift()
    let current = this.head;
    let count = 0;
    let previous;
    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    previous.next = current.next
    this.count--
  }
}

