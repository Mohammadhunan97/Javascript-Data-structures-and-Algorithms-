// simple singly linked list implentation



class LinkedList {
  constructor(){
    // this.list = null;
    this.list = {}
  }
  addItem(item){
    if(!this.list.value){
      this.list = {
        value: item,
        next: null
      }
    }else{
      let current_node = this.list;
      while(current_node.next){
        current_node = current_node.next;
      }
      
      current_node.next = {
        value: item, 
        next: null
      }
    }
  }
  removeItem(item){
    let current_node = this.list;
    let last_node = {};

    if(!current_node.value){
      return false; // does not include item;
    }else if(current_node.value === item){
      this.list = current_node.next || {};
    }

    while(current_node.next){
     if(current_node.value === item) {
       // remove it and return
      last_node.next = current_node.next;
      return;
     }else{
       last_node = current_node;
       current_node = current_node.next;
     }
    }
    if(current_node.value === item){
      last_node.next = null
    }
  }
  getList(){
    return JSON.stringify(this.list);
  }
}

const ll = new LinkedList();


ll.addItem('a')
ll.addItem('b')
ll.addItem('c')
ll.addItem('d')
ll.addItem('e')
ll.removeItem('b');
ll.addItem('f');
ll.removeItem('a');
ll.addItem('g');
ll.removeItem('d');
ll.removeItem('g');


console.log(ll.getList()); // c, e, f
