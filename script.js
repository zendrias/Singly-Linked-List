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
}


const ll = new LinkedList()

ll.push(200)
ll.pop()
// ll.unshift(100)
// ll.clear()
console.log(ll)