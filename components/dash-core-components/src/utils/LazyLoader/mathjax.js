export default () => Promise.resolve(window.Mathjax ||
    import(/* webpackChunkName: "mathjax" */ 'mathjax-full/components/src/tex-svg/tex-svg.js').then(({ default: Mathjax }) => {
        window.Mathjax = Mathjax;
        return Mathjax;
    }));

