//handsontable
$(function() {
  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2' , '升','+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic .NET', '6', '降', '-1017%',],
    ['JavaScript', '7', '降', '-0.85%']
  ];

  var container = $('.table1');
  
  /* global Handsontable: true */
  var hot = new Handsontable(container.get(0), {
    data: data,
    contextMenu: true,          // 启用快捷菜单
    manualRowResize : true,     // 允许行拖动  
    manualColumnResize : true,  // 允许列拖动 
    title:'2020年语言排行榜',
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ]
  });

  return hot;
});
//Echarts
$(function() {
  /* global echarts: true */
  var myChart = echarts.init($('.table2').get(0));

  var option = {
    title: {
      text: 'avaScript语言排名变化'
    },
    tooltip: {
      trigger : 'axis',
    },
    xAxis: {
      data: ["2020","2005","2010","2015","2020"]
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      data: [6, 9, 8, 8, 7]
    }]
  };

  myChart.setOption(option);
});