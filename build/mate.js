/*
Mate.js libary by FBN776
This is an open source project
Made by FBN776
Date of creation:15th December 2019
Language:JavaScript
*/

 //Element Select
  function element(e){
   this.e=e;
    var elm=document.querySelector(this.e);
    return elm;
  }
  function elements(e,n){
   this.e=e;
    this.n=n;
    var elm=document.querySelectorAll(this.e)[this.n];
     return elm;
  }
  //Utility
  function write(w,e){
   this.w=w;
    this.e=e;
     this.w.innerHTML=this.e;
  }
  function log(c){
   this.c=c;
    console.log(this.c);
  }
  //Array
  function read(w,h){
   var sum=0;
    this.w=w;
     this.h=h;
  
   if(this.h==="sum"){
     for(io=0;io<w.length;io++){
       sum+=this.w[io];
     }
    return sum;
  }
  if(this.h==="avg"){
    var arrLen=this.w.length;
     for(io=0;io<w.length;io++){
       sum+=this.w[io];
     }
    var avg=sum/arrLen;
   return avg;
   }
  if(this.h==="max"){
    var max = this.w.reduce(function(a, b) {
     return Math.max(a, b);
    });
     return max;
  }
  if(this.h==="min"){
    var min = this.w.reduce(function(a, b) {
     return Math.min(a, b);
    });
     return min;
  }
 }
 //Theme
 function theme(o){
  this.o=o;
   var b=document.body;
    var div=document.getElementsByTagName("div");
    var p=document.getElementsByTagName("p");
    b.style.backgroundColor=this.o.p;
     b.style.color=this.o.c;
      b.style.fontFamily=this.o.font;
      for(i=0;i<div.length;i++){
       div[i].style.backgroundColor=this.o.s;
        div[i].style.borderColor=this.o.border;
      }
      for(i=0;i<p.length;i++){
       p[i].style.backgroundColor=this.o.s;
        p[i].style.borderColor=this.o.border;
      }
 }

   function random(m,m){
     return Math.floor(Math.random()*(this.maxNum-this.minNum+1)+this.minNum);
   };
   function round(n){
    this.n=n;
     return Math.round(this.n);
   };
   function distance(x1,y1,x2,y2){
   var x=(x2-x1)**2;
   var y=(y2-y1)**2;
   var d=Math.sqrt((x+y));
   return d;
   };
  
  function triangle(ar){
  this.ar=ar;
   this.perimeter=()=>{
    return read(this.ar,"sum");
   }
   this.heron=()=>{
    s=this.ar;
    var sp=(s[0]+s[1]+s[2])/2;
    
    //√[s(s-a)*(s-b)*(s-c)]
    var area=Math.sqrt((sp*((sp-s[0])*(sp-s[1])*(sp-s[2]))));
     return area;
   }
  }
  
 function square(a){
  this.a=a;
  this.area=()=>{
   return this.a**2;
  }
  this.premeter=()=>{
   return 4*this.a;
  }
  this.diagonal=()=>{
   return Math.sqrt(a**2+a**2);
  }
 }
 function rectangle(l,b){
  this.l=l;
  this.b=b;
  this.area=()=>{
   return this.l*this.b;
  }
  this.premeter=()=>{
   return 2*(this.l+this.b);
  }
  this.diagonal=()=>{
   return Math.sqrt(this.l**2+this.b**2);
  }
 }
 
  //Shapes
    function circle(r){
  this.r=r;
   this.area=()=>{
     return Math.PI*(this.r**2);
   }
   this.circum=()=>{
     return 2*Math.PI*this.r;
   }
   this.sector=(w,a)=>{
    this.a=a;
    this.w=w;
     if(this.w==="area"){
      return (this.a/360)*Math.PI*(this.r**2);
     }
     if(this.w==="arc"){
      return (this.a/360)*2*Math.PI*this.r;
     }
   }
  this.segment=(w,a)=>{
   this.a=a;
   this.w=w;
    if(this.w==="area"){
     var arSector=new circle(this.r).sector("area",this.a);
     var arTri=new triangle().heron([this.r,this.r,2*this.r*Math.sin(this.a*Math.PI/360)]);
      var arSeg=arSector-arTri;
     return arSeg;
    }
    if(this.w==="chord"){
     return 2*this.r*Math.sin(this.a*Math.PI/360);
    }
  }
    }
    
//3D
 
   function cube(a){
  this.a=a;
   this.csa=()=>{
    return 4*this.a**2;
   }
   this.tsa=()=>{
    return 6**this.a**2;
   }
   this.volume=()=>{
    return this.a**3;
   }
 }

 function cuboid(l,b,h){
  this.l=l;
  this.b=b;
  this.h=h;
  
  this.csa=()=>{
   return 2*(this.l*this.h+this.b*this.h);
  }
  this.tsa=()=>{
   return 2*((this.l*this.b)+(this.b*this.h)+(this.l*this.h));
  }
  this.volume=()=>{
   return this.l*this.b*this.h;
  }
 }
 
 function cylinder(r,h){
  this.r=r;
  this.h=h;
  
  this.csa=()=>{
   return 2*Math.PI*this.r*this.h;
  }
  this.tsa=()=>{
   return 2*Math.PI*this.r*(this.r+this.h);
  }
  this.volume=()=>{
   return Math.PI*(this.r**2)*this.h;
  }
 }
 
 function cone(r,h){
  this.r=r;
  this.h=h;
  var l=Math.sqrt(this.r**2+this.h**2);
  
  this.csa=()=>{
   return Math.PI*this.r*l;
  }
  this.tsa=()=>{
   return Math.PI*this.r*(l+this.r);
  }
  this.volume=()=>{
   var cy=new cylinder(this.h,this.r).volume()/3;
    return cy;
  }
 }
  
 function hemisphere(r){
  this.r=r;
  this.csa=()=>{
   return 2*Math.PI*this.r**2;
  }
  this.tsa=()=>{
   return 3*Math.PI*this.r**2;
  }
  this.volume=()=>{
   return (2*Math.PI*(this.r**3))/3;
  }
 }
 
 function sphere(r){
  this.r=r;
  this.tsa=()=>{
   return 4*Math.PI*this.r**2;
  }
  this.volume=()=>{
   return (4*Math.PI*(this.r**3))/3;
  }
 }
 
 

//Styles
 
  function applyStyle(o,s){
  this.o=o;
  this.s=s;
   var y={};
    if(this.s.width!=y.x){
     this.o.style.width=this.s.width;
    }
    if(this.s.height!=y.x){
     this.o.style.height=this.s.height;
    }
    if(this.s.backgroundColor!=y.x){
     this.o.style.backgroundColor=this.s.backgroundColor;
    }
    if(this.s.bacgroundImage!=y.x){
     this.o.style.backgroundImage=this.s.backgroundImage;
    }
    if(this.s.border!=y.x){
     this.o.style.border=this.s.border;
    }
    if(this.s.color!=y.x){
     this.o.style.color=this.s.color;
    }
    if(this.s.fontSize!=y.x){
     this.o.style.fontSize=this.s.fontSize;
    }
    if(this.s.fontFamily!=y.x){
     this.o.style.fontFamily=this.s.fontFamily;
    }
    if(this.s.backgroundClip!=y.x){
     this.o.style.backgroundClip=this.s.backgroundClip;
    }
    if(this.s.bacgroundSize!=y.x){
     this.o.style.bacgroundSize=this.s.bacgroundSize;
    }
    if(this.s.bacgroundOrgin!=y.x){
     this.o.style.bacgroundOrgin=this.s.bacgroundOrgin;
    }
    if(this.s.transform!=y.x){
     this.o.style.transform=this.s.transform;
    }
    if(this.s.transformOrigin!=y.x){
     this.o.style.transformOrigin=this.s.transformOrigin;
    }
    if(this.s.transformStyle!=y.x){
     this.o.style.transformStyle=this.s.transformStyle;
    }
    if(this.s.transtion!=y.x){
     this.o.style.transtion=this.s.transtion;
    }
    if(this.s.animation!=y.x){
     this.o.style.animation=this.s.animation;
    }
    if(this.s.animationPlayState!=y.x){
     this.o.style.animationPlayState=this.s.animationPlayState;
    }
    if(this.s.animationDelay!=y.x){
     this.o.style.animationDelay=this.s.animationDelay;
    }
    if(this.s.filter!=y.x){
     this.o.style.filter=this.s.filter;
    }
    if(this.s.display!=y.x){
     this.o.style.display=this.s.display;
    }
    if(this.s.justifyContent!=y.x){
     this.o.style.justifyContent=this.s.justifyContent;
    }
    if(this.s.alignSelf!=y.x){
     this.o.style.alignSelf=this.s.alignSelf;
    }
    if(this.s.onclick!=y.x){
     this.o.onclick=this.s.onclick;
    }
    if(this.s.ontouchmove!=y.x){
     this.o.ontouchmove=this.s.ontouchmove;
    }
    if(this.s.text!=y.x){
     this.o.innerHTML=this.s.text;
    }
    if(this.s.class!=y.x){
     this.o.class=this.s.class
    }
    if(this.s.id!=y.x){
     this.o.id=this.s.id;
    }
    if(this.s.textAlign!=y.x){
     this.o.style.textAlign=this.s.textAlign;
    }
    if(this.s.lineHeight!=y.x){
     this.o.style.lineHeight=this.s.lineHeight;
    }
    if(this.s.padding!=y.x){
     this.o.style.padding=this.s.padding;
    }
    if(this.s.margin!=y.x){
     this.o.style.margin=this.s.margin;
    }
    if(this.s.backgroundRepeat!=y.x){
     this.o.style.backgroundRepeat=this.s.backgroundRepeat;
    }
    if(this.s.borderRadius!=y.x){
     this.o.style.borderRadius=this.s.borderRadius;
    }
  }
  //Animations
  function animate(w,h){
   this.w=w;
   this.h=h;
    var w={};
    var obj=this.w;
    var ani=this.h;
   var delay=0;
   var timing=ani.timing;
    if(ani.delay !== w.i){
     delay=ani.delay;
    }
    this.start=function(){
     if(typeof this.h === typeof {}){
      applyStyle(obj,ani.from);
       setTimeout(function(){
      obj.style.transition=timing+"ms";
         applyStyle(obj,ani.to);
       },delay);
     }
    }
    this.reset=function(){
      applyStyle(obj,ani.from);
    }
  }
