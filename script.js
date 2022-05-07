class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}



const node1 = new Node(100)
console.log(node1)