export default () => Promise.resolve(typeof window.Mathjax === 'function' ? window.Mathjax :
    import(/* webpackChunkName: "mathjax" */ 'mathjax-full/components/src/tex-svg/tex-svg.js').then(({ default: Mathjax }) => {
        window.Mathjax = Mathjax;
        return Mathjax;
    }));

