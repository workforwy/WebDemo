/* Node.js  描述一个节点*/
function Node(x, y) {
    this.x = x;
    this.y = y;

    /*声明方法 判断两个节点是否是同一个*/
    this.equals = function (x, y) {
        return this.x == x && this.y == y;
    };
}