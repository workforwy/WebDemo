/*  Worm类  描述一条蛇  */
//定义方向 
var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;
var DIR = RIGHT;
var SCORE = 0;

function Worm() {
	this.nodes = [];
	this.nodes.push(new Node(20, 20));
	this.nodes.push(new Node(20, 21));
	this.nodes.push(new Node(20, 22));
	this.nodes.push(new Node(20, 23));
	this.nodes.push(new Node(20, 24));
	this.nodes.push(new Node(20, 25));
	this.nodes.push(new Node(21, 25));
	this.nodes.push(new Node(22, 25));
	this.nodes.push(new Node(23, 25));
	this.nodes.push(new Node(24, 25));
	this.nodes.push(new Node(24, 26));
	this.nodes.push(new Node(24, 27));
	this.nodes.push(new Node(24, 28));
	this.nodes.push(new Node(24, 29));
	this.nodes.push(new Node(24, 30));
	/**
	 *声明contains方法, 看食物是不是蛇身子上的一点
	 */
	this.contains = function(x, y) {
		for(i = 0; i < this.nodes.length; i++) {
			var node = this.nodes[i];
			if(node.equals(x, y)) {
				return true;
			}
		}
		return false;
	}
	//声明randomFood的方法,随机生成食物
	//x和y从0到49中选一个,要求不是蛇身子上的点
	this.randomFood = function() {
		var x = 0;
		var y = 0;
		do {
			x = Math.floor(Math.random() * 50);
			y = Math.floor(Math.random() * 50);
		} while (this.contains(x, y));
		return new Node(x, y);
	}
	this.food = this.randomFood();
	/**
	 * 声明方法   走一步
	 */
	this.step = function() {
		var oldHead = this.nodes[0];
		//根据食物的位置,计算应该改变的方向
//		if(oldHead.x < this.food.x) {
//			DIR = RIGHT;
//		} else if(oldHead.y < this.food.y) {
//			DIR = DOWN;
//		} else if(oldHead.x > this.food.x) {
//			DIR = LEFT;
//		} else if(oldHead.y > this.food.y) {
//			DIR = UP;
//		}
		//算出新 头节点
		var oldHead = this.nodes[0]; //老头节点
		var newHead;
		switch(DIR) {
			case LEFT:
				newHead = new Node(oldHead.x - 1, oldHead.y);
				if(newHead.x == -1) {
					newHead.x = 49;
				}
				break;
			case RIGHT:
				newHead = new Node(oldHead.x + 1, oldHead.y);
				if(newHead.x == 50) {
					newHead.x = 0;
				}
				break;
			case UP:
				newHead = new Node(oldHead.x, oldHead.y - 1);
				if(newHead.y == -1) {
					newHead.y = 49;
				}
				break;
			case DOWN:
				newHead = new Node(oldHead.x, oldHead.y + 1);
				if(newHead.y == 50) {
					newHead.y = 0;
				}
				break;
		}
		//添加头节点
		this.nodes.unshift(newHead);
		//如果吃到食物,则不删除尾节点
		if(!newHead.equals(this.food.x, this.food.y)) {
			this.nodes.pop();
		} else {
			SCORE += 10;
			this.food = this.randomFood();
		}
	};
}