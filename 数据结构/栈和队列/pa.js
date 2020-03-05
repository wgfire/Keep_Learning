class Grids {
    constructor(row, col) {
        this.row = row-1
        this.col = col-1
        this.gridContent = []
        this.creatGrid(row, col)
        this.map = {}
    }
    creatGrid(row, col) {
        for (let i = 0; i < row; i++) {
            this.gridContent[i] = []
            for (let j = 0; j < col; j++) {
                this.gridContent[i].push(j)
                let num = Math.floor(Math.random() * Math.floor(3))
                this.gridContent[i][j] =  "GRF".charAt(num)
            }

        }
        console.log('地图', this.gridContent)

    }
    playA(row) {
        row-=1
        while (row >= 0) {
                if (row % 2 == 0) { // 偶数行 列越来越小
                    this.playA_left(row)
                } else {
                    // 奇数行列越来越大
                    
                    this.play_right(row)
                }

                row--

            }  

        }
    
    playA_left(row) {
        var col = this.col
        for(let i=col ;i>0;i-=2){
            this.map[row+','+i]=this.getPoit(row,i)
        }

    }
    play_right(row) {
        var col = this.col 
        for(let i=0 ;i<col;i+=2){
            this.map[row+','+i]=this.getPoit(row,i)
        }
    }
    getPoit(row,col){
        let org = this.gridContent[row][col]
        let poit = [row-1,col+1,row+1,col-1]
        for(let i=0;i<poit.length;i++){
            if(i%2==0){
                if(poit[i]<this.row && poit[i]<this.col &&poit[i]>0){
                    poit[i]=this.gridContent[poit[i]][col] // 行改变
                }else {
                    poit[i]='-'
                }

            }else {
                if(poit[i]<this.row && poit[i]<this.col &&poit[i]>0){
                    poit[i]=this.gridContent[row][poit[i]] // 列改变
                }else {
                    poit[i]='-'
                }
            }
           // console.log('tag', poit)
            
        }
        let str=poit.join('')
        return org = org+str
    }
    getGrids() {
        return this.gridContent
    }
    getMap(){
        return this.map
    }
}

let grid = new Grids(4, 6)
grid.playA(4)
console.log(grid.getMap())