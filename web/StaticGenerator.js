const URLResolver = require('./URLResolver')
const File = require('./File')

const fileHandler = new File()

const StaticGenerator = {
    generate(options = {}) {
        StaticGenerator.process()

        if (options.watch) {
            console.log('\x1b[36m%s\x1b[0m', "Watching pages and layouts directories for changes")

            let handler = () => {
                console.log('\x1b[36m%s\x1b[0m', "Detected change, processing files.")
                StaticGenerator.process()
                console.log('\x1b[36m%s\x1b[0m', "Process complete, watching again.")
            }

            fileHandler.watch('pages', handler)
            fileHandler.watch('layouts', handler)
        }
    },

    process () {
        fileHandler.index('pages').forEach(file => {
            let page = fileHandler.read(`./pages/${file}`)
            let layout = fetchLayout(page, file)

            /**
             * The filename is used to set the active class for one meny-item.
             * Add the class active:name to enable this, where name corresponds
             * with the filename.
             */
            layout = setActivePage(file, layout)

            // Find all yields, and read corresonding sections from pages
            let sections = (layout.match(/@yield\((.*)\)/g) || [])
                .map(section => section.match(/@yield\((.*)\)/)[1])

             // For each yield, find the page content and insert it
            sections.forEach(section => {
                let regExp = new RegExp(`@section\\(${section}\\)([\\s\\S]+?)@endsection`)
                layout = layout.replace(`@yield(${section})`, page.match(regExp)[1].trim())
            })

            URLResolver.resolvers.forEach(resolver => {
                layout = URLResolver[resolver](file, layout)
            })
            saveFile(file, layout)
        })

        function setActivePage (file, layout) {
            let regexp = new RegExp(`active:${file.split('.')[0]}`, 'g')
            return layout
                .replace(regexp, 'active')
                .replace(/active:[a-zA-Z]+/g, '')
        }

        /**
         * One and only one layout may be used. If @extends is missing, an
         * error is thrown
         */
        function fetchLayout (page, file) {
            let layout = page.match(/@extends\((.*)\)/)

            if (!layout) {
                throw new Error(`Page '${file}' must extend layout file.`)
            }

            return fileHandler.read(`./layouts/${layout[1]}.html`)
        }

        function saveFile (file, layout) {
            let path = file.replace('-', '/');

            if(path.split('/').length == 1)
                path = '.';
            else
                path = './' + path.split('/').slice(0, -1);

            file = file.split('-').slice(-1)[0];

            path.split('/').slice(1).forEach(dir => {
                fileHandler.prepareOutputDirectory(dir);
            });
            fileHandler.save(`${path}/${file}`, layout)
        }
    }
}

module.exports = StaticGenerator
