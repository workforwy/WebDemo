/*Stage.js  舞台类*/
function Stage() {
    this.width = 50;
    this.height = 50;
    this.worm = new Worm();

    /**
     * 声明方法   print  用于绘制整个舞台的内容
     */
    this.print = function (ctx) {

        //先绘制背景
        ctx.fillStyle = "#abcdef";
        ctx.fillRect(0, 0, 10 * this.width, 10 * this.height);

        //绘制一条蛇
        var nodes = this.worm.nodes;
        ctx.fillStyle = "#ff0000";
        for (i = 0; i < nodes.length; i++) {
            var node = nodes[i]; //  (20,20)
            ctx.fillRect(node.x * 10, node.y * 10, 9, 9);
        }

        //绘制食物
        var food = this.worm.food;
        ctx.fillStyle = "#0000ff";
        ctx.fillRect(food.x * 10, food.y * 10, 9, 9);

        //绘制分数
        ctx.fillStyle = "#000";
        ctx.font = "20px 微软雅黑";
        ctx.fillText("分数:" + SCORE, 10, 30);
    };
}