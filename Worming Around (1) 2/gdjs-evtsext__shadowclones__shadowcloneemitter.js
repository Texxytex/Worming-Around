
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter = gdjs.evtsExt__ShadowClones__ShadowCloneEmitter || {};

/**
 * Behavior generated from Shadow clone emitter
 */
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter = class ShadowCloneEmitter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Scale = behaviorData.Scale !== undefined ? behaviorData.Scale : "";
    this._behaviorData.Flippable = behaviorData.Flippable !== undefined ? behaviorData.Flippable : "";
    this._behaviorData.Opacity = behaviorData.Opacity !== undefined ? behaviorData.Opacity : "";
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.ClonesCount = behaviorData.ClonesCount !== undefined ? behaviorData.ClonesCount : Number("5") || 0;
    this._behaviorData.FramesGap = behaviorData.FramesGap !== undefined ? behaviorData.FramesGap : Number("8") || 0;
    this._behaviorData.OpacityEnd = behaviorData.OpacityEnd !== undefined ? behaviorData.OpacityEnd : Number("0") || 0;
    this._behaviorData.ScaleEnd = behaviorData.ScaleEnd !== undefined ? behaviorData.ScaleEnd : Number("1") || 0;
    this._behaviorData.MatchScaleX = behaviorData.MatchScaleX !== undefined ? behaviorData.MatchScaleX : true;
    this._behaviorData.MatchScaleY = behaviorData.MatchScaleY !== undefined ? behaviorData.MatchScaleY : true;
    this._behaviorData.MatchAngle = behaviorData.MatchAngle !== undefined ? behaviorData.MatchAngle : true;
    this._behaviorData.MatchAnimation = behaviorData.MatchAnimation !== undefined ? behaviorData.MatchAnimation : true;
    this._behaviorData.MatchAnimationFrame = behaviorData.MatchAnimationFrame !== undefined ? behaviorData.MatchAnimationFrame : true;
    this._behaviorData.MatchVerticalFlip = behaviorData.MatchVerticalFlip !== undefined ? behaviorData.MatchVerticalFlip : true;
    this._behaviorData.MatchHorizontalFlip = behaviorData.MatchHorizontalFlip !== undefined ? behaviorData.MatchHorizontalFlip : true;
    this._behaviorData.OpacityStart = behaviorData.OpacityStart !== undefined ? behaviorData.OpacityStart : Number("0.5") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Scale !== undefined)
      this._behaviorData.Scale = behaviorOverriding.Scale;
    if (behaviorOverriding.Flippable !== undefined)
      this._behaviorData.Flippable = behaviorOverriding.Flippable;
    if (behaviorOverriding.Opacity !== undefined)
      this._behaviorData.Opacity = behaviorOverriding.Opacity;
    if (behaviorOverriding.Animation !== undefined)
      this._behaviorData.Animation = behaviorOverriding.Animation;
    if (behaviorOverriding.ClonesCount !== undefined)
      this._behaviorData.ClonesCount = behaviorOverriding.ClonesCount;
    if (behaviorOverriding.FramesGap !== undefined)
      this._behaviorData.FramesGap = behaviorOverriding.FramesGap;
    if (behaviorOverriding.OpacityEnd !== undefined)
      this._behaviorData.OpacityEnd = behaviorOverriding.OpacityEnd;
    if (behaviorOverriding.ScaleEnd !== undefined)
      this._behaviorData.ScaleEnd = behaviorOverriding.ScaleEnd;
    if (behaviorOverriding.MatchScaleX !== undefined)
      this._behaviorData.MatchScaleX = behaviorOverriding.MatchScaleX;
    if (behaviorOverriding.MatchScaleY !== undefined)
      this._behaviorData.MatchScaleY = behaviorOverriding.MatchScaleY;
    if (behaviorOverriding.MatchAngle !== undefined)
      this._behaviorData.MatchAngle = behaviorOverriding.MatchAngle;
    if (behaviorOverriding.MatchAnimation !== undefined)
      this._behaviorData.MatchAnimation = behaviorOverriding.MatchAnimation;
    if (behaviorOverriding.MatchAnimationFrame !== undefined)
      this._behaviorData.MatchAnimationFrame = behaviorOverriding.MatchAnimationFrame;
    if (behaviorOverriding.MatchVerticalFlip !== undefined)
      this._behaviorData.MatchVerticalFlip = behaviorOverriding.MatchVerticalFlip;
    if (behaviorOverriding.MatchHorizontalFlip !== undefined)
      this._behaviorData.MatchHorizontalFlip = behaviorOverriding.MatchHorizontalFlip;
    if (behaviorOverriding.OpacityStart !== undefined)
      this._behaviorData.OpacityStart = behaviorOverriding.OpacityStart;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Scale: this._behaviorData.Scale,
    Flippable: this._behaviorData.Flippable,
    Opacity: this._behaviorData.Opacity,
    Animation: this._behaviorData.Animation,
    ClonesCount: this._behaviorData.ClonesCount,
    FramesGap: this._behaviorData.FramesGap,
    OpacityEnd: this._behaviorData.OpacityEnd,
    ScaleEnd: this._behaviorData.ScaleEnd,
    MatchScaleX: this._behaviorData.MatchScaleX,
    MatchScaleY: this._behaviorData.MatchScaleY,
    MatchAngle: this._behaviorData.MatchAngle,
    MatchAnimation: this._behaviorData.MatchAnimation,
    MatchAnimationFrame: this._behaviorData.MatchAnimationFrame,
    MatchVerticalFlip: this._behaviorData.MatchVerticalFlip,
    MatchHorizontalFlip: this._behaviorData.MatchHorizontalFlip,
    OpacityStart: this._behaviorData.OpacityStart,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Scale !== undefined)
      this._behaviorData.Scale = networkSyncData.props.Scale;
    if (networkSyncData.props.Flippable !== undefined)
      this._behaviorData.Flippable = networkSyncData.props.Flippable;
    if (networkSyncData.props.Opacity !== undefined)
      this._behaviorData.Opacity = networkSyncData.props.Opacity;
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.ClonesCount !== undefined)
      this._behaviorData.ClonesCount = networkSyncData.props.ClonesCount;
    if (networkSyncData.props.FramesGap !== undefined)
      this._behaviorData.FramesGap = networkSyncData.props.FramesGap;
    if (networkSyncData.props.OpacityEnd !== undefined)
      this._behaviorData.OpacityEnd = networkSyncData.props.OpacityEnd;
    if (networkSyncData.props.ScaleEnd !== undefined)
      this._behaviorData.ScaleEnd = networkSyncData.props.ScaleEnd;
    if (networkSyncData.props.MatchScaleX !== undefined)
      this._behaviorData.MatchScaleX = networkSyncData.props.MatchScaleX;
    if (networkSyncData.props.MatchScaleY !== undefined)
      this._behaviorData.MatchScaleY = networkSyncData.props.MatchScaleY;
    if (networkSyncData.props.MatchAngle !== undefined)
      this._behaviorData.MatchAngle = networkSyncData.props.MatchAngle;
    if (networkSyncData.props.MatchAnimation !== undefined)
      this._behaviorData.MatchAnimation = networkSyncData.props.MatchAnimation;
    if (networkSyncData.props.MatchAnimationFrame !== undefined)
      this._behaviorData.MatchAnimationFrame = networkSyncData.props.MatchAnimationFrame;
    if (networkSyncData.props.MatchVerticalFlip !== undefined)
      this._behaviorData.MatchVerticalFlip = networkSyncData.props.MatchVerticalFlip;
    if (networkSyncData.props.MatchHorizontalFlip !== undefined)
      this._behaviorData.MatchHorizontalFlip = networkSyncData.props.MatchHorizontalFlip;
    if (networkSyncData.props.OpacityStart !== undefined)
      this._behaviorData.OpacityStart = networkSyncData.props.OpacityStart;
  }

  // Properties:
  
  _getScale() {
    return this._behaviorData.Scale !== undefined ? this._behaviorData.Scale : "";
  }
  _setScale(newValue) {
    this._behaviorData.Scale = newValue;
  }
  _getFlippable() {
    return this._behaviorData.Flippable !== undefined ? this._behaviorData.Flippable : "";
  }
  _setFlippable(newValue) {
    this._behaviorData.Flippable = newValue;
  }
  _getOpacity() {
    return this._behaviorData.Opacity !== undefined ? this._behaviorData.Opacity : "";
  }
  _setOpacity(newValue) {
    this._behaviorData.Opacity = newValue;
  }
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getClonesCount() {
    return this._behaviorData.ClonesCount !== undefined ? this._behaviorData.ClonesCount : Number("5") || 0;
  }
  _setClonesCount(newValue) {
    this._behaviorData.ClonesCount = newValue;
  }
  _getFramesGap() {
    return this._behaviorData.FramesGap !== undefined ? this._behaviorData.FramesGap : Number("8") || 0;
  }
  _setFramesGap(newValue) {
    this._behaviorData.FramesGap = newValue;
  }
  _getOpacityEnd() {
    return this._behaviorData.OpacityEnd !== undefined ? this._behaviorData.OpacityEnd : Number("0") || 0;
  }
  _setOpacityEnd(newValue) {
    this._behaviorData.OpacityEnd = newValue;
  }
  _getScaleEnd() {
    return this._behaviorData.ScaleEnd !== undefined ? this._behaviorData.ScaleEnd : Number("1") || 0;
  }
  _setScaleEnd(newValue) {
    this._behaviorData.ScaleEnd = newValue;
  }
  _getMatchScaleX() {
    return this._behaviorData.MatchScaleX !== undefined ? this._behaviorData.MatchScaleX : true;
  }
  _setMatchScaleX(newValue) {
    this._behaviorData.MatchScaleX = newValue;
  }
  _toggleMatchScaleX() {
    this._setMatchScaleX(!this._getMatchScaleX());
  }
  _getMatchScaleY() {
    return this._behaviorData.MatchScaleY !== undefined ? this._behaviorData.MatchScaleY : true;
  }
  _setMatchScaleY(newValue) {
    this._behaviorData.MatchScaleY = newValue;
  }
  _toggleMatchScaleY() {
    this._setMatchScaleY(!this._getMatchScaleY());
  }
  _getMatchAngle() {
    return this._behaviorData.MatchAngle !== undefined ? this._behaviorData.MatchAngle : true;
  }
  _setMatchAngle(newValue) {
    this._behaviorData.MatchAngle = newValue;
  }
  _toggleMatchAngle() {
    this._setMatchAngle(!this._getMatchAngle());
  }
  _getMatchAnimation() {
    return this._behaviorData.MatchAnimation !== undefined ? this._behaviorData.MatchAnimation : true;
  }
  _setMatchAnimation(newValue) {
    this._behaviorData.MatchAnimation = newValue;
  }
  _toggleMatchAnimation() {
    this._setMatchAnimation(!this._getMatchAnimation());
  }
  _getMatchAnimationFrame() {
    return this._behaviorData.MatchAnimationFrame !== undefined ? this._behaviorData.MatchAnimationFrame : true;
  }
  _setMatchAnimationFrame(newValue) {
    this._behaviorData.MatchAnimationFrame = newValue;
  }
  _toggleMatchAnimationFrame() {
    this._setMatchAnimationFrame(!this._getMatchAnimationFrame());
  }
  _getMatchVerticalFlip() {
    return this._behaviorData.MatchVerticalFlip !== undefined ? this._behaviorData.MatchVerticalFlip : true;
  }
  _setMatchVerticalFlip(newValue) {
    this._behaviorData.MatchVerticalFlip = newValue;
  }
  _toggleMatchVerticalFlip() {
    this._setMatchVerticalFlip(!this._getMatchVerticalFlip());
  }
  _getMatchHorizontalFlip() {
    return this._behaviorData.MatchHorizontalFlip !== undefined ? this._behaviorData.MatchHorizontalFlip : true;
  }
  _setMatchHorizontalFlip(newValue) {
    this._behaviorData.MatchHorizontalFlip = newValue;
  }
  _toggleMatchHorizontalFlip() {
    this._setMatchHorizontalFlip(!this._getMatchHorizontalFlip());
  }
  _getOpacityStart() {
    return this._behaviorData.OpacityStart !== undefined ? this._behaviorData.OpacityStart : Number("0.5") || 0;
  }
  _setOpacityStart(newValue) {
    this._behaviorData.OpacityStart = newValue;
  }
}

/**
 * Shared data generated from Shadow clone emitter
 */
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.SharedData = class ShadowCloneEmitterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ShadowClones_ShadowCloneEmitterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ShadowClones_ShadowCloneEmitterSharedData = new gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.SharedData(
      initialData
    );
  }
  return instanceContainer._ShadowClones_ShadowCloneEmitterSharedData;
}

// Methods:
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects2= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects3= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects2= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects3= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546AnimateClonesContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1});
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546AnimateClonesContext_9546GDCloneObjects1Objects = Hashtable.newFrom({"Clone": gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects1});
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchScaleX();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(7).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchScaleY();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchAngle();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchAnimation();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchAnimationFrame();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(4).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchVerticalFlip();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(5).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMatchHorizontalFlip();
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(6).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Clone"), gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1);
{gdjs.evtsExt__ShadowClones__AnimateShadowClonesWithCapabilities.func(runtimeScene, gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546AnimateClonesContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Scale"), eventsFunctionContext.getBehaviorName("Flippable"), eventsFunctionContext.getBehaviorName("Opacity"), eventsFunctionContext.getBehaviorName("Animation"), gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546AnimateClonesContext_9546GDCloneObjects1Objects, eventsFunctionContext.getBehaviorName("Scale2"), eventsFunctionContext.getBehaviorName("Flippable2"), eventsFunctionContext.getBehaviorName("Opacity2"), eventsFunctionContext.getBehaviorName("Animation2"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClonesCount(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFramesGap(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityStart(), Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityEnd(), (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityStart() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityEnd()) / (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClonesCount() + 1)), Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScaleEnd(), 1 / (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClonesCount() + 1)), (( gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1[0].getLayer()), (( gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1[0].getZOrder()) - 1, eventsFunctionContext.localVariables[0].getFromIndex(7).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(5).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(6).getAsNumber(), eventsFunctionContext);
}
}

}


};gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchAngleValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchScaleYValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CopyOfMatchAngleValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchAnimationValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchAnimationFrameValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchVerticalFlipValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchHorizontalFlipValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MatchScaleXValue", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClones = function(Clone, Scale2, Flippable2, Opacity2, Animation2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Clone": Clone
},
  _objectArraysMap: {
"Object": thisObjectList
, "Clone": gdjs.objectsListsToArray(Clone)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
, "Scale2": Scale2
, "Flippable2": Flippable2
, "Opacity2": Opacity2
, "Animation2": Animation2
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects2.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects3.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects2.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.AnimateClonesContext.GDCloneObjects3.length = 0;


return;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClonesCount();}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCount = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ClonesCountContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClonesCount(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCount = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetClonesCountContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFramesGap();}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.FramesGapContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFramesGap(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGap = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetFramesGapContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityStart();}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStart = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityStartContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOpacityStart(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStart = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityStartContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityEnd();}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEnd = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.OpacityEndContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOpacityEnd(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEnd = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetOpacityEndContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScaleEnd();}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEnd = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.ScaleEndContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.GDObjectObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setScaleEnd(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEnd = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.SetScaleEndContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext = {};
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.idToCallbackMap = new Map();
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects2= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects1= [];
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects2= [];


gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546DeleteClonesContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects1});
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546DeleteClonesContext_9546GDCloneObjects1Objects = Hashtable.newFrom({"Clone": gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects1});
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Clone"), gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects1);
{gdjs.evtsExt__ShadowClones__DeleteShadowClones.func(runtimeScene, gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546DeleteClonesContext_9546GDObjectObjects1Objects, gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.mapOfGDgdjs_9546evtsExt_9595_9595ShadowClones_9595_9595ShadowCloneEmitter_9546ShadowCloneEmitter_9546prototype_9546DeleteClonesContext_9546GDCloneObjects1Objects, eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClones = function(Clone, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Clone": Clone
},
  _objectArraysMap: {
"Object": thisObjectList
, "Clone": gdjs.objectsListsToArray(Clone)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "Flippable": this._getFlippable()
, "Opacity": this._getOpacity()
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShadowClones"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShadowClones"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects2.length = 0;

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects1.length = 0;
gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.DeleteClonesContext.GDCloneObjects2.length = 0;


return;
}

gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ShadowClones::ShadowCloneEmitter", gdjs.evtsExt__ShadowClones__ShadowCloneEmitter.ShadowCloneEmitter);
