﻿/**
 * UI.url_viewer 设计器
 * @dependency  stdfunc.js、metadata.js、ui.textbox.js
 */

UI.URLViewer_Designer = function(control) {
    arguments.callee.superClass.constructor.apply(this, arguments);
    this.defaultWidth = "99%";
    this.defaultHeigth = "600px";
};

// 声明继承自基本设计器 UI.Designer
extend(UI.URLViewer_Designer, UI.Container_Designer);

// 声明元信息，也保持元信息的继承
UI.URLViewer_Designer.prototype.meta = UI.extendMeta(UI.Container_Designer.prototype.meta, {
    type: "UI.URLViewer",
    props: {
	   "url": {
                datatype: "String",
                readOnly: false,
                designable: false,
                description: "",
                defaultValue: ""
            },
		"align": {
                datatype: "String",
                readOnly: true,
                designable: false,
                category: "Common",
                description: "",
                valueRange: ["left", "center", "right"],
                defaultValue: "center",
                serializable: false
            }
    },
    methods: { 
    	// _getDataspanel:{alias:"getDatas",params:
        // [],getValue:true},_setDataspanel:{alias:"setDatas",params:
        // [{name:"dataspanel",alias:"jsonArrayText"}]},
    	_setURL:{alias:"setURL",params: [{name:"url",alias:"url"}]},
    	_getURL:{alias:"getURL",params: [],getValue:true},
    	_setHTML:{alias:"setHTML",params: [{name:"html",alias:"html"}]}
    },
    events: {
    }
});
MetaHub.register(UI.URLViewer_Designer.prototype.meta);

UI.URLViewer_Designer.prototype.render = function() {
    var rendered = UI.Div_Designer.superClass.render.apply(this, arguments);
	if(rendered){
        this._control.setStyle("border:rgb(247,103,103) 1px dashed; text-align:center;font-size:12px; color:#888;");
    }
    return rendered;
};