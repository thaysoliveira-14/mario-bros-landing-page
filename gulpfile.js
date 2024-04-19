// Importa o pacote Gulp
const gulp = require('gulp');

// Importa o pacote gulp-sass e o configura para utilizar o Sass
const sass = require('gulp-sass')(require('sass'));

// Importa o pacote gulp-imagemin para otimização de imagens
const imagemin = require('gulp-imagemin');

// Função para processar os estilos SCSS
function styles() {
    // Seleciona todos os arquivos .scss no diretório src/styles/
    return gulp.src('./src/styles/*.scss')
        // Compila o SCSS para CSS, configurando a saída para 'compressed' (comprimido)
        .pipe(sass({ outputStyle: 'compressed' }))
        // Salva o CSS resultante no diretório dist/css/
        .pipe(gulp.dest('./dist/css'));
}

// Função para otimização de imagens
function imagens() {
    // Seleciona todas as imagens no diretório src/imagens/
    return gulp.src('./src/imagens/**/*')
        // Otimiza as imagens
        .pipe(imagemin())
        // Salva as imagens otimizadas no diretório dist/imagens/
        .pipe(gulp.dest('./dist/imagens'));
}

// Tarefa padrão que executa as funções de processamento em paralelo
exports.default = gulp.parallel(styles, imagens);

// Tarefa de observação para assistir a mudanças nos arquivos SCSS e JavaScript
exports.watch = function () {
    // Observa por mudanças nos arquivos .scss e executa a função 'styles'
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    // Observa por mudanças nos arquivos .js e executa a função 'scripts'
    //gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};