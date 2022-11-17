/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


let LinkedList = () => {
  this.head = null;
};


// LinkedList.prototype.makeNode = function(value) {
//   let node = {};
//   node.value = value;
//   node.next = null;
//   return node;
// };


LinkedList.prototype.addToTail = function(value) {
  let newNode = makeNode(value);
  let curr = this.head
  if(!curr.value){
    this.head = newNode;
  }else{
    while(curr.next){
      curr = curr.next;
      curr.next = newNode;
    }
  }

};

LinkedList.prototype.removeHead = function(){
  let curr = this.head
  let next = curr.next
  if(!curr.value){
    return null;
  }
  else{
    this.head = next
    next = this.head.next
  }
  return curr
};

LinkedList.prototype.contains = function(val){
  let curr = this.head 
  while(curr){
    if(curr.value == val){
      return true
    }
    curr = curr.next
  }
  return false
}

LinkedList.prototype.toString = function(){
  // Returns: a string representing all the values in the Linked List, formatted as:
  //"{ a } -> { b } -> { c } -> null"
  let linked_list = ''
  const start = '{'
  const end = '} -> '
  curr = this.head
  while(curr){
    linked_list += `${start} ${curr.value} ${end}`
    curr = curr.next
  }
  linked_list += 'null'
  return linked_list
}

let node = new LinkedList();

// let one = node.makeNode('a');
// let two = node.makeNode('b');
// let three = node.makeNode('c');

node.addToTail('one')
console.log(node.toString());

node.addToTail('two')
console.log(node.toString());

node.addToTail('three');
console.log(node.toString());

