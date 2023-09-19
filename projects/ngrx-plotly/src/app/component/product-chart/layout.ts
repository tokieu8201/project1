import { Product } from "../../models/product.model";

export const layout = (products: Product[]) => ({
  title: 'Product Chart',
  showlegend: true,
  plot_bgcolor: '#111d27',
  paper_bgcolor: '#262626',
  barmode: 'group',
  bargap: 0.5,
  bargroupgap: 0.1,
  font: {
    color: '#a6a6a6',
  },
  margin: {
    l: 150,
    r: 150,
  },
  xaxis: {
    title: 'Product Name',
    domain: [0.15, 0.9],
    tickangle: -45,
  },
  yaxis: {
    title: 'Quantity',
    range: [0, Math.max(...products.map((product) => product.quantity)) + 20],
    side: 'left',
    position: 0.05,
    zeroline: false,
    showgrid: false,
    tick0: 0,
    dtick: 20,
    ticklen: 10,
    minor: {
      ticklen: 5,
    },
    tickwidth: 1.2,
    color: '#a6a6a6',
  },
  yaxis2: {
    title: 'Price',
    range: [0, Math.max(...products.map((product) => product.price)) + 10000],
    side: 'left',
    overlaying: 'y',
    position: 0.12,
    zeroline: false,
    showgrid: false,
    tick0: 0,
    dtick: 10000,
    ticklen: 10,
    minor: {
      ticklen: 5,
    },
    tickwidth: 1.2,
    color: '#a6a6a6',
  },
  yaxis3: {
    title: 'Sales',
    range: [0, Math.max(...products.map((product) => product.sales)) + 20],
    side: 'right',
    overlaying: 'y',
    position: 0.93,
    zeroline: false,
    showgrid: false,
    tick0: 0,
    dtick: 20,
    ticklen: 10,
    minor: {
      ticklen: 5,
    },
    tickwidth: 1.2,
    color: '#a6a6a6',
  },
});