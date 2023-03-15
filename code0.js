gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDSummonObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDSlimeBallObjects1= [];
gdjs.Untitled_32sceneCode.GDSlimeBallObjects2= [];
gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1= [];
gdjs.Untitled_32sceneCode.GDSlimeBalllObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects2= [];
gdjs.Untitled_32sceneCode.GDCollisionObjects1= [];
gdjs.Untitled_32sceneCode.GDCollisionObjects2= [];
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassAndSandObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassAndSandObjects2= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDArrowObjects1= [];
gdjs.Untitled_32sceneCode.GDArrowObjects2= [];
gdjs.Untitled_32sceneCode.GDFireObjects1= [];
gdjs.Untitled_32sceneCode.GDFireObjects2= [];
gdjs.Untitled_32sceneCode.GDSummonObjects1= [];
gdjs.Untitled_32sceneCode.GDSummonObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects2= [];
gdjs.Untitled_32sceneCode.GDHoleStartObjects1= [];
gdjs.Untitled_32sceneCode.GDHoleStartObjects2= [];
gdjs.Untitled_32sceneCode.GDBathWallTilesObjects1= [];
gdjs.Untitled_32sceneCode.GDBathWallTilesObjects2= [];
gdjs.Untitled_32sceneCode.GDWallObjects1= [];
gdjs.Untitled_32sceneCode.GDWallObjects2= [];
gdjs.Untitled_32sceneCode.GDSandObjects1= [];
gdjs.Untitled_32sceneCode.GDSandObjects2= [];
gdjs.Untitled_32sceneCode.GDSecurityFenceObjects1= [];
gdjs.Untitled_32sceneCode.GDSecurityFenceObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBallObjects1Objects = Hashtable.newFrom({"SlimeBall": gdjs.Untitled_32sceneCode.GDSlimeBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBallObjects1Objects = Hashtable.newFrom({"SlimeBall": gdjs.Untitled_32sceneCode.GDSlimeBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBallObjects1Objects = Hashtable.newFrom({"SlimeBall": gdjs.Untitled_32sceneCode.GDSlimeBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBalllObjects1Objects = Hashtable.newFrom({"SlimeBalll": gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBalllObjects1Objects = Hashtable.newFrom({"SlimeBalll": gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].isEffectEnabled("H") ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Collision"), gdjs.Untitled_32sceneCode.GDCollisionObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCollisionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCollisionObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("HoleStart"), gdjs.Untitled_32sceneCode.GDHoleStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeBall"), gdjs.Untitled_32sceneCode.GDSlimeBallObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1[i].SetMaxValue(100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHoleStartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHoleStartObjects1[i].setSize(128, 128);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeBallObjects1[i].setSize(16, 16);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.Untitled_32sceneCode.GDFireObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFireObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFireObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDFireObjects1[k] = gdjs.Untitled_32sceneCode.GDFireObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFireObjects1.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeBall"), gdjs.Untitled_32sceneCode.GDSlimeBallObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBallObjects1Objects, (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getAngleToObject((gdjs.Untitled_32sceneCode.GDEnemyObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDEnemyObjects1[0] : null))), 50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 99.9;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(0.1);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.Untitled_32sceneCode.GDFireObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Summon"), gdjs.Untitled_32sceneCode.GDSummonObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFireObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSummonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSummonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeBall"), gdjs.Untitled_32sceneCode.GDSlimeBallObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBallObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeBall"), gdjs.Untitled_32sceneCode.GDSlimeBallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBallObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeBallObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Untitled_32sceneCode.GDSummonObjects1.length = 0;


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.GDSummonObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Summon"), gdjs.Untitled_32sceneCode.GDSummonObjects2);
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSummonObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSummonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.Untitled_32sceneCode.GDSummonObjects2[k] = gdjs.Untitled_32sceneCode.GDSummonObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSummonObjects2.length = k;if( gdjs.Untitled_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDSummonObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDSummonObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDSummonObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDSummonObjects1_1final.push(gdjs.Untitled_32sceneCode.GDSummonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDSummonObjects1_1final, gdjs.Untitled_32sceneCode.GDSummonObjects1);
}
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects, 384, 640, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].isEffectEnabled("H") ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SlimeBalll"), gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getCenterXInScene()), (gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getCenterYInScene()), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBalllObjects1Objects, (( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getAngleToObject((gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null))), 45, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeBalll"), gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSlimeBalllObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(20);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 0;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeBalllObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeBalllObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollisionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollisionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndSandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndSandObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDArrowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDArrowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFireObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFireObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSummonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSummonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenFlatBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHoleStartObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHoleStartObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBathWallTilesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBathWallTilesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSandObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSecurityFenceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSecurityFenceObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
