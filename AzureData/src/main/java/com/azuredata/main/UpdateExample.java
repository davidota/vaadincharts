package com.azuredata.main;

import java.util.Random;

import com.github.appreciated.apexcharts.ApexCharts;
import com.github.appreciated.apexcharts.ApexChartsBuilder;
import com.github.appreciated.apexcharts.config.TitleSubtitle;
import com.github.appreciated.apexcharts.config.builder.ChartBuilder;
import com.github.appreciated.apexcharts.config.builder.DataLabelsBuilder;
import com.github.appreciated.apexcharts.config.builder.PlotOptionsBuilder;
import com.github.appreciated.apexcharts.config.builder.XAxisBuilder;
import com.github.appreciated.apexcharts.config.chart.Type;
import com.github.appreciated.apexcharts.config.plotoptions.builder.BarBuilder;
import com.github.appreciated.apexcharts.helper.Series;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("update")
public class UpdateExample extends VerticalLayout {
        Random rd = new Random();

        public UpdateExample() {
                ApexCharts Linechart = getLineBehavior();
                ApexCharts Histochart = getHistogramBehavior();
                Button update = new Button("Update", buttonClickEvent -> {
                        Linechart.updateSeries(new Series<>(rd.nextDouble(0, 2000), rd.nextDouble(0, 2000),
                                        rd.nextDouble(0, 2000), rd.nextDouble(0, 2000), rd.nextDouble(0, 2000),
                                        rd.nextDouble(0, 2000), rd.nextDouble(0, 2000), rd.nextDouble(0, 2000),
                                        rd.nextDouble(0, 2000), rd.nextDouble(0, 2000)));
                        Notification.show("The chart was updated!");
                        Histochart.updateSeries(new Series<>(rd.nextDouble(0, 2000), rd.nextDouble(0, 2000),
                                        rd.nextDouble(0, 2000), rd.nextDouble(0, 2000), rd.nextDouble(0, 2000),
                                        rd.nextDouble(0, 2000), rd.nextDouble(0, 2000), rd.nextDouble(0, 2000),
                                        rd.nextDouble(0, 2000), rd.nextDouble(0, 2000)));
                        Notification.show("The chart was updated!");
                });
                add(Linechart, Histochart, update);
        }

        ApexCharts getLineBehavior() {
                ApexCharts chart = ApexChartsBuilder.get().withChart(ChartBuilder.get()
                                .withType(Type.AREA)
                                .build())
                                .withPlotOptions(PlotOptionsBuilder.get()
                                                .withBar(BarBuilder.get()
                                                                .withHorizontal(false)
                                                                .build())
                                                .build())
                                .withDataLabels(DataLabelsBuilder.get()
                                                .withEnabled(false)
                                                .build())
                                .withSeries(new Series<>(400.0, 430.0, 448.0, 470.0, 540.0, 580.0, 690.0, 1100.0,
                                                1200.0, 1380.0))
                                .withXaxis(XAxisBuilder.get()
                                                .withCategories()
                                                .build())
                                .build();
                chart.setHeight("300px");
                TitleSubtitle ts = new TitleSubtitle();
                ts.setText("Line Chart");
                chart.setTitle(ts);
                return chart;
        }

        ApexCharts getHistogramBehavior() {
                ApexCharts chart = ApexChartsBuilder.get().withChart(ChartBuilder.get()
                                .withType(Type.HISTOGRAM)
                                .build())
                                .withPlotOptions(PlotOptionsBuilder.get()
                                                .withBar(BarBuilder.get()
                                                                .withHorizontal(false)
                                                                .build())
                                                .build())
                                .withDataLabels(DataLabelsBuilder.get()
                                                .withEnabled(false)
                                                .build())
                                .withSeries(new Series<>(400.0, 430.0, 448.0, 470.0, 540.0, 580.0, 690.0, 1100.0,
                                                1200.0, 1380.0))
                                .withXaxis(XAxisBuilder.get()
                                                .withCategories()
                                                .build())
                                .build();
                chart.setHeight("300px");
                TitleSubtitle ts = new TitleSubtitle();
                ts.setText("Histo Chart");
                chart.setTitle(ts);
                return chart;
        }
}
