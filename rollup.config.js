import buble from 'rollup-plugin-buble';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';
import clean from 'postcss-clean';
import progress from 'rollup-plugin-progress';
import replace from 'rollup-plugin-replace';

const isDist = process.env.NODE_ENV === 'production';

const buildPlan = {
    input: 'source/js/index.js',
    output: {
        file: 'static/bundle.js',
        format: 'iife',
        sourcemap: !isDist,
    },
    plugins: [
        progress({
            clearLine: false,
        }),
        replace({
            'process.env.NODE_ENV': process.env.NODE_ENV,
        }),
        postcss({
            extract: true,
            sourceMap: !isDist,
            plugins: [
                autoprefixer(),
                clean(),
            ],
        }),
        buble({
            transforms: {
                modules: false,
                dangerousForOf: true,
            },
            objedtAssign: 'Object.assign',
        }),
        uglify(),
    ],
};

export default buildPlan;
