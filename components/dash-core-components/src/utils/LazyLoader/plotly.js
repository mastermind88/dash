export default () => Promise.resolve(typeof window.Plotly === 'function' ? window.Plotly :
    import(/* webpackChunkName: "plotlyjs" */ 'plotly.js').then(({ default: Plotly }) => {
        window.Plotly = Plotly;
        return Plotly;
    }));

