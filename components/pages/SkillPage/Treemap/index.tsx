import React from 'react';
import Plot from 'react-plotly.js';

export interface PlotData {
  type: string;
  labels: string[];
  parents: string[];
}

export interface Props {
  data: PlotData;
  style?: {
    width: string;
    height: string;
  };
  colorway?: string[];
}

const defaultColorway = [
  '#636EFA',
  '#EF553B',
  '#00CC96',
  '#AB63FA',
  '#19D3F3',
  '#E763FA',
  '#FECB52',
  '#FFA15A',
  '#FF6692',
  '#B6E880',
];
const defaultStyle = { width: '100%', height: '100%' };
const dataStyle = {
  textfont: {
    color: '#fff',
  },
  hoverlabel: {
    font: {
      color: '#fff',
    },
  },
};

const Treemap: React.FC<Props> = ({ data, style = defaultStyle, colorway = defaultColorway }) => (
  <Plot
    data={[{ ...data, ...dataStyle }]}
    layout={{
      margin: { l: 0, r: 0, b: 0, t: 0 },
      autosize: true,
      paper_bgcolor: '#1e1e1e',
      font: {
        color: '#fff',
      },
      colorway: colorway,
      treemapcolorway: colorway,
      extendtreemapcolors: true,
    }}
    useResizeHandler
    autosize
    style={style}
  />
);

export default Treemap;
