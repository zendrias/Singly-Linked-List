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
    count++
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
}


const ll = new LinkedList()

console.log(ll)