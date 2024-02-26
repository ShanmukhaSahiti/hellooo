import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function LineChart(props) {
  const { data } = props ?? {};

  useLayoutEffect(() => {
    const root = am5.Root.new('lineChartDiv');
    if (data?.labels?.length > 0) {
      const lineData = new Array(data?.labels?.length);
      for (let i = 0; i < lineData.length; i+=1) {
        lineData[i] = {"date" : data?.labels[i], "value": data?.datasets[0]?.data[i]}
      }

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    root.dateFormatter.setAll({
      dateFormat: 'yyyy',
      dateFields: ['valueX'],
    });

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    // const easing = am5.ease.linear;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 70,
        }),
        tooltip: am5.Tooltip.new(root, {}),

      })
    );
    xAxis.children.push(am5.Label.new(root, {
      text: 'Date',
      textAlign: 'center',
      x: am5.p50,
      fontWeight: 'bold'
    }));

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    yAxis.children.unshift(am5.Label.new(root, {
      text: 'Messages',
      textAlign: 'center',
      y: am5.p50,
      rotation: -90,
      fontWeight: 'bold'
    }));

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        connect: false,
        xAxis,
        yAxis,
        valueYField: 'value',
        valueXField: 'date',
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: 'horizontal',
          labelText: '{valueY}',
        }),
      })
    );

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true,
    });

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: 'yyyy-MM-dd',
      dateFields: ['date'],
    });

    series.data.setAll(lineData);

    series.bullets.push(() => {
      const circle = am5.Circle.new(root, {
        radius: 4,
        fill: root.interfaceColors.get('background'),
        stroke: series.get('fill'),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    const cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        xAxis,
        behavior: 'none',
      })
    );
    cursor.lineY.set('visible', false);

    // add scrollbar
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    }
    return () => {
      root.dispose();
    }; 
  }, [data]);

  return <div id="lineChartDiv" style={{ width: '100%', height: '500px' }} />;
}
export default LineChart;
