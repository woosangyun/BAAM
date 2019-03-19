(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mainpage_atlas_", frames: [[0,0,1400,1270]]},
		{name:"mainpage_atlas_2", frames: [[0,1272,1859,603],[0,0,1400,1270]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["mainpage_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pages = function() {
	this.initialize(ss["mainpage_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.phone = function() {
	this.initialize(ss["mainpage_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scene_1_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone
	this.instance = new lib.phone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(375));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(375));

}).prototype = p = new cjs.MovieClip();


(lib.mc_pages_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pages();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pages_Layer_1, null, null);


(lib.mc_pages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.mc_pages_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(929.5,301.5,1,1,0,0,0,929.5,301.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pages, new cjs.Rectangle(0,0,1859,603), null);


(lib.mc_pagegroup_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mc_pages();
	this.instance.parent = this;
	this.instance.setTransform(929.5,301.5,1,1,0,0,0,929.5,301.5);

	this.instance_1 = new lib.mc_pages();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4847.5,301.5,1,1,0,0,0,929.5,301.5);

	this.instance_2 = new lib.mc_pages();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2888.5,301.5,1,1,0,0,0,929.5,301.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pagegroup_Layer_1, null, null);


(lib.mc_pagegroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.mc_pagegroup_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(2888.5,301.5,1,1,0,0,0,2888.5,301.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pagegroup, new cjs.Rectangle(0,0,5777,603), null);


(lib.Scene_1_page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// page
	this.instance = new lib.mc_pagegroup();
	this.instance.parent = this;
	this.instance.setTransform(700.5,638.5,1,1,0,0,0,2888.5,301.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:308.5},25,cjs.Ease.quadInOut).wait(50).to({x:-83.5},25,cjs.Ease.quadInOut).wait(50).to({x:-475.5},25,cjs.Ease.quadInOut).wait(50).to({x:-867.5},25,cjs.Ease.quadInOut).wait(50).to({x:-1259.5},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.mainpage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_374 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// phone_obj_
	this.phone = new lib.Scene_1_phone();
	this.phone.name = "phone";
	this.phone.parent = this;
	this.phone.setTransform(700,635,1,1,0,0,0,700,635);
	this.phone.depth = 0;
	this.phone.isAttachedToCamera = 0
	this.phone.isAttachedToMask = 0
	this.phone.layerDepth = 0
	this.phone.layerIndex = 0
	this.phone.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(375));

	// page_obj_
	this.page = new lib.Scene_1_page();
	this.page.name = "page";
	this.page.parent = this;
	this.page.setTransform(700.5,638.5,1,1,0,0,0,700.5,638.5);
	this.page.depth = 0;
	this.page.isAttachedToCamera = 0
	this.page.isAttachedToMask = 0
	this.page.layerDepth = 0
	this.page.layerIndex = 1
	this.page.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.page).wait(375));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(700,635,1,1,0,0,0,700,635);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 2
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3448,635,7037,635);
// library properties:
lib.properties = {
	id: '1479140CC7FC4F6396BE457ED6C7D640',
	width: 1400,
	height: 1270,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../_images/works/project/finset/mainpage_atlas_.png", id:"mainpage_atlas_"},
		{src:"../_images/works/project/finset/mainpage_atlas_2.png", id:"mainpage_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1479140CC7FC4F6396BE457ED6C7D640'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;