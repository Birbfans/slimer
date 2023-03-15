gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDTitleObjects1= [];
gdjs.Start_32MenuCode.GDTitleObjects2= [];
gdjs.Start_32MenuCode.GDPCObjects1= [];
gdjs.Start_32MenuCode.GDPCObjects2= [];
gdjs.Start_32MenuCode.GDMobileObjects1= [];
gdjs.Start_32MenuCode.GDMobileObjects2= [];

gdjs.Start_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PC"), gdjs.Start_32MenuCode.GDPCObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32MenuCode.GDPCObjects1.length;i<l;++i) {
    if ( gdjs.Start_32MenuCode.GDPCObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Start_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Start_32MenuCode.GDPCObjects1[k] = gdjs.Start_32MenuCode.GDPCObjects1[i];
        ++k;
    }
}
gdjs.Start_32MenuCode.GDPCObjects1.length = k;}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mobile"), gdjs.Start_32MenuCode.GDMobileObjects1);

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32MenuCode.GDMobileObjects1.length;i<l;++i) {
    if ( gdjs.Start_32MenuCode.GDMobileObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Start_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Start_32MenuCode.GDMobileObjects1[k] = gdjs.Start_32MenuCode.GDMobileObjects1[i];
        ++k;
    }
}
gdjs.Start_32MenuCode.GDMobileObjects1.length = k;}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Start_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Start_32MenuCode.GDPCObjects1.length = 0;
gdjs.Start_32MenuCode.GDPCObjects2.length = 0;
gdjs.Start_32MenuCode.GDMobileObjects1.length = 0;
gdjs.Start_32MenuCode.GDMobileObjects2.length = 0;

gdjs.Start_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
