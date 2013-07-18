$(document).ready(function(){
  $.ajax(
    '/beverages.json',
    {
      success: function(results){
        var graph_data = $.parseJSON(results).data;
        var body = $('body');
        var coffee_color = '#6f4e37';
        var water_color = 'skyblue';
        var soda_color = '#220C0D';
        var beer_color = 'gold';

        if (bvrg.scope === "week") {
          body.append('<div id="beverage_graph_week" class="graph"></div>');

          Morris.Line({
            element: 'beverage_graph_week',
            data: graph_data,
            xkey: 'day',
            ykeys: ['coffee', 'water', 'soda', 'beer'],
            labels: ['coffee', 'water', 'soda', 'beer'],
            parseTime: false,
            lineColors: [coffee_color, water_color, soda_color, beer_color],
            hideHover: true
          });


        }

        // day donut chart

        if (bvrg.scope === "today") {

          body.append('<div id="beverage_graph_day" class="graph"></div>');
          day_data = graph_data[graph_data.length - 1];

          Morris.Donut({
            element: 'beverage_graph_day',
            data: [
              {label: "Coffee", value: day_data.coffee},
              {label: "Water", value: day_data.water},
              {label: "Beer", value: day_data.beer},
              {label: "Soda", value: day_data.soda}
            ],
            colors: [coffee_color, water_color, soda_color, beer_color]
          });
        }
      }
    }
  );
});
