
gdjs.evtsExt__ScoreCounter__ScoreCounter = gdjs.evtsExt__ScoreCounter__ScoreCounter || {};

/**
 * Object generated from Animated score counter
 */
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter = class ScoreCounter extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Score = objectData.content.Score !== undefined ? objectData.content.Score : Number("0") || 0;
    this._objectData.IncreasingScoreSound = objectData.content.IncreasingScoreSound !== undefined ? objectData.content.IncreasingScoreSound : "";
    this._objectData.PitchBaselineMin = objectData.content.PitchBaselineMin !== undefined ? objectData.content.PitchBaselineMin : Number("0.7") || 0;
    this._objectData.PitchBaselineMax = objectData.content.PitchBaselineMax !== undefined ? objectData.content.PitchBaselineMax : Number("0.8") || 0;
    this._objectData.PitchFactor = objectData.content.PitchFactor !== undefined ? objectData.content.PitchFactor : Number("1.01") || 0;
    this._objectData.PitchTimeout = objectData.content.PitchTimeout !== undefined ? objectData.content.PitchTimeout : Number("1") || 0;
    this._objectData.CurrentPitch = Number("0.8") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Score !== newObjectData.content.Score)
      this._objectData.Score = newObjectData.content.Score;
    if (oldObjectData.content.IncreasingScoreSound !== newObjectData.content.IncreasingScoreSound)
      this._objectData.IncreasingScoreSound = newObjectData.content.IncreasingScoreSound;
    if (oldObjectData.content.PitchBaselineMin !== newObjectData.content.PitchBaselineMin)
      this._objectData.PitchBaselineMin = newObjectData.content.PitchBaselineMin;
    if (oldObjectData.content.PitchBaselineMax !== newObjectData.content.PitchBaselineMax)
      this._objectData.PitchBaselineMax = newObjectData.content.PitchBaselineMax;
    if (oldObjectData.content.PitchFactor !== newObjectData.content.PitchFactor)
      this._objectData.PitchFactor = newObjectData.content.PitchFactor;
    if (oldObjectData.content.PitchTimeout !== newObjectData.content.PitchTimeout)
      this._objectData.PitchTimeout = newObjectData.content.PitchTimeout;
    if (oldObjectData.content.CurrentPitch !== newObjectData.content.CurrentPitch)
      this._objectData.CurrentPitch = newObjectData.content.CurrentPitch;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getScore() {
    return this._objectData.Score !== undefined ? this._objectData.Score : Number("0") || 0;
  }
  _setScore(newValue) {
    this._objectData.Score = newValue;
  }
  _getIncreasingScoreSound() {
    return this._objectData.IncreasingScoreSound !== undefined ? this._objectData.IncreasingScoreSound : "";
  }
  _setIncreasingScoreSound(newValue) {
    this._objectData.IncreasingScoreSound = newValue;
  }
  _getPitchBaselineMin() {
    return this._objectData.PitchBaselineMin !== undefined ? this._objectData.PitchBaselineMin : Number("0.7") || 0;
  }
  _setPitchBaselineMin(newValue) {
    this._objectData.PitchBaselineMin = newValue;
  }
  _getPitchBaselineMax() {
    return this._objectData.PitchBaselineMax !== undefined ? this._objectData.PitchBaselineMax : Number("0.8") || 0;
  }
  _setPitchBaselineMax(newValue) {
    this._objectData.PitchBaselineMax = newValue;
  }
  _getPitchFactor() {
    return this._objectData.PitchFactor !== undefined ? this._objectData.PitchFactor : Number("1.01") || 0;
  }
  _setPitchFactor(newValue) {
    this._objectData.PitchFactor = newValue;
  }
  _getPitchTimeout() {
    return this._objectData.PitchTimeout !== undefined ? this._objectData.PitchTimeout : Number("1") || 0;
  }
  _setPitchTimeout(newValue) {
    this._objectData.PitchTimeout = newValue;
  }
  _getCurrentPitch() {
    return this._objectData.CurrentPitch !== undefined ? this._objectData.CurrentPitch : Number("0.8") || 0;
  }
  _setCurrentPitch(newValue) {
    this._objectData.CurrentPitch = newValue;
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext = {};
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDIconObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDIconObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects2= [];


gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapCounter"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Counter"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RollingCounter")).SetValue(eventsFunctionContext.getObjects("Object")[0]._getScore(), eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RollingCounter")).SetValue(eventsFunctionContext.getObjects("Object")[0]._getScore(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RollingCounter")).ResetDisplayedValue(eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RollingCounter")).ResetDisplayedValue(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var thisGDCounterObjectsList = [...runtimeScene.getObjects("Counter")];
var GDCounterObjects = Hashtable.newFrom({"Counter": thisGDCounterObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDBitmapCounterObjectsList = [...runtimeScene.getObjects("BitmapCounter")];
var GDBitmapCounterObjects = Hashtable.newFrom({"BitmapCounter": thisGDBitmapCounterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Icon": GDIconObjects
, "Counter": GDCounterObjects
, "Background": GDBackgroundObjects
, "BitmapCounter": GDBitmapCounterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Icon": thisGDIconObjectsList
, "Counter": thisGDCounterObjectsList
, "Background": thisGDBackgroundObjectsList
, "BitmapCounter": thisGDBitmapCounterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onCreatedContext.GDBitmapCounterObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext = {};
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDIconObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDIconObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDCounterObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBitmapCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBitmapCounterObjects2= [];


gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects1[i].SetScore(eventsFunctionContext.getObjects("Object")[0]._getScore(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var thisGDCounterObjectsList = [...runtimeScene.getObjects("Counter")];
var GDCounterObjects = Hashtable.newFrom({"Counter": thisGDCounterObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDBitmapCounterObjectsList = [...runtimeScene.getObjects("BitmapCounter")];
var GDBitmapCounterObjects = Hashtable.newFrom({"BitmapCounter": thisGDBitmapCounterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Icon": GDIconObjects
, "Counter": GDCounterObjects
, "Background": GDBackgroundObjects
, "BitmapCounter": GDBitmapCounterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Icon": thisGDIconObjectsList
, "Counter": thisGDCounterObjectsList
, "Background": thisGDBackgroundObjectsList
, "BitmapCounter": thisGDBitmapCounterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBitmapCounterObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.onHotReloadingContext.GDBitmapCounterObjects2.length = 0;


return;
}
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext = {};
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDIconObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDIconObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDCounterObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBitmapCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBitmapCounterObjects2= [];


gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getScore();}
}

}


};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.Score = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var thisGDCounterObjectsList = [...runtimeScene.getObjects("Counter")];
var GDCounterObjects = Hashtable.newFrom({"Counter": thisGDCounterObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDBitmapCounterObjectsList = [...runtimeScene.getObjects("BitmapCounter")];
var GDBitmapCounterObjects = Hashtable.newFrom({"BitmapCounter": thisGDBitmapCounterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Icon": GDIconObjects
, "Counter": GDCounterObjects
, "Background": GDBackgroundObjects
, "BitmapCounter": GDBitmapCounterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Icon": thisGDIconObjectsList
, "Counter": thisGDCounterObjectsList
, "Background": thisGDBackgroundObjectsList
, "BitmapCounter": thisGDBitmapCounterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBitmapCounterObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ScoreContext.GDBitmapCounterObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext = {};
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects3= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects3= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects3= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects3= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects3= [];


gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RisingPitch") > eventsFunctionContext.getObjects("Object")[0]._getPitchTimeout();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects2[i].ResetPitch(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapCounter"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Counter"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getIncreasingScoreSound(), false, 100, eventsFunctionContext.getObjects("Object")[0]._getCurrentPitch());
}
{eventsFunctionContext.getObjects("Object")[0]._setCurrentPitch(eventsFunctionContext.getObjects("Object")[0]._getCurrentPitch()*(eventsFunctionContext.getObjects("Object")[0]._getPitchFactor()))
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RisingPitch");
}
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeObject_PositionAngleScale")).ShakeObject_PositionAngleScale(0.3, 0, 0, 0, 25, 0.1, false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeObject_PositionAngleScale")).ShakeObject_PositionAngleScale(0.2, 0, 0.15 * (( gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1[0].getHeight()), 0, 0, 0.1, false, eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeObject_PositionAngleScale")).ShakeObject_PositionAngleScale(0.2, 0, 0.15 * (( gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1[0].getHeight()), 0, 0, 0.1, false, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__ScoreCounter__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Value") > eventsFunctionContext.getObjects("Object")[0]._getScore());
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Value") < eventsFunctionContext.getObjects("Object")[0]._getScore());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects1[i].ResetPitch(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapCounter"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Counter"), gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setScore(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RollingCounter")).SetValue(eventsFunctionContext.getObjects("Object")[0]._getScore(), eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RollingCounter")).SetValue(eventsFunctionContext.getObjects("Object")[0]._getScore(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScore = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var thisGDCounterObjectsList = [...runtimeScene.getObjects("Counter")];
var GDCounterObjects = Hashtable.newFrom({"Counter": thisGDCounterObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDBitmapCounterObjectsList = [...runtimeScene.getObjects("BitmapCounter")];
var GDBitmapCounterObjects = Hashtable.newFrom({"BitmapCounter": thisGDBitmapCounterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Icon": GDIconObjects
, "Counter": GDCounterObjects
, "Background": GDBackgroundObjects
, "BitmapCounter": GDBitmapCounterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Icon": thisGDIconObjectsList
, "Counter": thisGDCounterObjectsList
, "Background": thisGDBackgroundObjectsList
, "BitmapCounter": thisGDBitmapCounterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects3.length = 0;

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDIconObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDCounterObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.SetScoreContext.GDBitmapCounterObjects3.length = 0;


return;
}
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext = {};
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.idToCallbackMap = new Map();
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDObjectObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDObjectObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDIconObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDIconObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDCounterObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBitmapCounterObjects1= [];
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBitmapCounterObjects2= [];


gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setCurrentPitch(gdjs.randomFloatInRange(eventsFunctionContext.getObjects("Object")[0]._getPitchBaselineMin(), eventsFunctionContext.getObjects("Object")[0]._getPitchBaselineMax()))
}
}

}


};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitch = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDIconObjectsList = [...runtimeScene.getObjects("Icon")];
var GDIconObjects = Hashtable.newFrom({"Icon": thisGDIconObjectsList});
var thisGDCounterObjectsList = [...runtimeScene.getObjects("Counter")];
var GDCounterObjects = Hashtable.newFrom({"Counter": thisGDCounterObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDBitmapCounterObjectsList = [...runtimeScene.getObjects("BitmapCounter")];
var GDBitmapCounterObjects = Hashtable.newFrom({"BitmapCounter": thisGDBitmapCounterObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Icon": GDIconObjects
, "Counter": GDCounterObjects
, "Background": GDBackgroundObjects
, "BitmapCounter": GDBitmapCounterObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Icon": thisGDIconObjectsList
, "Counter": thisGDCounterObjectsList
, "Background": thisGDBackgroundObjectsList
, "BitmapCounter": thisGDBitmapCounterObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScoreCounter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScoreCounter"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBitmapCounterObjects2.length = 0;

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDIconObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDIconObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDCounterObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBitmapCounterObjects1.length = 0;
gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.ResetPitchContext.GDBitmapCounterObjects2.length = 0;


return;
}

gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("ScoreCounter::ScoreCounter", gdjs.evtsExt__ScoreCounter__ScoreCounter.ScoreCounter);
