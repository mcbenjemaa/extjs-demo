Ext.define('extjsApp.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:24px;">Filter</div>'
    }
  ]
  // },
	// afterShow: function () {
	// 	toogleBtn();
	// }

})