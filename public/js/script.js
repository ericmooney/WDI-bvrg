$(document).ready(function(){
  $.ajax(
    '/beverages.json',
    {
      success: function(results){
        var graph_data = $.parseJSON(results).data;
        var body = $('body');

        if (bvrg.scope === "week") {
          body.append('<div id="beverage_graph_week" class="graph"></div>');
        }
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
            colors: ['#6f4e37','skyblue','#220C0D', 'gold']
          });
        }
      }
    }
  );
});
