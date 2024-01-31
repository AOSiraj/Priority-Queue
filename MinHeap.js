class MinHeap {
    constructor(){
        this.heap = [[]]
    }

    delete() {
        if(this.heap.length == 1) return null
        let val = this.heap[1]
        this.swap(1,this.heap.length-1)
        this.heap.pop()
        this.heapifyDown()
        return val
    }

    heapifyDown(){
        let cur = 1
        while(cur < this.heap.length-1) {
            let left = this.getLeftChild(cur)
            let leftI = this.getLeftChildId(cur)
            let right = this.getRightChild(cur)
            let rightI = this.getRightChildId(cur)
            let min = right, minI = rightI
            if(!left && !right) {
                break
            }else if(!right){
                min = left, minI = leftI
            }
            else if(left[1] < right[1]) {
                min = left
                minI = leftI
            }
            if(this.heap[cur][1] < min[1]) break
            else {
                this.swap(cur, minI)
                cur = minI
            }
        }

    }
    
    insert(value, priority){
        this.heap.push([value, priority])
        this.heapifyUp()
    }

    heapifyUp(){
        let last = this.heap.length-1
        while(last >= 1) {
            let parent = this.getParent(last)
            if(parent[1] > this.heap[last][1])
            {
                this.swap(this.getParentId(last), last)
            }
            else 
                break
            last = this.getParentId(last)
        }
    } 
    swap (i,j) {
        let temp = this.heap[i]
        this.heap[i] = this.heap[j] 
        this.heap[j] = temp
    }
    getLeftChild(i){
        return this.heap[2*i]
    }
    getLeftChildId(i){
        return 2*i
    }
    getRightChild(i){
        return this.heap[2*i+1]
    }
    getRightChildId(i){
        return 2*i+1
    }
    getParent(i) {
        return this.heap[Math.floor(i/2)]
    }
    getParentId(i) {
        return Math.floor(i/2)
    }
}
