import buble from 'rollup-plugin-buble';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';
import clean from 'postcss-clean';

const isDist = process.env.BUILD === 'production';

const buildPlan = {
    input: 'source/js/index.js',
    output: {
        file: 'static/bundle.js',
        format: 'iife',
        sourcemap: !isDist,
    },
    plugins: [
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
