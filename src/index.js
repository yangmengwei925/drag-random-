let index=0;
btnCircle.onclick=function(){
  new Circle()
}
btnRect.onclick=function(){
    new Rect()
}
class Graph{
  constructor(props){
    this.props=props;
  }
  //随机数
  random(min,max){
    return Math.floor(Math.random()*(max-min)+min)
 }
 //随机颜色console.log(srts)
 randomColor(){
     const letters =['a','b','c','d','e','f'];
     const strs = [...letters];
     console.log(strs)
     for (let i =0;i <10;i++){
         strs.push(i+"")
     }
     let i=0;
     let colors='#';
     while(i<6){
         colors +=strs[this.random(0,strs.length)];
         i++
     }
     console.log(colors)
     return colors
 }
}
class Circle extends Graph{
      //位置 大小 颜色 
      constructor(){
        super();//调用父类构造
          this.x=this.random(0,1200);
          this.y=this.random(0,300);
          this.r=this.random(0,100);
        //   this.color='blue';
            this.color=this.randomColor()
          //调用
          this.createEl();
          this.drag()
        //   this.randomColor()
      }
      createEl(){
            let {r,color,x,y} =this;
            //创建小球 
            this.circle = document.createElement('div');
             this.circle.classList.add('circle');
            // this. circle.classList.add("rect")
            this.circle.style.width = `${r * 2}px`;
            this.circle.style.height = `${r * 2}px`;
            this.circle.style.backgroundColor = color;
            this.circle.style.left = `${x}px`;
            this.circle.style.top = `${y}px`;
            box.appendChild(this.circle);
            // this.render(this.circle);
            // 
      }
      
      drag(){
        this.circle.onmousedown=(event)=>{
          this.fnDown(event);
        }
      }
      fnDown(event){
        //解决 顶部问题
        this.circle.style.zIndex=(++index)+"";
        //记录位置 小球距离·父元素左边位置 上面位置
        this.disX=event.clientX - this.circle.offsetLeft;
        this.disY=event.clientY-this.circle.offsetTop;
        document.onmousemove=(event)=>{
          console.log('move')
          this.fnMove(event)
          //this指向上面没有箭头函数的
        }
        document.onmouseup=this.fnUp;
      }
      fnMove(event){
        console.log(event.clientX -this.disX)
        this.circle.style.left=`${event.clientX -this.disX}px`;
        this.circle.style.top=`${event.clientY -this.disY}px`
      }
      fnUp(){
        document.onmousemove=null;
        document.onmouseup=null
      }
} 
class Rect extends Graph{
    //位置 大小 颜色 
    constructor(){
      super();
        this.x=this.random(0,1200);
        this.y=this.random(0,300);
      //   this.color='blue';
          this.color=this.randomColor()
        //调用
        this.createEl()
        // this.drag()
      //   this.randomColor()
    }
    createEl(){
          let {r,color,x,y} =this;
          //创建小球 
          this.circle = document.createElement('div');
             this. circle.classList.add("rect")
          this.circle.style.width = `${this.random(10,100)}px`;
          this.circle.style.height = `${this.random(10,20)}px`;
          this.circle.style.backgroundColor = color;
          this.circle.style.left = `${x}px`;
          this.circle.style.top = `${y}px`;
          box.appendChild(this.circle);
          //  this.render(this.circle);
          // 
    }
    //随机数
    // random(min,max){
    //    return Math.floor(Math.random()*(max-min)+min)
    // }
    //随机颜色console.log(srts)
    // randomColor(){
    //     const letters =['a','b','c','d','e','f'];
    //     const strs = [...letters];
    //     console.log(strs)
    //     for (let i =0;i <10;i++){
    //         strs.push(i+"")
    //     }
    //     let i=0;
    //     let colors='#';
    //     while(i<6){
    //         colors +=strs[this.random(0,strs.length)];
    //         i++
    //     }
    //     console.log(colors)
    //     return colors
    // }

} 