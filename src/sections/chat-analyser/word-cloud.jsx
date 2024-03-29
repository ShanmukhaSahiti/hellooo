import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function WordCloud(props) {
    const {data, id} = props??[];
  useLayoutEffect(() => {
    const root = am5.Root.new(id);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const series = root.container.children.push(am5wc.WordCloud.new(root, {
        categoryField: "word",
        valueField: "freq",
      }));
      series.labels.template.set("tooltipText", "{category}: [bold]{value}[/]");
      series.data.setAll(data)
    return () => {
      root.dispose();
    };
  }, [data, id]);

  return (
    <div id={id} style={{ width: "100%", height: "500px" }} />
  );
}
export default WordCloud;