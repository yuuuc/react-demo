const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { resolve } = require("path");

// 环境区分
console.log("process.env.NODE_ENV=", process.env.NODE_ENV);

const config = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.[contenthash].js",
		path: resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		/**
		 * style-loader 解析import引入的css文件，css-loader 编译css文件
		 */
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"], // "style-loader",
			},
			{
				// 只能代替 url-loader file-loader
				test: /\.(png|jpg|gif)/,
				type: "asset",
				// 资源打包后的名字
				generator: {
					filename: "[name][hash][ext]",
				},
				// 图片base64
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: true, //启用缓存
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		// css 分离
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	devtool: "source-map",
	resolve: {
		// 配置别名
		alias: {
			"~": resolve("src"),
			"@": resolve("src"),
			component: resolve("src/components"),
		},
		// 用户导入模块不用带扩展名 添加 "..." 可以保留默认配置
		extensions: [".js", ".json", ".wasm", "..."],
		// 告诉webpack 优先 src 目录下查找需要解析的文件
		modules: [resolve("src"), "node_modules"],
	},
	externals: {},
	optimization: {
		minimize: true,
		minimizer: [
			// 添加css 压缩配置
			new CssMinimizerPlugin(),
		],
	},
};

// const devtool =  [
//   'eval',
//   'source-map',
//   'eval-source-map',
//   'cheap-source-map',
//   'inline-source-map',
//   'cheap-eval-source-map',
//   'cheap-module-source-map',
//   'inline-cheap-source-map',
//   'cheap-module-eval-source-map',
//   'inline-cheap-module-source-map',
//   'hidden-source-map',
//   'nosources-source-map'
// ]

module.exports = (env, argv) => {
	console.log("argv.mode= ", argv.mode);
	return config;
};
