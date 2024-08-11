# OrbisMC Documentation source

Welcome! Feel free to correct or add new content.


### How to edit documents
You can make documents by going cloning this branch, then going into src/docs. Then you will see all of the documents pages. To make a page, simply make a new file with the file extension .mdx.
After that, use Markdown to format your pages. Feel free to use a drag-and-drop Markdown editor. Then just copy the source into the file you want to make a page for.
### Building static HTML files for production
To build  static HTML, CSS, and JS files, do 
```
npm i
npm run build
```
The built files will be available in build/.
### Previewing Changes

You can preview your changes by running the following commands (requires npm & Node to be installed):

```
npm i
npm start
```

This will start a local development server and open up a browser window. Most changes you make will be updated live without restarting the server.

### Contributing

Please follow the [guide](https://docusaurus.io/docs/markdown-features/react) when you modify `mdx` files.
