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

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}


let LinkedList = function (){
  this.head = null;
};


LinkedList.prototype.addToTail = function(val) {
  let newNode = new Node(val);
  let curr = this.head
  console.log(newNode);
  console.log(curr);
  if(!curr){
    this.head = newNode;
  }else{
    while(curr.next){
      curr = curr.next;
    }
    curr.next = newNode;
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
    return curr
  }
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

let one = new Node('a');
let two = new Node('b');
let three = new Node('c');


describe('#LinkedList', () => {

  const list = new LinkedList();
  list.addToTail(2);
  list.addToTail(5);
  list.addToTail(7);

  it('test linked list addToTail', () => {
    expect(list.toString()).toEqual('{ 2 } -> { 5 } -> { 7 } -> null');
  });

  it('test linked list method contains', () => {
    expect(list.contains(7)).toEqual(true);
    expect(list.contains(2)).toEqual(true);
    expect(list.contains(3)).toEqual(false);

  });
});

describe('#LinkedList', () => {

  const list = new LinkedList();
  list.addToTail(2);
  list.addToTail(5);
  list.addToTail(7);
  list.removeHead()

  it('test linked list removeHead method', () => {
    expect(list.removeHead()).toEqual('{ 5 } -> { 7 } -> null');
  });
});
