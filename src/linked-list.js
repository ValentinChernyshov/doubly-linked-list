const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0
    	this._head = null
    	this._tail = null
    }

    append(data) {
    	let node = new Node(data)
    	if(this.length){
    		this._tail.next = node
    		node.prev = this._tail
    		this._tail = node
    	}else{
    		this._head = node
    		this._tail = node
    	}
    	this.length++
    	return this
    }

    head() {
    	return this._head ? this._head.data : null
    }

    tail() {
    	return this._tail ? this._tail.data : null
    }

    at(index) {
    	let currentNode = this._head
    	let length = this.length
    	let count = 0
    	if( length === 0 || index < 0 || index > length){
    		return false
    	}else{
    		while(count < index){
    			currentNode = currentNode.next
    			count++
    		}
    		if(currentNode){
    			return arguments[1] === true ? currentNode : currentNode.data
    		}else{
    			return false
    		}
    	}
    }

    insertAt(index, data) {
    	if(this.isEmpty()){
    		return this.append(data)
    	}else{
    		let node = new Node(data)
    		let current = this.at(index, true)
    		node.prev = current.prev
    		node.next = current
    		node.data = data
    		current.prev.next = node
    		current.prev = node
    		return node
    	}
    }

    isEmpty() {
    	return this.length ? false : true
    }

    clear() {
    	this.length = 0
    	this._head = null
    	this._tail = null
    	return this
    }

    deleteAt(index) {
    	let node = this.at(index, true)
    	node.next.prev = node.prev
    	node.prev.next = node.next
      return this
    }

    reverse() {
    	var node = this._head
    	this._tail = node
    	var prev = node
    	while(node){
    		let temp = node.next
    		node.next = prev
    		node.next.prev = node
    		prev = node
    		node = temp
    	}
    	this._head = prev
    	return this
    }

    indexOf(data) {
      let c = this.length
      while(c--){
    	   if(this.at(c) === data){
    		 return c
    		}
    	}
    	return -1
    }
}

module.exports = LinkedList;
