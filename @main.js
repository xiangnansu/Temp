function play()
{
	/*
	var audio=document.getElementById("audio");
	audio.play();
	*/
	setTimeout(() =>
	{
		document.getElementById("frame").dispatchEvent(new Event("click"));
		document.getElementById("frame").dispatchEvent(new Event("touchstart"));
	}, 500);
}

(function Xiangnansu()
{
	'use strict';

	window.focus();
	window.ondragstart=() => false;

	class Cursor
	{
		static #left;
		static #top;

		static get left()
		{
			return this.#left;
		}
		static get top()
		{
			return this.#top;
		}

		#element;
		#hTimeout;

		$mousedown;
		$mousemove;
		$mouseup;

		constructor(element)
		{
			this.#element=new Element(element);

			const mousedown=(e) =>
			{
				if(Global.touchable===true)
				{
					return;
				}
				this.#mousedown(e);
			};
			const mousemove=(e) =>
			{
				if(Global.touchable===true)
				{
					return;
				}
				this.#mousemove(e);
			};
			const mouseup=(e) =>
			{
				if(Global.touchable===true)
				{
					return;
				}
				this.#mouseup(e);
			};
			const touchend=(e) =>
			{
				clearTimeout(this.#hTimeout);
				this.#mouseup(e);
				e.preventDefault();
			};
			const touchmove=(e) =>
			{
				clearTimeout(this.#hTimeout);
				this.#hTimeout=setTimeout(() =>
				{
					if(Draggable.touchstart(e))
					{
						this.#mousedown(e);
					}
				}, 0.20*1000);
				this.#mousemove(e);
				e.preventDefault();

			};
			const touchstart=(e) =>
			{
				Global.touchable=true;
				if(Draggable.touchstart(e))
				{
					this.#mousedown(e);
				}
				if(this.#element.visible)
				{
					([Cursor.#left, Cursor.#top]=Utility.getCursorPosition(e));
					this.element.left=Cursor.#left;
					this.element.top=Cursor.#top;
				}
				e.preventDefault();
			};
			Global.frame.addEventListener("mousedown", mousedown, false);
			Global.frame.addEventListener("mousemove", mousemove, false);
			Global.frame.addEventListener("mouseup", mouseup, false);
			Global.frame.addEventListener("touchstart", touchstart, false);
			Global.frame.addEventListener("touchmove", touchmove, false);
			Global.frame.addEventListener("touchend", touchend, false);
		}

		get element()
		{
			return this.#element;
		}
		get style()
		{
			return this.#element.style;
		}
		set visible(value)
		{
			this.#element.visible=value;
			this.#element.left=Cursor.#left;
			this.#element.top=Cursor.#top;
		}

		#mousedown(e)
		{
			if(this.#element.visible)
			{
				([Cursor.#left, Cursor.#top]=Utility.getCursorPosition(e));
				this.$mousedown&&this.$mousedown(Cursor.#left, Cursor.#top);
			}
		}
		#mousemove(e)
		{
			if(this.#element.visible)
			{
				([Cursor.#left, Cursor.#top]=Utility.getCursorPosition(e));
				this.element.left=Cursor.#left;
				this.element.top=Cursor.#top;
				this.$mousemove&&this.$mousemove(Cursor.#left, Cursor.#top);
			}
		}
		#mouseup(e)
		{
			if(this.#element.visible)
			{
				this.$mouseup&&this.$mouseup(Cursor.#left, Cursor.#top);
			}
		}
	}
	class Draggable
	{
		static #dragger=null;
		static #draggers=new Array();

		static get dragger()
		{
			return Draggable.#dragger;
		}

		static release()
		{
			if(Draggable.#dragger!==null)
			{
				Draggable.#dragger.#element.style["pointer-events"]="auto";
				Draggable.#dragger.#element.style["z-index"]=Draggable.#dragger.#previousZIndex;
				Draggable.#dragger=null;
			}
		}
		static touchstart(e)
		{
			for(let i=0; i<Draggable.#draggers.length; i++)
			{
				const [left, top]=Utility.getCursorPosition(e);
				const dragger=Draggable.#draggers[i];
				if(Utility.isIntersectPoint({left: left, top: top}, dragger.element.rect))
				{
					dragger.#mousedown(e);
					return true;
				}
			}
			return false;
		}

		#draggable=true;
		#element;
		#lastMoveX;
		#lastMoveY;
		#offsetX;
		#offsetY;
		#originalX;
		#originalY;
		#previousZIndex;

		$mousedown;
		$mouseenter;
		$mouseleave;
		$mousemove;
		$mouseup;

		constructor()
		{
			Draggable.#draggers.push(this);
		}

		set draggable(value)
		{
			this.#draggable=value;
		}
		get element()
		{
			return this.#element;
		}
		get previousXIndex()
		{
			return this.#previousZIndex;
		}

		#mousedown(e)
		{
			if((Draggable.#dragger===null)&&(this.#draggable===true))
			{
				Draggable.#dragger=this;
				this.#previousZIndex=this.#element.style["z-index"];
				this.#element.style["z-index"]=999;
				this.#element.style["pointer-events"]="none";
				this.#originalX=this.#element.left;
				this.#originalY=this.#element.top;
				let [left, top]=Utility.getCursorPosition(e);
				this.#offsetX=left-this.#element.left;
				this.#offsetY=top-this.#element.top;
				if((this.$mousedown&&this.$mousedown(left, top))==="reject")
				{
					this.#element.style["pointer-events"]="auto";
					Draggable.#dragger=null;
				}
			}
		}
		#mousemove(e)
		{
			if(Draggable.#dragger===this)
			{
				let [left, top]=Utility.getCursorPosition(e);
				this.#element.left=left-this.#offsetX;
				this.#element.top=top-this.#offsetY;
				this.$mousemove&&this.$mousemove(left, top);
				this.#lastMoveX=left;
				this.#lastMoveY=top;
			}
		}
		#mouseup(e)
		{
			if(Draggable.#dragger===this)
			{
				if(this.$mouseup)
				{
					if(this.$mouseup(this.#lastMoveX, this.#lastMoveY))
					{
						Draggable.prototype.restore.call(this);
					}
				}
				Draggable.#dragger=null;
			}
		}

		initialize(element)
		{
			this.#element=new Element(element);

			const mousedown=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.#mousedown(e);
			};
			const mouseenter=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.$mouseenter&&this.$mouseenter();
			};
			const mouseleave=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.$mouseleave&&this.$mouseleave();
			};
			const mousemove=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.#mousemove(e);
			};
			const mouseup=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.#mouseup(e);
			};
			const touchend=(e) =>
			{
				if(Droppable.touchend(e)===false)
				{
					this.#mouseup(e);
				}
				e.preventDefault();
			};
			const touchmove=(e) =>
			{
				this.#mousemove(e);
				Droppable.touchmove(e);
				e.preventDefault();
			};
			const touchstart=(e) =>
			{
				Global.touchable=true;
				this.#mousedown(e);
				e.preventDefault();
			};

			this.#element.addEventListener("mousedown", mousedown, false);
			this.#element.addEventListener("mouseenter", mouseenter, false);
			this.#element.addEventListener("mouseleave", mouseleave, false);
			Global.frame.addEventListener("mousemove", mousemove, false);
			Global.frame.addEventListener("mouseup", mouseup, false);
			this.#element.addEventListener("touchstart", touchstart, false);
			Global.frame.addEventListener("touchmove", touchmove, false);
			Global.frame.addEventListener("touchend", touchend, false);
		}
		restore()
		{
			this.#element.style["pointer-events"]="auto";
			this.#element.style["z-index"]=this.#previousZIndex;
			this.#element.left=this.#originalX;
			this.#element.top=this.#originalY;
		}
	}
	class Droppable
	{
		static #droppers=new Array();

		static touchend(e)
		{
			for(let i=0; i<Droppable.#droppers.length; i++)
			{
				const dropper=Droppable.#droppers[i];
				if(dropper.entered)
				{
					dropper.#mouseup(e);
					return true;
				}
			}
			return false;
		}
		static touchmove(e)
		{
			for(let i=0; i<Droppable.#droppers.length; i++)
			{
				const [left, top]=Utility.getCursorPosition(e);
				const dropper=Droppable.#droppers[i];
				if(Utility.isIntersectPoint({left: left, top: top}, dropper.element.rect))
				{
					if(dropper.entered)
					{
						continue;
					}
					dropper.entered=true;
					dropper.#mouseenter();
				}
				else if(dropper.entered===true)
				{
					dropper.entered=false;
					dropper.#mouseleave();
				}
			}
		}

		#element
		#entered=false;

		$mouseenter;
		$mouseleave;
		$mouseup;

		acceptable=true;
		acceptCallback;
		mouseUpEvent;
		rejectCallback;

		constructor()
		{
		}

		get element()
		{
			return this.#element;
		}

		#mouseenter()
		{
			if(Draggable.dragger!==null)
			{
				this.$mouseenter&&this.$mouseenter(Draggable.dragger);
			}
		}
		#mouseleave()
		{
			if(Draggable.dragger!==null)
			{
				this.$mouseleave&&this.$mouseleave(Draggable.dragger);
			}
		}
		#mouseup()
		{
			if(Draggable.dragger!==null)
			{
				this.$mouseup&&this.$mouseup(Draggable.dragger);
				Draggable.release();
			}
		}

		initialize(element)
		{
			this.#element=new Element(element);
			Droppable.#droppers.push(this);

			const mouseenter=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.#mouseenter();
			}
			const mouseleave=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.#mouseleave();
			}
			const mouseup=(e) =>
			{
				if(Global.touchable)
				{
					return;
				}
				this.#mouseup();
			}
			const touchend=(e) =>
			{
				this.#mouseup();
				e.preventDefault();
			};

			this.#element.addEventListener("mouseenter", mouseenter, false)
			this.#element.addEventListener("mouseleave", mouseleave, false)
			this.#element.addEventListener("mouseup", mouseup, false);
			Global.frame.addEventListener("touchend", touchend, false);
		}
	}
	class Element
	{
		#element;
		#handlers=new Array();

		constructor(element)
		{
			this.#element=element;
		}

		get bottom()
		{
			return this.top+this.height;
		}
		set bottom(value)
		{
			this.top=value-this.height;
		}
		get children()
		{
			return this.#element.children;
		}
		get element()
		{
			return this.#element;
		}
		get left()
		{
			return this.#element.getBoundingClientRect().left-Global.frame.getBoundingClientRect().left;
		}
		set left(value)
		{
			this.#element.style["left"]=value-(1-this.scale.x)*parseFloat(getComputedStyle(this.#element).width)/2.0+"px";
		}
		get height()
		{
			return this.#element.getBoundingClientRect().height;
		}
		set height(value)
		{
			this.#element.style["height"]=value+"px";
		}
		get rect()
		{
			return {
				left: this.left,
				top: this.top,
				width: this.width,
				height: this.height,
				right: this.left+this.width,
				bottom: this.top+this.height,
			};
		}
		get right()
		{
			return this.left+this.width;
		}
		set right(value)
		{
			this.left=value-this.width;
		}
		get scale()
		{
			return {x: this.#element.getBoundingClientRect().width/this.#element.offsetWidth, y: this.#element.getBoundingClientRect().height/this.#element.offsetHeight};
		}
		get style()
		{
			return this.#element.style;
		}
		get top()
		{
			return this.#element.getBoundingClientRect().top-Global.frame.getBoundingClientRect().top;
		}
		set top(value)
		{
			this.#element.style["top"]=value-(1-this.scale.y)*parseFloat(getComputedStyle(this.#element).height)/2.0+"px";
		}
		get visible()
		{
			return (getComputedStyle(this.#element).display==="none")? false:true;
		}
		set visible(value)
		{
			this.#element.style["display"]=(value)? "block":"none";
		}
		get width()
		{
			return this.#element.getBoundingClientRect().width;
		}
		set width(value)
		{
			this.#element.style["width"]=value+"px";
		}

		addEventListener(event, handler)
		{
			this.#element.addEventListener(event, handler);
			for(let i=0; i<this.#handlers.length; i++)
			{
				if(this.#handlers[i]===null)
				{
					this.#handlers[i]=handler;
					return i;
				}
			}
			return this.#handlers.push(handler)-1;
		}
		getComputedStyle()
		{
			return this.getComputedStyle(this.#element.get);
		}
		removeEventListener(event, handler)
		{
			this.#element.removeEventListener(event, handler);
			for(let i=0; i<this.#handlers.length; i++)
			{
				if(this.#handlers[i]===handler)
				{
					this.#handlers[i]=null;
				}
			}
		}
		removeEventListenerByIndex(event, index)
		{
			this.#element.removeEventListener(event, this.#handlers[index]);
			this.#handlers[index]=null;
		}
	}
	class Global
	{
		static #frame=document.querySelector("#frame");
		static #touchable=false;

		static get frame()
		{
			return Global.#frame;
		}
		static get touchable()
		{
			return Global.#touchable;
		}
		static set touchable(value)
		{
			if(Global.#touchable===false)
			{
				Global.#touchable=true;
			}
		}
	}
	class Utility
	{
		static getRandomArray(buffer)
		{
			for(let i=0; i<buffer.length; i++)
			{
				let index=Utility.getRandom(buffer.length);
				[buffer[i], buffer[index]]=[buffer[index], buffer[i]];
			}
			return buffer;
		}
		static createNonRepetitiveRandom(maxValue, length)
		{
			if(length===undefined)
			{
				length=maxValue;
			}
			let buffer=new Array(length);
			for(let i=0; i<buffer.length; i++)
			{
				buffer[i]=i%maxValue;
			}
			for(let i=0; i<buffer.length; i++)
			{
				let index=Utility.getRandom(buffer.length);
				[buffer[i], buffer[index]]=[buffer[index], buffer[i]];
			}
			return {
				getRepetitiveRandom: () => buffer.shift(),
				getBuffer: () => buffer
			}
		}
		static getCursorPosition(e)
		{
			if(e.touches===undefined)
			{
				return [e.clientX-Global.frame.getBoundingClientRect().left, e.clientY-Global.frame.getBoundingClientRect().top];
			}
			return [e.touches[0].clientX-Global.frame.getBoundingClientRect().left, e.touches[0].clientY-Global.frame.getBoundingClientRect().top];
		}
		static getDistance(x1, y1, x2, y2)
		{
			return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
		}
		static getRandom(maxValue)
		{
			return Math.floor(Math.random()*maxValue);
		}
		static getRandomSort(buffer)
		{
			return Utility.createNonRepetitiveRandom(0, buffer).getBuffer();
		}
		static isBaiduBrowser()
		{
			let userAgent=navigator.userAgent.toLowerCase();
			return (userAgent.indexOf("bidu")>=0)||(userAgent.indexOf("baidu")>=0)||false;
		}
		static isFirefoxBrowser()
		{
			let userAgent=navigator.userAgent.toLowerCase();
			return (userAgent.indexOf("firefox")>=0)||(userAgent.indexOf("fxios/i")>=0)||false;
		}
		static waitForSeconds(seconds)
		{
			return new Promise((resolve) =>
			{
				return setTimeout(resolve, seconds*1000.0);
			});
		}
		static waitForCondition(conditionCallback, resolveCallback)
		{
			if(conditionCallback())
			{
				resolveCallback&&resolveCallback();
			}
			else
			{
				setTimeout(this.waitForCondition.bind(this, conditionCallback, resolveCallback), 0);
			}
		}
		static isIntersectRect(rect1, rect2)
		{
			if((Utility.isIntersectPoint({left: rect1.left, top: rect1.top}, rect2))||(Utility.isIntersectPoint({left: rect1.left+rect1.width, top: rect1.top}, rect2))||(Utility.isIntersectPoint({left: rect1.left, top: rect1.top+rect1.height}, rect2))||(Utility.isIntersectPoint({left: rect1.left+rect1.width, top: rect1.top+rect1.height}, rect2)))
			{
				return true;
			}
			return false;
		}
		static isIntersectPoint(point, rect)
		{
			if((point.left>rect.left)&&(point.left<rect.left+rect.width)&&(point.top>rect.top)&&(point.top<rect.top+rect.height))
			{
				return true;
			}
			return false;
		}
	}

	class BackgroundMusic
	{
		#backgroundMusic;

		constructor()
		{
			if(!BackgroundMusic.instance)
			{
				this.#backgroundMusic=new Audio("sounds/6_bgmusic05.wav.mp3");
				this.#backgroundMusic.addEventListener('ended',function()
				{
					this.currentTime=0;
					this.play();
				},false);
				const autoplay=() =>
				{
					this.#backgroundMusic.play();
					if((this.#backgroundMusic.duration>0)&&(this.#backgroundMusic.paused===false))
					{
						document.removeEventListener("mousedown", autoplay);
						document.removeEventListener("touchstart", autoplay);
					}
					else
					{
						setTimeout(() =>
						{
							document.dispatchEvent(new Event("mousedown"));
							document.dispatchEvent(new Event("touchstart"));
						}, 0);
					}
				}
				document.addEventListener("mousedown", autoplay);
				document.addEventListener("touchstart", autoplay);
			}
			return BackgroundMusic.instance||(BackgroundMusic.instance=this);
		}
		pause()
		{
			this.backgroundMusic.pause();
			this.backgroundMusic.currentTime=0;
		}
		play()
		{
			this.backgroundMusic.play();
		}
	}
	class Candy extends Draggable
	{
		static #triggerTop;

		#accept="";
		#actionCallback
		#color
		#dropping=false;
		#originalTop;
		#reject="";

		constructor(color,left,top,actionCallback)
		{
			super();

			this.#color=color;
			if(!left)
			{
				left=0;
			}
			if(!top)
			{
				top=400;
			}
			this.#actionCallback=actionCallback;
			this.#originalTop=top;
			if(!Candy.#triggerTop)
			{
				let fishBowl=document.querySelector(".fish-bowls> .fish-bowls_fish-bowl-"+this.#color);
				let height=parseFloat(getComputedStyle(fishBowl).height);
				Candy.#triggerTop=parseFloat(getComputedStyle(fishBowl).top)+height*0.125+20;
			}

			const candy=document.createElement("div");
			candy.className="candy";
			candy.style["z-index"]="98";
			candy.style["left"]=left+"px";
			candy.style["top"]=top+"px";
			Global.frame.appendChild(candy);

			let svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
			svg.setAttribute("width","74");
			svg.setAttribute("height","54");
			svg.setAttribute("viewBox","0 0 74 54");
			svg.setAttribute("version","1.1");
			candy.appendChild(svg);

			let path=document.createElementNS("http://www.w3.org/2000/svg","path");
			path.setAttribute("d","m69.805 14.584 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l-0.05 0.05 0.9 1.85q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7q-0.5-0.05-0.85-0.65l-0.4-1.1q-0.8-3.05-0.7-7.75 2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4l0.3 1.15-0.1 1.2 0.15 0.85 0.95 0.5");
			path.setAttribute("fill",(this.#color==="red")? "#f00":(this.#color==="green")? "#0f0":(this.#color==="blue")? "#00f":"");
			path.setAttribute("fill-rule","evenodd");
			svg.appendChild(path);

			path=document.createElementNS("http://www.w3.org/2000/svg","path");
			path.setAttribute("d","m61.105 22.884q0.85 4.95-0.15 9.9-1 4.7-3.6 8.65-2.65 3.95-6.5 6.6-4 2.7-8.75 3.55l-9.4-0.3q-4.5-1.15-8.35-4-3.85-2.8-6.4-6.9-2.65-4.25-3.5-9.25-0.9-5 0.15-9.9 0.95-4.7 3.6-8.7 2.6-3.95 6.45-6.6 4-2.7 8.75-3.5l9.45 0.3q4.45 1.1 8.3 3.95 3.8 2.8 6.4 6.95 2.65 4.2 3.55 9.25");
			path.setAttribute("fill",(this.#color==="red")? "#f00":(this.#color==="green")? "#0f0":(this.#color==="blue")? "#00f":"");
			path.setAttribute("fill-rule","evenodd");
			svg.appendChild(path);

			path=document.createElementNS("http://www.w3.org/2000/svg","path");
			path.setAttribute("d","m9.7046 23.384q2.45 3.65 4.5 4.75l0.8-0.75q1.25 0.75 1.3 3.15v1.85l-0.2 1.75q-0.05 1.15-1 1.55l-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05");
			path.setAttribute("fill",(this.#color==="red")? "#f00":(this.#color==="green")? "#0f0":(this.#color==="blue")? "#00f":"");
			path.setAttribute("fill-rule","evenodd");
			svg.appendChild(path);

			path=document.createElementNS("http://www.w3.org/2000/svg","path");
			path.setAttribute("d","m5.7046 40.284 0.35-1.5 0.95-0.7 1.15-0.4q0.35-0.3 0.25-0.95l-0.3-0.65-0.35-0.5-0.85-1.35 0.4-1.15q0.5-0.7 0.45-1.05l-0.8-1.4q-1.9-3.3-2.35-3.75l0.2-0.4 0.8-0.85q0.45-0.55 0.25-1.15l-1.55-0.55-0.05 0.05q-0.55 1.45-0.55 2.75l0.05 1.3 0.4 1.15 0.5 1.1 0.65 1.95q0.35 1.05 0.15 2.35l-0.65 3.25q-0.1 1.35 0.9 2.45");
			path.setAttribute("fill",(this.#color==="red")? "#752605":(this.#color==="green")? "#006500":(this.#color==="blue")? "#00003e":"");
			path.setAttribute("fill-rule","evenodd");
			svg.appendChild(path);

			path=document.createElementNS("http://www.w3.org/2000/svg","path");
			path.setAttribute("d","m68.805 12.034-0.1 1.2 0.15 0.85 0.95 0.5 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l0.85 1.9q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7-0.45-0.15q-0.05 8.8-5.45 15.6-5.5 6.85-13.95 8.35-8.55 1.5-16.05-3.15-7.5-4.6-10.5-13.05l-0.45 0.3-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05 2.4 3.55 4.4 4.7-0.3-4.6 1.05-8.95 1.25-4.25 3.85-7.75 2.6-3.55 6.25-5.8 3.75-2.4 8.15-3.15 8.55-1.55 16.15 3.15 7.5 4.65 10.5 13.2l-0.05-0.5q2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4z");
			path.setAttribute("fill","none");
			path.setAttribute("stroke",(this.#color==="red")? "#f03":(this.#color==="green")? "#0c0":(this.#color==="blue")? "#009":"");
			path.setAttribute("stroke-linecap","round");
			path.setAttribute("stroke-linejoin","round");
			path.setAttribute("stroke-width","2");
			svg.appendChild(path);

			path=document.createElementNS("http://www.w3.org/2000/svg","path");
			path.setAttribute("d","m57.905 24.234q0.75 4.15-0.05 8.3-0.75 3.9-2.85 7.25-2.05 3.3-5.1 5.5-3.2 2.2-6.95 2.9-5.45 0.95-10.65-1.45-5-2.4-8.25-7.25 3.15 2.45 7 3.45l8 0.3q3.75-0.7 6.95-2.8 3.1-2 5.25-5 2.1-3.1 2.95-6.65 0.85-3.75 0.15-7.5-0.85-4.75-3.8-8.45-2.9-3.6-7.05-5.5 5.35 1.55 9.3 6.05 3.95 4.6 5.1 10.85");
			path.setAttribute("fill","#fff");
			path.setAttribute("fill-opacity",".70196");
			path.setAttribute("fill-rule","evenodd");
			svg.appendChild(path);

			this.$mousedown=(left,top) =>
			{
				this.element.left=left;
				this.element.top=top;
				this.element.style["transform"]="translate(-50%,-25%)";
			}
			this.$mousemove=(left,top) =>
			{
				this.element.left=left;
				this.element.top=top;
				this.element.style["transform"]="translate(-50%,-25%)";
			}
			this.$mouseup=(left,top) =>
			{
				let color=this.#onTopOf(left,top);
				if(this.#color===color)
				{
					this.#accept=color;
					this.#reject=color;
					this.#originalTop=350;
					this.#dropping=true;
					this.element.style["transform"]="translate(-50%,0%)";
					this.element.style["pointer-events"]="none";
					return false;
				}
				this.#reject=color;
				this.element.style["transform"]="translate(0%,0%)";
				return true;
			}

			super.initialize(candy);
		}
		action()
		{
			if(this.#dropping===true)
			{
				let top=this.element.top;

				let a=this.element.style["z-index"];

				if((this.#reject!=="")&&(top>Candy.#triggerTop)&&(this.element.style["z-index"]!=2))
				{
					if(this.#accept!=="")
					{
						this.element.style["z-index"]=2;
					}
					this.#actionCallback&&this.#actionCallback(this.#accept,this.#reject);
					this.#reject="";
				}
				if(top<this.#originalTop)
				{
					this.element.top=Math.min(top+10,this.#originalTop);
				}
				if(this.element.top>=this.#originalTop)
				{
					this.#dropping=false;
					this.element.style["pointer-events"]="auto";
				}
			}
		}
		destroy()
		{
			Global.frame.removeChild(this.element.element);
		}
		#onTopOf(cursorLeft, cursorTop)
		{
			let colors=["red","green","blue"];
			for(let i=0;i<colors.length;i++)
			{
				const fishBowl=new Element(document.querySelector(".fish-bowls> .fish-bowls_fish-bowl-"+colors[i]));
				if((cursorLeft>fishBowl.left+51)&&(cursorLeft<fishBowl.right+51-129)&&(cursorTop<fishBowl.top+20))
				{
					return colors[i];
				}
			}
			return "";
		}
	}
	class EndScreen
	{
		static endScreen=document.querySelector(".end-screen");

		static loseAudio;
		static winAudio;

		restartCallback;

		constructor(restartCallback)
		{
			if(!EndScreen.instance)
			{
				EndScreen.loseAudio=new Audio("sounds/4_lose.mp3");
				EndScreen.winAudio=new Audio("sounds/2_win.mp3");

				const click=(e) =>
				{
					this.shutup();
					this.setVisible(false);
					restartCallback&&restartCallback();
				}

				document.querySelector(".end-screen > .end-screen_buttons > .end-screen_buttons_button-1").addEventListener("click", click);
				document.querySelector(".end-screen > .end-screen_buttons > .end-screen_buttons_button-1").addEventListener("touchstart", click);
				let buttons=document.querySelector(".end-screen > .end-screen_buttons");
				for(let i=0;i<buttons.childElementCount;i++)
				{
					buttons.children[i].addEventListener("mouseenter",e =>
					{
						new Audio("sounds/95.mp3").play();
					});
				}
			}
			return EndScreen.instance||(EndScreen.instance=this);
		}
		getVisible()
		{
			return (EndScreen.endScreen.style["display"]==="block")? true:false;
		}
		setVisible(visible,win,score)
		{
			if(visible)
			{
				let result=document.querySelector(".end-screen > .end-screen_result");
				if(win)
				{
					EndScreen.winAudio.play();
					result.style["background-image"]="url(shapes/114.svg)";
				}
				else
				{
					EndScreen.loseAudio.play();
					result.style["background-image"]="url(shapes/111.svg)";
				}
				EndScreen.endScreen.style["display"]="block";
			}
			else
			{
				EndScreen.endScreen.style["display"]="none";
			}
		}
		shutup()
		{
			EndScreen.loseAudio.pause();
			EndScreen.loseAudio.currentTime=0;
			EndScreen.winAudio.pause();
			EndScreen.winAudio.currentTime=0;
		}
	}
	class ExitButton
	{
		constructor()
		{
			if(!ExitButton.instance)
			{
				document.querySelector(".exit-button").addEventListener("mouseenter",() =>
				{
					new Audio("sounds/78.mp3").play();
				});
			}
			return ExitButton.instance||(ExitButton.instance=this);
		}
	}
	class HandCursor extends Cursor
	{
		constructor()
		{
			if(!HandCursor.instance)
			{
				super(document.querySelector(".hand-cursor"));

				this.$mousedown=(left, top)=>
				{
					new Audio("sounds/1_pick.mp3").play();
					this.image="url(shapes/132.svg)";
				}
				this.$mousemove=(left, top)=>
				{
					this.element.left=left;
					this.element.top=top;
				}
				this.$mouseup=(left, top)=>
				{
					this.image="url(shapes/129.svg)";
				}

				this.image="url(shapes/129.svg)";
				this.visible=false;
			}
			return HandCursor.instance||(HandCursor.instance=this);
		}

		set image(value)
		{
			this.element.style["background-image"]=value;
			this.element.style["transform"]="scale(0.5, 0.5) translate(-45px, -140px)";
		}
	}
	class StartScreen
	{
		constructor(startButtonClickCallback)
		{
			if(!StartScreen.instance)
			{
				const startButton=document.querySelector(".start-screen > .start-screen-button");

				const click=(e) =>
				{
					new Audio("sounds/2_開始玩.mp3").play();
					document.querySelector(".start-screen").style["display"]="none";
					startButtonClickCallback&&startButtonClickCallback();
				}

				startButton.addEventListener("mouseenter",() =>
				{
					new Audio("sounds/95.mp3").play();
				});
				startButton.addEventListener("click", click);
				startButton.addEventListener("touchstart", click);
			}
			return StartScreen.instance||(StartScreen.instance=this);
		}
	}
	class StarCursor extends Cursor
	{
		constructor()
		{
			if(!StarCursor.instance)
			{
				super(document.querySelector(".star-cursor"));
				this.visible=false;
			}
			return StarCursor.instance||(StarCursor.instance=this);
		}
	}
	class Timer
	{
		static #timer=document.querySelector(".timer");

		#hInterval;
		#second;
		timeupCallback;

		constructor(timeupCallback)
		{
			if(!Timer.instance)
			{
				this.timeupCallback=timeupCallback;
				this.#second=0;
			}
			return Timer.instance||(Timer.instance=this);
		}
		start(duration)
		{
			this.#second=0;
			clearInterval(this.#hInterval);
			this.#hInterval=setInterval(() =>
			{
				this.#second+=0.1;
				let remainingTime=duration-this.#second;
				if(remainingTime<=0)
				{
					Timer.#timer.innerHTML="00:00";
					this.stop();
					this.timeupCallback&&this.timeupCallback();
				}
				else
				{
					Timer.#timer.innerHTML=`00:${(remainingTime/10<1)? "0":""}${Math.floor(remainingTime)}`;
				}
			},100);
		}
		stop()
		{
			this.#second=0;
			clearInterval(this.#hInterval);
		}
	}

	class Main
	{
		backgroundMusic;
		candies;
		endScreen;
		handCursor
		running
		score;
		starCursor;
		timer;

		constructor()
		{
			this.gameover=this.gameover.bind(this);
			this.restart=this.restart.bind(this);
			this.result=this.result.bind(this);
			this.start=this.start.bind(this);
			this.timeup=this.timeup.bind(this);

			new ExitButton();
			new StartScreen(this.start);

			this.backgroundMusic=new BackgroundMusic();
			this.endScreen=new EndScreen(this.restart);
			this.handCursor=new HandCursor();
			this.starCursor=new StarCursor();
			this.timer=new Timer(this.timeup);

			this.running=true;
			this.starCursor.visible=true;
		}
		gameover(win)
		{
			this.endScreen.setVisible(true,win);
			this.handCursor.visible=false;
			this.starCursor.visible=true;
			this.running=false;
			for(let i=0;i<this.candies.length;i++)
			{
				this.candies[i].destroy();
				delete this.candies[i];
				this.candies[i]=null;
			}
			this.candies=new Array();
		}
		restart()
		{
			this.start();
		}
		async result(correct,color)
		{
			new Audio("sounds/"+((correct)? "105":"103")+".mp3").play();
			let imageUrl="url(shapes/"+((correct)? "104":"102")+".svg)";
			let element=document.querySelector(".fish-bowls > .fish-bowls_fish-bowl-"+color+" > .result");
			for(let i=0;i<3;i++)
			{
				element.style["background-image"]=imageUrl;
				await Utility.waitForSeconds(0.1);
				element.style["background-image"]="none";
				await Utility.waitForSeconds(0.1);
			}
			element.style["background-image"]=imageUrl;
			await Utility.waitForSeconds(0.5);
			element.style["background-image"]="none";
		}
		async start()
		{
			this.endScreen.setVisible(false);
			this.handCursor.visible=true;
			this.starCursor.visible=false;
			this.running=true;
			this.score=0;
			this.timer.start(60);

			this.candies=new Array(15);
			let buffer=Utility.createNonRepetitiveRandom(15).getBuffer();
			let positions=[{ left: 70,top: 430 },{ left: 20,top: 490 },{ left: 95,top: 535 },{ left: 225,top: 435 },{ left: 155,top: 480 },{ left: 205,top: 525 },{ left: 315,top: 460 },{ left: 290,top: 535 },{ left: 400,top: 465 },{ left: 385,top: 525 },{ left: 480,top: 425 },{ left: 535,top: 480 },{ left: 485,top: 535 },{ left: 630,top: 450 },{ left: 600,top: 530 }];
			for(let i=0;i<this.candies.length;i++)
			{
				let candy=new Candy((buffer[i]<5)? "red":(buffer[i]<10)? "green":"blue",positions[i].left,positions[i].top,async (accept,reject) =>
					{
						if(accept!=="")
						{
							if(++this.score===15)
							{
								this.gameover(true);
							}
							else
							{
								this.result(true,accept);
							}
						}
						else
						{
							this.result(false,reject);
						}
					});
				this.candies[i]=candy;
			}
			while(this.running)
			{
				for(let i=0;i<this.candies.length;i++)
				{
					this.candies[i].action();
				}
				await Utility.waitForSeconds(0.033);
			}
		}
		timeup()
		{
			this.gameover(false);
		}
	}
	new Main();
})();